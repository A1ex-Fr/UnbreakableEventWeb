import { cn } from "@/components/ui/cn";

export default function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-6 scroll-mt-28", className)}>
      {children}
      
    </section>
  );
}
