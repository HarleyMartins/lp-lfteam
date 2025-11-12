import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center h-screen]"
      style={{ backgroundImage: "url('/imghero.png')" }}
    >
      {/* Gradiente escuro sobre a imagem */}
      <div className="absolute inset-0 "></div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center text-white px-6 pt-[22rem] pb-6 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
          SUPERE SEUS LIMITES COM{" "}
          <span className="text-[#1b87ec]">LF TEAM</span>
        </h1>

        <p className="text-lg md:text-xl mb-8 text-white-300 font-bold">
          Resultados reais, treinos personalizados e o suporte que você precisa para evoluir.
        </p>

       <CtaButton />

        {/* <p className="text-white text-sm mt-6">
          Planos a partir de{" "}
          <span className="text-[#1b87ec] font-semibold">R$99,90/mês</span>
        </p> */}
      </div>
    </section>
  );
}
