"use client"

import { useEffect, useState } from "react"
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

interface User {
  id: number
  name: string
  phone: string
}

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([])
  const [authorized, setAuthorized] = useState(false)
  const [password, setPassword] = useState("")

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
        .then(setUsers)
        .catch(() => alert("Erro ao buscar cadastros"))
    }
  }, [authorized])

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
    <div className="min-h-screen p-10">
      <Card>
        <CardHeader>
          <CardTitle>Cadastros</CardTitle>
        </CardHeader>
        <CardContent>
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
              {users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-muted-foreground">
                    Nenhum cadastro encontrado.
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="secondary"
                        asChild
                      >
                        <a
                          href={`https://wa.me/55${user.phone.replace(/\D/g, "")}`}
                          target="_blank"
                        >
                          WhatsApp
                        </a>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
