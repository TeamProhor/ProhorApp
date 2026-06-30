import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ActivityTableProps } from "@/types";

export function ActivityTable(_props: Readonly<ActivityTableProps>) {
  return (
    <Card className="rounded-xl border border-border bg-card text-card-foreground">
      <CardHeader>
        <CardTitle className="font-serif text-2xl font-normal text-foreground">
          Recent API Activity
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground font-sans">
          Real-time request logs for this workspace
        </CardDescription>
      </CardHeader>
      <CardContent className="font-sans px-2 md:px-6">
        <div className="overflow-x-auto w-full">
          <table className="w-full min-w-[500px] text-left border-collapse">
            <thead>
              <tr className="border-b border-border text-xs text-muted-foreground">
                <th className="py-3 px-2 md:px-4 font-medium">Model</th>
                <th className="py-3 px-2 md:px-4 font-medium">Method</th>
                <th className="py-3 px-2 md:px-4 font-medium">Status</th>
                <th className="py-3 px-2 md:px-4 font-medium">Duration</th>
              </tr>
            </thead>
            <tbody className="text-sm text-foreground">
              <tr className="border-b border-border/50 hover:bg-muted/30">
                <td className="py-3 px-2 md:px-4">prohor-sonnet</td>
                <td className="py-3 px-2 md:px-4">POST /v1/messages</td>
                <td className="py-3 px-2 md:px-4 text-emerald-600 font-medium">
                  200 OK
                </td>
                <td className="py-3 px-2 md:px-4 text-muted-foreground">
                  240ms
                </td>
              </tr>
              <tr className="border-b border-border/50 hover:bg-muted/30">
                <td className="py-3 px-2 md:px-4">prohor-haiku</td>
                <td className="py-3 px-2 md:px-4">POST /v1/messages</td>
                <td className="py-3 px-2 md:px-4 text-emerald-600 font-medium">
                  200 OK
                </td>
                <td className="py-3 px-2 md:px-4 text-muted-foreground">
                  98ms
                </td>
              </tr>
              <tr className="border-b border-border/50 hover:bg-muted/30">
                <td className="py-3 px-2 md:px-4">prohor-sonnet</td>
                <td className="py-3 px-2 md:px-4">POST /v1/messages</td>
                <td className="py-3 px-2 md:px-4 text-rose-600 font-medium">
                  400 Bad Request
                </td>
                <td className="py-3 px-2 md:px-4 text-muted-foreground">
                  15ms
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
