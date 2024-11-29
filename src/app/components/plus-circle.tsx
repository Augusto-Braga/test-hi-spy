interface PlusCircleProps {
  size?: number;
}

export default function PlusCircle({ size = 6 }: PlusCircleProps) {
  return (
    <img src="/plus-circle.svg" alt="plus" className={`w-${size} h-${size}`} />
  );
}
