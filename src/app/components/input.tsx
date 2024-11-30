interface InputProps {
  label?: string;
  helperText?: string;
  placeholder?: string;
  className?: string;
  errorMessage?: string;
}

export default function Input({
  label,
  helperText,
  placeholder,
  className,
  errorMessage,
  ...props
}: InputProps) {
  const borderCollor = errorMessage ? "border-red-500" : "border-[var(--blue)]";
  return (
    <div className={className}>
      {label && <p className="mb-2 text-[var(--white)]">{label}</p>}

      <input
        type="text"
        placeholder={placeholder}
        className={`mt-2 w-full rounded-[6px] border-2 ${borderCollor} bg-zinc-900 p-1`}
        {...props}
      ></input>

      {helperText && (
        <p className="text-[var(--gray)] mt-2 text-sm">{helperText}</p>
      )}

      {errorMessage && (
        <p className="text-red-500 mt-2 text-sm">{errorMessage}</p>
      )}
    </div>
  );
}
