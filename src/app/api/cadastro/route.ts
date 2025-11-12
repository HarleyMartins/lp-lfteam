import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  try {
    const users = await prisma.lead.findMany({
      orderBy: { id: "desc" },
    })
    return NextResponse.json(users)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Erro ao buscar cadastros" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const { name, phone } = await req.json()

    if (!name || !phone) {
      return NextResponse.json({ error: "Nome e telefone são obrigatórios" }, { status: 400 })
    }

    // 🔍 Normaliza o telefone (remove caracteres não numéricos)
    const cleanedPhone = phone.replace(/\D/g, "")

    // 🧠 Verifica se já existe um lead com o mesmo telefone
    const existingLead = await prisma.lead.findFirst({
      where: { phone: cleanedPhone },
    })

    if (existingLead) {
      // Se já existir, apenas retorna o lead existente (não cria outro)
      return NextResponse.json(
        { message: "Lead já cadastrado", lead: existingLead },
        { status: 200 }
      )
    }

    // ✅ Cria novo lead
    const newLead = await prisma.lead.create({
      data: { name, phone: cleanedPhone },
    })

    return NextResponse.json(newLead, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Erro ao salvar cadastro" }, { status: 500 })
  }
}
