import {
  Dumbbell,
  Users,
  HeartPulse,
  ClipboardCheck,
  CalendarDays,
  MessageCircle,
  Activity,
  LucideIcon,
} from "lucide-react";
import CtaButton from "./CtaButton";

type Item = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const items: Item[] = [
  {
    icon: Dumbbell,
    title: "Treino Personalizado",
    text: "Treinos feitos sob medida para o seu nível e objetivo, ajustados conforme sua evolução e rotina.",
  },
  {
    icon: HeartPulse,
    title: "Orientação sobre Alimentação",
    text: "Dicas simples e realistas para melhorar sua alimentação sem precisar seguir dietas radicais.",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação Física e Postural",
    text: "Avaliação individual para entender seu ponto de partida e corrigir movimentos de forma segura.",
  },
  {
    icon: CalendarDays,
    title: "Acompanhamento Constante",
    text: "Suporte direto pelo WhatsApp para tirar dúvidas e ajustar seu plano sempre que precisar.",
  },
  {
    icon: Activity,
    title: "Evolução Garantida",
    text: "Acompanhamento próximo, com foco em resultados reais e melhora contínua do seu desempenho.",
  },
];

export default function WhatYouGet() {
  return (
    <section id="o-que-voce-recebe" className="relative py-24">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-[url('/benefits-bg.jpg')] bg-cover bg-center"
        aria-hidden="true"
      />
      {/* Gradiente branco sobre a imagem */}
      <div
        className="absolute inset-0 bg-linear-to-b from-white/95 via-white/90 to-white/80"
        aria-hidden="true"
      />

      {/* Conteúdo */}
      <div className="relative container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-6">
          Passo a passo do que você receberá ao entrar no time
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Um programa completo pensado para gerar resultados reais — aqui você tem o suporte,
          técnica e acompanhamento necessários para evoluir com segurança.
        </p>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it, idx) => {
            const Icon = it.icon;
            const isGreen = idx % 2 === 0; // alterna cores
            return (
              <article
                key={idx}
                className={`rounded-2xl overflow-hidden shadow-lg transform transition hover:scale-105`}
                style={{
                  backgroundColor: isGreen ? "#1b87ec" : "#0b0b0b",
                }}
              >
                <div className={`p-6 ${isGreen ? "text-black" : "text-white"}`}>
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex items-center justify-center rounded-lg w-14 h-14 ${
                        isGreen ? "bg-black/10" : "bg-white/10"
                      }`}
                    >
                      <Icon className={`${isGreen ? "text-black" : "text-white"} w-7 h-7`} />
                    </div>

                    <div>
                      <h3 className={`text-xl font-bold ${isGreen ? "text-black" : "text-white"}`}>
                        {it.title}
                      </h3>
                      <p
                        className={`mt-2 text-sm leading-relaxed ${
                          isGreen ? "text-black/80" : "text-white/80"
                        }`}
                      >
                        {it.text}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA final */}
        <div className="text-center mt-12">
          <CtaButton />
          {/* <p className="text-gray-700 mt-4 text-sm">
            Planos a partir de <span className="font-bold text-[#1b87ec]">R$199/mês</span>
          </p> */}
        </div>
      </div>
    </section>
  );
}
