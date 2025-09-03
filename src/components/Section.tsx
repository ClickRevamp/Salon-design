import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  spacing?: "sm" | "md" | "lg" | "xl" | "2xl" | "none";
  as?: keyof JSX.IntrinsicElements;
}

const spacingSizes = {
  none: "",
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16", 
  lg: "py-16 md:py-20",
  xl: "py-20 md:py-24",
  "2xl": "py-24 md:py-32",
};

export default function Section({ 
  children, 
  className,
  spacing = "lg",
  as: Component = "section"
}: SectionProps) {
  return (
    <Component className={cn(
      "relative",
      spacingSizes[spacing],
      className
    )}>
      {children}
    </Component>
  );
}
