export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white text-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
        {/* Foto do personal */}
        <div className="md:w-1/2">
          <img
            src="/imglf.jpg"
            alt="Luis Fernando - LF Team"
            className="aspect-[7/8] rounded-2xl shadow-[0_0_25px_#00FF4E20] object-cover"
          />
        </div>

        {/* Texto */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            SOBRE <span className="text-[#00FF4E]">LUIS FERNANDO</span>
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Sou personal trainer com anos de experiência ajudando pessoas a alcançarem 
            resultados reais. Acredito que o treino vai muito além da estética — é sobre 
            transformar corpo, mente e hábitos.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Com o programa <span className="text-[#00FF4E] font-semibold">LF Team</span>, 
            você terá um acompanhamento completo, com treinos personalizados, orientação 
            nutricional e suporte contínuo para atingir seu melhor desempenho.
          </p>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            className="inline-block mt-4 bg-[#00FF4E] text-black font-bold px-8 py-3 rounded-xl text-lg transition-transform hover:scale-105 hover:shadow-[0_0_20px_#00FF4E]"
          >
            Fale comigo
          </a>
        </div>
      </div>
    </section>
  );
}
