// Updated AdminPage with Standalone Payment Status Section

"use client"

import { useEffect, useState, useMemo } from "react"
import { toast, Toaster } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Search } from "lucide-react"

interface User {
  id: number
  name: string
  phone: string
  lastPayment?: string
  paymentMethod?: string
}

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([])
  const [authorized, setAuthorized] = useState(false)
  const [password, setPassword] = useState("")
  const [search, setSearch] = useState("")

  const handleLogin = () => {
    if (password === "lf123") {
      setAuthorized(true)
    } else {
      alert("Senha incorreta!")
    }
  }

  useEffect(() => {
    if (authorized) {
      fetch("/api/cadastro")
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) setUsers(data)
        })
        .catch(() => alert("Erro ao buscar cadastros"))
    }
  }, [authorized])

  const filteredUsers = useMemo(() => {
    const q = search.toLowerCase()
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.phone.toLowerCase().includes(q)
    )
  }, [search, users])

  // 🔥 Utility - Determine color based on due date
  const getPaymentColor = (dateString?: string) => {
    if (!dateString) return "text-muted-foreground"
    const today = new Date()
    const lastPayment = new Date(dateString)
    const diffDays = Math.floor((today.getTime() - lastPayment.getTime()) / (1000 * 60 * 60 * 24))

    if (diffDays >= 25) return "text-red-600" // payment overdue soon
    if (diffDays >= 15) return "text-orange-500" // approaching
    return "text-green-600" // safe
  }

  if (!authorized) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-center">Área Restrita</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite a senha"
            />
            <Button onClick={handleLogin}>Entrar</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8 space-y-6">
       <Toaster richColors position="top-right" />

      {/* 🔵 Payment Status (not inside table) */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle>Status de Pagamento</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Informações sobre o último pagamento</p>

          {(() => {
            const dueDate = new Date("2025-12-10")
            const today = new Date()
            const diff = (dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
            const isLate = diff < 0
            const isClose = diff <= 3

            return (
              <div
                className="mt-4 p-3 rounded-lg border"
                style={{
                  borderColor: isLate || isClose ? "#dc2626" : "#16a34a",
                  background: isLate || isClose ? "#fee2e2" : "#dcfce7",
                }}
              >
                {isLate ? (
                  <div>
                    <p className="text-red-600 font-semibold">⚠️ Pagamento vencido!</p>
                    <p className="mt-2 font-medium">Último pagamento: 10/11/2025</p>
                    <p className="text-sm text-muted-foreground">Método: Pix</p>
                    <p className="text-sm text-muted-foreground">R$90,00</p>
                    <Button
                    className="mt-3"
                    onClick={() => {
                      navigator.clipboard.writeText("5964c8c0-d631-47ff-809d-870b9ef7410a")
                      toast.success("Chave Pix copiada!")
                    }}
                  >
                    Copiar chave Pix
                  </Button>
                </div>
                ) : isClose ? (
                  <div>
                  <p className="text-red-600 font-semibold">⚠️ O pagamento vence em breve!</p>
                  <p className="mt-2 font-medium">Último pagamento: 10/11/2025</p>
                    <p className="text-sm text-muted-foreground">Método: Pix</p>
                    <p className="text-sm text-muted-foreground">R$90,00</p>
                    <Button
                    className="mt-3"
                    onClick={() => {
                      navigator.clipboard.writeText("5964c8c0-d631-47ff-809d-870b9ef7410a")
                      toast.success("Chave Pix copiada!")
                    }}
                  >
                    Copiar chave Pix
                  </Button>
                </div>
                ) : (
                  <div>
                  <p className="text-green-600 font-semibold">✔️ Pagamento em dia.</p>
                  <p className="mt-2 font-medium">Último pagamento: 10/11/2025</p>
                </div>
                )}

              </div>
            )
          })()}
        </CardContent>
      </Card>

      {/* 🔽 Restante da página */}

      <Card>
        <CardHeader>
          <CardTitle>Cadastros</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">

          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome ou telefone..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="hidden md:block">
            <Table>
              <TableCaption>Lista de pessoas cadastradas.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Telefone</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filteredUsers.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-center text-muted-foreground"
                    >
                      Nenhum cadastro encontrado.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.phone}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="secondary" size="icon" asChild>
                          <a
                            href={`https://wa.me/55${user.phone.replace(/\D/g, "")}`}
                            target="_blank"
                          >
                            <MessageCircle className="h-5 w-5" />
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          <div className="md:hidden grid gap-4">
            {filteredUsers.length === 0 ? (
              <p className="text-center text-muted-foreground">
                Nenhum cadastro encontrado.
              </p>
            ) : (
              filteredUsers.map((user) => (
                <Card key={user.id} className="p-4 space-y-2">
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.phone}</p>
                  </div>

                  <div>
                    <p className={`font-medium ${getPaymentColor(user.lastPayment)}`}>
                      Último pagamento: {user.lastPayment || "-"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Método: {user.paymentMethod || "-"}
                    </p>
                  </div>

                  <Button size="sm" variant="secondary" asChild className="self-end">
                    <a
                      href={`https://wa.me/55${user.phone.replace(/\D/g, "")}`}
                      target="_blank"
                    >
                      <MessageCircle className="h-4 w-4 mr-1 inline" />
                      WhatsApp
                    </a>
                  </Button>
                </Card>
              ))
            )}
          </div>

        </CardContent>
      </Card>
    </div>
  )
}
