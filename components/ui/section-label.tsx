interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-xs font-medium uppercase tracking-widest text-white/40">
      {children}
    </p>
  );
}
