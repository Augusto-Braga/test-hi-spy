export default function Footer() {
  return (
    <div className="w-full h-14 px-3 flex items-center justify-between border-t border-[var(--dark-gray)] text-[var(--gray)] text-sm flex-wrap">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
        <p>Sobre nós</p>
        <p>Termos de uso</p>
        <p>Política de privacidade</p>
        <p>O que há de novo</p>
      </div>
      <div className="flex justify-center w-full sm:w-auto mt-2 sm:mt-0">
        <img src="/subtract.svg" alt="subtract" className="mr-2" />
        <p>© 2024</p>
      </div>
    </div>
  );
}
