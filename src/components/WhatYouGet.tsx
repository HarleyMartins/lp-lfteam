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

type Item = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const items: Item[] = [
  {
    icon: Dumbbell,
    title: "Treino Individualizado",
    text: "Plano de treino periodizado, específico para seu objetivo, nível e rotina — sempre evolutivo e seguro.",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    text: "Profissionais pós-graduados acompanhando resultados, ajustes e evolução do seu programa.",
  },
  {
    icon: HeartPulse,
    title: "Acompanhamento Nutricional",
    text: "Dietas personalizadas, práticas e adaptadas ao seu paladar e orçamento — sem sacrifício desnecessário.",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação e Correção Postural",
    text: "Análises e exercícios de correção para prevenir lesões e melhorar sua performance.",
  },
  {
    icon: CalendarDays,
    title: "Suporte Diário",
    text: "Atendimento ágil pelo WhatsApp, com orientações e revisões constantes — de segunda a segunda.",
  },
  {
    icon: MessageCircle,
    title: "Área de Membros & Comunidade",
    text: "Acesso à comunidade, materiais exclusivos e eventos que mantêm sua motivação lá em cima.",
  },
  {
    icon: Activity,
    title: "Boas Práticas de Mobilidade",
    text: "Treinos de mobilidade e alongamentos personalizados para aumentar amplitude e desempenho.",
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
                  backgroundColor: isGreen ? "#00FF4E" : "#0b0b0b",
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
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00FF4E] text-black font-bold px-10 py-4 rounded-xl text-lg shadow-[0_0_25px_#00FF4E] hover:scale-105 transition-transform"
          >
            Fazer parte do LF Team
          </a>
          <p className="text-gray-700 mt-4 text-sm">
            Planos a partir de <span className="font-bold text-[#00FF4E]">R$199/mês</span>
          </p>
        </div>
      </div>
    </section>
  );
}
