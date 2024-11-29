export default function Header() {
  return (
    <div className="w-full h-18 px-3 bg-[var(--dark-blue)] flex items-center justify-between">
      <div className="flex items-center">
        <img src="/logo-1.svg" alt="logo" />
        <p className="ml-4 text-[var(--white)]">Investigações</p>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-10 flex items-center justify-center bg-[var(--gray)] rounded-full">
          <p>E</p>
        </div>
        <p className="text-[var(--gray)] text-sm mx-2">Emerson</p>
      </div>
    </div>
  );
}
