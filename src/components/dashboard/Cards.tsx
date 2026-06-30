import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CardsProps } from "@/types";

export function Cards(_props: Readonly<CardsProps>) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="rounded-xl border border-border bg-card text-card-foreground">
        <CardHeader>
          <CardTitle className="font-serif text-xl font-normal text-foreground">
            Prohor Sonnet
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground font-sans">
            Active Inference
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 font-sans">
          <div className="text-3xl font-normal text-foreground">
            1.2M <span className="text-sm text-muted-foreground">tokens</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Highly balanced model for advanced reasoning and complex tasks.
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-xl border border-border bg-card text-card-foreground">
        <CardHeader>
          <CardTitle className="font-serif text-xl font-normal text-foreground">
            Prohor Haiku
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground font-sans">
            Fast & Cost-Efficient
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 font-sans">
          <div className="text-3xl font-normal text-foreground">
            3.8M <span className="text-sm text-muted-foreground">tokens</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Optimized for speed and high throughput workloads at lowest cost.
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-xl border border-border bg-[#181715] text-[#faf9f5]">
        <CardHeader>
          <CardTitle className="font-serif text-xl font-normal text-[#faf9f5]">
            Monthly Spend
          </CardTitle>
          <CardDescription className="text-xs text-[#a09d96] font-sans">
            Billing Cycle Limit
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 font-sans">
          <div className="text-3xl font-normal text-[#faf9f5]">
            $42.50 <span className="text-sm text-[#a09d96]">/ $100.00</span>
          </div>
          <p className="text-xs text-[#a09d96]">
            42.5% of your customized spending limit for the current cycle is
            consumed.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
