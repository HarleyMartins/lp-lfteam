"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como funciona a consultoria online da LF Team?",
      answer:
        "Após preencher seu cadastro e conversar com a equipe, você receberá um plano de treino e nutrição totalmente personalizado. Todo o acompanhamento é feito online, com suporte via WhatsApp e avaliações regulares.",
    },
    {
      question: "Preciso ter experiência na academia para começar?",
      answer:
        "Não! A consultoria é adaptada para todos os níveis — desde iniciantes até atletas avançados. Cada treino é montado de acordo com seu condicionamento e objetivos.",
    },
    {
      question: "Como é feito o suporte durante o acompanhamento?",
      answer:
        "O suporte é 100% individualizado e feito pelo WhatsApp, com respostas rápidas, ajustes de plano e acompanhamento constante da sua evolução.",
    },
    {
      question: "Posso fazer os treinos em casa?",
      answer:
        "Sim! Se você não tem acesso à academia, o plano é adaptado para sua realidade. Você pode treinar em casa com equipamentos simples ou até com o peso do corpo.",
    },
    {
      question: "Os planos incluem acompanhamento nutricional?",
      answer:
        "Sim, você receberá um plano alimentar adaptado à sua rotina, preferências e orçamento — sem precisar abrir mão dos alimentos que gosta.",
    },
    {
      question: "Quais são as formas de pagamento?",
      answer:
        "Aceitamos cartão de crédito, Pix e transferência bancária. Há opções de planos mensais e trimestrais com desconto.",
    },
  ];

  return (
    <section id="faq" className="bg-black text-white py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Perguntas <span className="text-[#00FF4E]">Frequentes</span>
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
                  className={`w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none transition-colors duration-200 bg-[#00FF4E] text-black`}
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
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00FF4E] text-black font-bold px-10 py-4 rounded-xl text-lg shadow-[0_0_25px_#00FF4E] hover:scale-105 transition-transform"
          >
            Falar com a equipe no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
