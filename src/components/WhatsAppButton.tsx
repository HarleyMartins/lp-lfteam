import Image from "next/image";
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5588993815330"
      target="_blank"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Fale comigo no WhatsApp"
    >
      <Image alt="whatsapp" src={'/whatsapp.png'} width={70} height={70}/>
    </a>
  );
}
