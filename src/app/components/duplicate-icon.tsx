interface CheckIconProps {
  size?: number;
}

export default function duplicateIcon({ size = 6 }: CheckIconProps) {
  return (
    <img
      src="/document-duplicate.svg"
      alt="duplicate"
      className={`w-${size} h-${size}`}
    />
  );
}
