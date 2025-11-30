"use client"

import { useEffect, useState, useMemo } from "react"
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

  // 🔍 Filtragem por nome ou telefone
  const filteredUsers = useMemo(() => {
    const q = search.toLowerCase()
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.phone.toLowerCase().includes(q)
    )
  }, [search, users])

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

      <Card>
        <CardHeader>
          <CardTitle>Cadastros</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">

          {/* Barra de busca */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome ou telefone..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* ----------- TABELA DESKTOP ----------- */}
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

          {/* ----------- LISTA MOBILE ----------- */}
          <div className="md:hidden grid gap-4">
            {filteredUsers.length === 0 ? (
              <p className="text-center text-muted-foreground">
                Nenhum cadastro encontrado.
              </p>
            ) : (
              filteredUsers.map((user) => (
                <Card key={user.id} className="p-4">
                  <div className="flex flex-col gap-2">
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {user.phone}
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
                  </div>
                </Card>
              ))
            )}
          </div>

        </CardContent>
      </Card>
    </div>
  )
}
