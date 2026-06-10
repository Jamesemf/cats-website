export default function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-[290px] rounded-[2.6rem] bg-ink p-2.5 shadow-lift ${className}`}
    >
      <div className="relative aspect-[9/19] overflow-hidden rounded-[2.1rem] bg-cream">
        {children}
        {/* notch */}
        <div className="absolute left-1/2 top-2.5 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
      </div>
    </div>
  );
}
