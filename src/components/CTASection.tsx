export default function FinalCTA() {
  return (
    <section
      className="relative py-32 bg-cover bg-center text-center"
      style={{ backgroundImage: "url('/cta-bg.jpg')" }}
    >
      {/* Gradiente branco sobre a imagem */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 text-white max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Pronto para começar sua{" "}
          <span className="text-[#00FF4E]">melhor versão</span>?
        </h2>

        <p className="text-lg md:text-xl text-white mb-10">
          Junte-se à <span className="font-semibold text-[#00FF4E]">LF Team</span> e conquiste resultados reais com quem entende de performance, saúde e estética.
        </p>

        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#00FF4E] text-white font-bold px-10 py-4 rounded-xl text-lg shadow-[0_0_25px_#00FF4E80] hover:scale-105 transition-transform"
        >
          Entrar para a LF Team
        </a>

        <p className="text-white mt-6 text-sm">
          Planos personalizados a partir de{" "}
          <span className="text-[#00FF4E] font-semibold">R$199/mês</span>
        </p>
      </div>
    </section>
  );
}
