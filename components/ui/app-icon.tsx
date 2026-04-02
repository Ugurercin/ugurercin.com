import { cn } from "@/lib/utils";

interface AppIconProps {
  icon: string;
  gradient: [string, string];
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "h-10 w-10 text-xl",
  md: "h-14 w-14 text-2xl",
  lg: "h-[72px] w-[72px] text-3xl",
};

export default function AppIcon({
  icon,
  gradient,
  size = "md",
}: AppIconProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-2xl bg-gradient-to-br",
        gradient[0],
        gradient[1],
        sizeMap[size],
      )}
      style={{ boxShadow: "0 0 40px rgba(245, 158, 11, 0.15)" }}
    >
      <span role="img">{icon}</span>
    </div>
  );
}
