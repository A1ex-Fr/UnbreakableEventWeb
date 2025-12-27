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
    <section id={id} className={cn("mx-auto w-full max-w-6xl scroll-mt-28", className)}>
      {children}

    </section>
  );
}
