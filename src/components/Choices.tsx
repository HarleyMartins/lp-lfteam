import { XCircle, CheckCircle } from "lucide-react";

export default function Choices() {
  const badPoints = [
    "Consultorias de influenciadores sem formação acadêmica;",
    "Treinos padrões que o estagiário só copia e cola;",
    "Dietas genéricas, caras, que não levam em conta seus gostos e objetivos;",
    "Fazer tudo que o treinador te passa e mesmo assim não ver evolução;",
    "Suporte demorado, te deixando mais perdido do que antes de entrar;",
    "Não ser do time do maior fisiculturista natural do Brasil;",
    "Consultoria sem se preocupar com a sua saúde mental.",
  ];

  const goodPoints = [
    "Consultoria de um atleta profissional e multicampeão de fisiculturismo natural, formado em Educação Física: CREF 036779-G/SC;",
    "Treino individualizado e periodizado feito por uma equipe de profissionais pós-graduados;",
    "Dieta individualizada, adaptada à sua rotina, realidade financeira e sem ter que abandonar os seus alimentos favoritos;",
    "Suporte ágil e individualizado pelo WhatsApp, de segunda a segunda;",
    "Área de Membros e Comunidade ativa, com alunos com os mesmos objetivos que você;",
    "Trabalho de mobilidade e alongamentos específicos para você;",
    "Avaliação e correção postural;",
    "Fazer parte da consultoria com maior número de troféus de atletas naturais do Brasil;",
    "Acesso a eventos exclusivos presenciais;",
    "Única consultoria que oferece uma psicóloga especializada na área, fortalecendo seu mental.",
  ];

  return (
    <section id="escolhas" className="py-24 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-tight">
          Grandes conquistas começam com as{" "}
          <span className="text-[#00FF4E]">melhores escolhas</span>
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
            <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 text-[#00FF4E] text-6xl font-bold">
              ➤
            </div>
          </div>

          {/* Card direito - Bom */}
          <div className="flex-1 bg-black text-white rounded-2xl p-10 shadow-[0_0_30px_#00FF4E30]">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2">
              <CheckCircle className="text-[#00FF4E] w-8 h-8" />
              Saiba que no LF Team você recebe:
            </h3>
            <ul className="space-y-4 text-lg leading-relaxed">
              {goodPoints.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#00FF4E] w-6 h-6 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            className="inline-block bg-[#00FF4E] text-black font-bold px-12 py-5 rounded-xl text-xl transition-transform hover:scale-105 hover:shadow-[0_0_25px_#00FF4E]"
          >
            Quero fazer parte da LF Team
          </a>
          <p className="text-gray-700 mt-4 text-base">
            Planos personalizados a partir de{" "}
            <span className="font-bold text-[#00FF4E]">R$199/mês</span>
          </p>
        </div>
      </div>
    </section>
  );
}
