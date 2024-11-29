export default function Footer() {
  return (
    <div className="w-full h-14 px-3 flex items-center justify-between border-t border-[var(--dark-gray)] text-[var(--gray)] text-sm">
      <div className="flex gap-4">
        <p>Sobre nós</p>
        <p>Termos de uso</p>
        <p>Política de privacidade</p>
        <p>O que há de novo</p>
      </div>
      <div className="flex">
        <img src="/subtract.svg" alt="subtract" className="mr-2" />
        <p>© 2024</p>
      </div>
    </div>
  );
}
