"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface LeadModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function LeadModal({ open, onOpenChange }: LeadModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)

  function formatPhone(value: string) {
    const cleaned = value.replace(/\D/g, "")
    const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/)
    if (match) {
      const [, ddd, first, last] = match
      if (last) return `(${ddd}) ${first}-${last}`
      else if (first) return `(${ddd}) ${first}`
      else if (ddd) return `(${ddd}`
    }
    return value
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      })

      if (!res.ok) {
        alert("Erro ao salvar seus dados. Tente novamente.")
        return
      }

      // abrir WhatsApp após salvar
      const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5588993815330"
      const message = `Olá! Me chamo ${name} e quero saber mais sobre a consultoria.`
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

      window.open(url, "_blank")
      onOpenChange(false)
    } catch (error) {
      alert("Erro ao enviar os dados.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <form onSubmit={handleSubmit}>
        <DialogContent className="sm:max-w-[425px] dark:bg-zinc-950">
          <DialogHeader>
            <DialogTitle className="text-black">Opa 💪🏻</DialogTitle>
            <DialogDescription>
              Antes de alcançar sua melhor forma, deixe seu nome e número abaixo:
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label className="text-black" htmlFor="name">Nome</Label>
              <Input
                className="text-black"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label className="text-black" htmlFor="phone">Telefone</Label>
              <Input
                className="text-black"
                id="phone"
                maxLength={15}
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                placeholder="(00) 00000-0000"
                required
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button className="text-black" variant="outline" type="button">
                Cancelar
              </Button>
            </DialogClose>
            <Button onClick={handleSubmit} type="submit" disabled={loading}>
              {loading ? "Indo..." : "Ir para o WhatsApp"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
