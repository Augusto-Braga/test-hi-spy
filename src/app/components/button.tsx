interface ButtonProps {
  children: React.ReactNode;
  color?: "primary" | "secondary";
  onClick?: () => void;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  color = "primary",
  onClick,
  icon,
  type,
  ...props
}: ButtonProps) {
  const bgColor =
    color === "primary" ? "bg-[var(--white)]" : "bg-[var(--dark-blue)]";
  const textColor =
    color === "primary" ? "text-[var(--black)]" : "text-[var(--white)]";

  return (
    <button
      onClick={onClick}
      className={`min-w-[133px] min-h-[40px] px-4 py-2 flex items-center justify-center rounded-[6px] ${bgColor} ${textColor} border border-[var(--dark-gray)]`}
      type={type}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
