interface AppDescriptionProps {
  description: string;
}

export default function AppDescription({ description }: AppDescriptionProps) {
  return (
    <div>
      <p className="text-sm leading-relaxed text-white/60">{description}</p>
    </div>
  );
}
