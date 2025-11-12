"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-2xl font-bold text-blue-600">LF Team</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#sobre" className="hover:text-blue-600">Sobre</a>
          <a href="#planos" className="hover:text-blue-600">Planos</a>
          <a href="#resultados" className="hover:text-blue-600">Resultados</a>
          <a href="#contato" className="hover:text-blue-600">Contato</a>
        </nav>
        <a
          href="/cadastro"
          target="_blank"
          className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Fale comigo
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white px-4 py-2 space-y-2">
          <a href="#sobre" className="block hover:text-blue-600">Sobre</a>
          <a href="#planos" className="block hover:text-blue-600">Planos</a>
          <a href="#resultados" className="block hover:text-blue-600">Resultados</a>
          <a href="#contato" className="block hover:text-blue-600">Contato</a>
        </div>
      )}
    </header>
  );
}
