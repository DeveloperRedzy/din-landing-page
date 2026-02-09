import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col rounded-xl border border-border bg-background p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
        {description}
      </p>
      <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all">
        Learn more
        <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}
