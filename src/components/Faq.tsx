"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import CtaButton from "./CtaButton";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

 const faqs = [
  {
    question: "Como funciona o acompanhamento online?",
    answer:
      "Após nossa conversa inicial, você receberá um plano de treino feito especialmente para o seu objetivo e rotina. O acompanhamento é feito diretamente comigo, por WhatsApp, com ajustes e orientações sempre que precisar.",
  },
  {
    question: "Preciso ter experiência na academia para começar?",
    answer:
      "Não precisa! Eu adapto todo o treino conforme seu nível — seja iniciante, intermediário ou avançado. O importante é começar no seu ritmo, com segurança e constância.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "O suporte é direto comigo, pelo WhatsApp. Você pode tirar dúvidas, pedir ajustes e receber orientações de forma rápida e personalizada.",
  },
  {
    question: "Posso treinar em casa?",
    answer:
      "Sim! Se você não tem acesso à academia, monto treinos que se encaixam na sua realidade — usando o que tiver à disposição, até o peso do corpo.",
  },
  {
    question: "Você faz plano alimentar também?",
    answer:
      "Posso te orientar com dicas e sugestões simples para melhorar sua alimentação de acordo com seu dia a dia, sempre dentro do que estou autorizado como estudante de Educação Física.",
  },
  {
    question: "Como posso pagar o acompanhamento?",
    answer:
      "Atendo via Pix, transferência ou cartão de crédito. Há opções de planos mensais e pacotes com desconto para quem quer seguir firme por mais tempo.",
  },
];


  return (
    <section id="faq" className="bg-black text-white py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Perguntas <span className="text-[#1b87ec]">Frequentes</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl overflow-hidden transition-shadow duration-300 shadow-lg"
              >
                {/* Pergunta: sempre verde com texto preto */}
                <button
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none transition-colors duration-200 bg-[#1b87ec] text-black`}
                >
                  <span className="text-lg md:text-xl font-semibold">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-black" : "text-black"
                    }`}
                  />
                </button>

                {/* Resposta: aparece com fundo preto e texto branco */}
                <div
                  className={`transition-all duration-400 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  aria-hidden={!isOpen}
                >
                  <div
                    className={`px-6 py-5 ${
                      isOpen ? "bg-black text-white" : "bg-black text-white"
                    }`}
                  >
                    <p className="text-base leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
