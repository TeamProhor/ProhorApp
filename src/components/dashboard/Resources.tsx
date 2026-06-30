"use client";

import {
  Database,
  FastForward,
  Queue,
  ShieldCheck,
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import type { ResourcesProps } from "@/types";

export function Resources(_props: Readonly<ResourcesProps>) {
  const resources = [
    {
      id: "advisor",
      title: "Advisor tool",
      description:
        "Increase intelligence while minimizing cost and token usage. A cheaper model consults a stronger advisor mid-task.",
      icon: ShieldCheck,
      badge: "Beta",
    },
    {
      id: "fast_mode",
      title: "Fast mode",
      description:
        "Up to 2.5x faster output on supported models, at premium pricing. Same model, same intelligence.",
      icon: FastForward,
    },
    {
      id: "batch",
      title: "Batch API",
      description:
        "Move async workloads to the Batch API and save 50% on standard API prices.",
      icon: Queue,
    },
    {
      id: "caching",
      title: "Prompt caching",
      description:
        "Reuse prompt prefixes across API calls. Most orgs see input costs drop 50–90%.",
      icon: Database,
    },
  ];

  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-serif text-xl font-normal text-foreground px-2">
        Resources
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {resources.map((res) => {
          const Icon = res.icon;
          return (
            <a
              key={res.id}
              href="/docs"
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <Card className="rounded-xl border border-border/60 bg-card hover:bg-muted/40 transition-all duration-300 h-full p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon className="size-5 text-primary" />
                  <h3 className="font-sans text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {res.title}
                  </h3>
                  {res.badge && (
                    <Badge className="bg-primary text-primary-foreground font-normal text-[10px] rounded-full px-1.5 py-0.2">
                      {res.badge}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                  {res.description}
                </p>
              </Card>
            </a>
          );
        })}
      </div>
    </section>
  );
}
