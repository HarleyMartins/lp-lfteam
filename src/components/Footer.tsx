import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-[#1b87ec]/20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Coluna 1 - Logo */}
          <div>
            <h3 className="text-3xl font-extrabold text-[#1b87ec] mb-4">
              LF Team
            </h3>
            <p className="text-gray-400">
              Treinamentos personalizados e acompanhamento profissional para quem quer resultados reais.
            </p>
          </div>

          {/* Coluna 2 - Links rápidos */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#1b87ec]">Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-[#1b87ec] transition-colors">Sobre</a></li>
              <li><a href="#resultados" className="hover:text-[#1b87ec] transition-colors">Resultados</a></li>
              <li><a href="#escolhas" className="hover:text-[#1b87ec] transition-colors">Consultoria</a></li>
              <li><a href="#faq" className="hover:text-[#1b87ec] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#1b87ec]">Contato</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="text-[#1b87ec] w-5 h-5" />
                <span>(88) 99381-5330</span>
              </li>
              {/* <li className="flex items-center gap-2">
                <Mail className="text-[#1b87ec] w-5 h-5" />
                <span>contato@lfteam.com</span>
              </li> */}
              <li className="flex items-center gap-3 mt-4">
                <a href="https://instagram.com/luis_fernando8012" target="_blank"  className="hover:text-[#1b87ec] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                {/* <a href="#" className="hover:text-[#1b87ec] transition-colors">
                  <Facebook className="w-6 h-6" />
                </a> */}
              </li>
            </ul>
          </div>
        </div>

        {/* Direitos autorais */}
        <div className="text-center border-t border-[#1b87ec]/20 pt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} <a className="hover:text-blue-[#1b87ec]" target="_blank" href="https://instagram.com/harley.tsx">Harley Martins</a> — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
