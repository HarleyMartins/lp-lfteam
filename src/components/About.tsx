import CtaButton from "./CtaButton";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white text-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
        {/* Foto do personal */}
        <div className="md:w-1/2">
          <img
            src="/imglf.jpg"
            alt="Luis Fernando - LF Team"
            className="aspect-[7/8] rounded-2xl shadow-[0_0_25px_#1b87ec20] object-cover"
          />
        </div>

        {/* Texto */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            SOBRE <span className="text-[#1b87ec]">LUIS FERNANDO</span>
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Sou personal trainer com anos de experiência ajudando pessoas a alcançarem 
            resultados reais. Acredito que o treino vai muito além da estética — é sobre 
            transformar corpo, mente e hábitos.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Com o programa <span className="text-[#1b87ec] font-semibold">LF Team</span>, 
            você terá um acompanhamento completo, com treinos personalizados, orientação 
            nutricional e suporte contínuo para atingir seu melhor desempenho.
          </p>

          <CtaButton />
        </div>
      </div>
    </section>
  );
}
