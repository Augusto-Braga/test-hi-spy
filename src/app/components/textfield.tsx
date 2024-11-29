interface TextFieldProps {
  label?: string;
  helperText?: string;
  placeholder?: string;
  rows?: number;
  className?: string;
}

export default function TextField({
  label,
  helperText,
  placeholder,
  rows = 4,
  className,
}: TextFieldProps) {
  return (
    <div className={className}>
      {label && <p className="mb-2 text-[var(--white)]">{label}</p>}

      <textarea
        placeholder={placeholder}
        rows={rows}
        className={`w-full rounded-[6px] border-2 border-[var(--blue)] bg-zinc-900 p-2 resize-none`}
      ></textarea>

      {helperText && (
        <p className="text-[var(--gray)] mt-2 text-sm">{helperText}</p>
      )}
    </div>
  );
}
