const plans = [
  { title: "Plano Online", desc: "Treine de onde quiser com acompanhamento remoto." },
  { title: "Plano Presencial", desc: "Treinos personalizados e acompanhamento presencial." },
  { title: "Consultoria Premium", desc: "Acesso direto ao LF, suporte total e planos exclusivos." },
];

export default function Plans() {
  return (
    <section id="planos" className="py-20 bg-gray-100 text-center">
      <h3 className="text-3xl font-bold mb-10">Planos de Treino</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {plans.map((plan, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">{plan.title}</h4>
            <p className="text-gray-600 mb-4">{plan.desc}</p>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Saber mais
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
