interface InputProps {
  label?: string;
  helperText?: string;
  placeholder?: string;
  className?: string;
}

export default function Input({
  label,
  helperText,
  placeholder,
  className,
  ...props
}: InputProps) {
  return (
    <div className={className}>
      {label && <p className="mb-2 text-[var(--white)]">{label}</p>}

      <input
        type="text"
        placeholder={placeholder}
        className={`mt-2 w-full rounded-[6px] border-2 border-[var(--blue)] bg-zinc-900 p-1`}
        {...props}
      ></input>

      {helperText && (
        <p className="text-[var(--gray)] mt-2 text-sm">{helperText}</p>
      )}
    </div>
  );
}
