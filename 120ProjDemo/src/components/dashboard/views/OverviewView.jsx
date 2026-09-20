import { InfoCard } from "@/components/dashboard/InfoCard";


export function OverviewView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <InfoCard />
      <InfoCard />
      <InfoCard />
    </div>
  )
}
