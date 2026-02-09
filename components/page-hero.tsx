import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHero({
  label,
  title,
  description,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="bg-secondary pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <Breadcrumb className="mb-6 flex justify-center">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={crumb.href}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {index === breadcrumbs.length - 1 ? (
                        <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link href={crumb.href}>{crumb.label}</Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          )}

          {label && (
            <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">
              {label}
            </p>
          )}

          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
            {title}
          </h1>

          {description && (
            <p className="mt-6 text-lg text-muted-foreground text-pretty leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
