import { ActivityTable } from "@/components/dashboard/ActivityTable";
import { Cards } from "@/components/dashboard/Cards";
import { Header } from "@/components/dashboard/Header";
import { Resources } from "@/components/dashboard/Resources";

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-6 px-4 md:py-10 md:px-6 max-w-6xl">
      <div className="flex flex-col gap-6 md:gap-8">
        <Header />
        <Cards />
        <Resources />
        <ActivityTable />
      </div>
    </div>
  );
}
