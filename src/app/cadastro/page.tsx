"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Cadastro() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [error, setError] = useState("")

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, "")
    const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/)
    if (!match) return value
    return !match[2]
      ? `(${match[1]}`
      : !match[3]
      ? `(${match[1]}) ${match[2]}`
      : `(${match[1]}) ${match[2]}-${match[3]}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !phone) {
      setError("Preencha todos os campos.")
      return
    }

    const cleanedPhone = phone.replace(/\D/g, "")
    if (cleanedPhone.length < 10) {
      setError("Número inválido. Use o formato (XX) XXXXX-XXXX.")
      return
    }

    setError("")

    // Envia para o banco via API
    await fetch("/api/cadastro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone }),
    })

    // Redireciona para WhatsApp
    const whatsappUrl = `https://wa.me/55${cleanedPhone}`
    router.push(whatsappUrl)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md bg-zinc-900 rounded-2xl shadow-[0_0_25px_#0084ff40] p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#0084ff]">
          Faça parte do time 💪
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-2 text-gray-300">Nome</label>
            <Input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
              className="bg-black border border-[#0084ff] text-white focus:ring-2 focus:ring-[#0084ff]"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Telefone</label>
            <Input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              placeholder="(XX) XXXXX-XXXX"
              className="bg-black border border-[#0084ff] text-white focus:ring-2 focus:ring-[#0084ff]"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-[#0084ff] text-black font-semibold hover:bg-[#00a6ff]"
          >
            Enviar e ir para o WhatsApp
          </Button>
        </form>
      </div>
    </div>
  )
}
