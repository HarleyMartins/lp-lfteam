import { XCircle, CheckCircle } from "lucide-react";

export default function Choices() {
  const badPoints = [
  "Treinos genéricos encontrados na internet, que não levam em conta sua realidade;",
  "Falta de acompanhamento próximo e dúvidas que ficam sem resposta;",
  "Planilhas copiadas e coladas, sem adaptação ao seu corpo e rotina;",
  "Dietas mirabolantes e caras, difíceis de seguir no dia a dia;",
  "Falta de motivação e ninguém para acompanhar sua evolução de perto;",
  "Treinar sem saber se está realmente fazendo os exercícios da forma certa;",
  "Fazer de tudo e ainda assim não ver resultados consistentes.",
];


  const goodPoints = [
  "Acompanhamento direto comigo, um personal trainer em formação em Educação Física, sempre disponível para tirar dúvidas;",
  "Treino totalmente personalizado, feito com base nos seus objetivos e rotina;",
  "Ajustes frequentes para garantir evolução e evitar estagnação;",
  "Orientações simples e realistas sobre alimentação, sem cortar tudo o que você gosta;",
  "Suporte rápido pelo WhatsApp, com atenção individual;",
  "Acompanhamento de perto para garantir técnica correta e segurança nos treinos;",
  "Planejamento pensado para sua realidade, seja na academia ou em casa;",
  "Ajuda constante para manter o foco e a motivação ao longo do processo.",
];


  return (
    <section id="escolhas" className="py-24 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-tight">
          Grandes conquistas começam com as{" "}
          <span className="text-[#1b87ec]">melhores escolhas</span>
        </h2>

        {/* Cards lado a lado */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-10">
          {/* Card esquerdo - Ruim */}
          <div className="flex-1 bg-gray-100 rounded-2xl p-10 shadow-md relative">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2">
              <XCircle className="text-red-500 w-8 h-8" />
              Se você está cansado de:
            </h3>
            <ul className="space-y-4 text-lg leading-relaxed">
              {badPoints.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="text-red-500 w-6 h-6 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Seta decorativa */}
            <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 text-[#1b87ec] text-6xl font-bold">
              ➤
            </div>
          </div>

          {/* Card direito - Bom */}
          <div className="flex-1 bg-black text-white rounded-2xl p-10 shadow-[0_0_30px_#1b87ec30]">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2">
              <CheckCircle className="text-[#1b87ec] w-8 h-8" />
              Saiba que no LF Team você recebe:
            </h3>
            <ul className="space-y-4 text-lg leading-relaxed">
              {goodPoints.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#1b87ec] w-6 h-6 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5588993815330"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0084ff] text-white font-bold px-10 py-4 rounded-xl text-lg shadow-[0_0_25px_#1b87ec] hover:scale-105 transition-transform"
          >
            Quero fazer parte do LF Team
          </a>
          {/* <p className="text-gray-700 mt-4 text-sm">
            Planos a partir de <span className="font-bold text-[#1b87ec]">R$199/mês</span>
          </p> */}
        </div>
      </div>
    </section>
  );
}
