import CtaButton from "./CtaButton";

/* eslint-disable @next/next/no-img-element */
export default function Results() {
  return (
    <section
      id="resultados"
      className="relative py-24 text-white overflow-hidden"
    >
      {/* Fundo com imagem e gradiente */}
      <div
        className="absolute inset-0 bg-[url('/results-bg.jpg')] bg-cover bg-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/80 to-[#1b87ec10]" aria-hidden="true" />

      {/* Conteúdo principal */}
      <div className="relative container mx-auto px-6">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          RESULTADOS <span className="text-[#1b87ec]">LF TEAM</span>
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Transformações reais de alunos que decidiram mudar de vida com o acompanhamento do LF Team.
        </p>

        {/* Galeria centralizada */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-[0_0_20px_#1b87ec20] hover:shadow-[0_0_25px_#1b87ec50] transition-shadow duration-300"
            >
              <img
                src={`/results/result-${i}.jpg`}
                alt={`Resultado ${i}`}
                className="w-[320px] md:w-[400px] lg:w-[450px] object-contain rounded-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
