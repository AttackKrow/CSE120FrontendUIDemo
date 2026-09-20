import './App.css'
import { useState } from "react";
import { NavBar } from "@/components/dashboard/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import { OverviewView } from "@/components/dashboard/views/OverviewView";
import { AnalyticsView } from "@/components/dashboard/views/AnalyticsView";
import { ReportsView } from "@/components/dashboard/views/ReportsView";
import { BenchmarksView } from "@/components/dashboard/views/BenchmarksView";

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="relative min-h-screen bg-background text-foreground p-6">
        
        <NavBar activeTab={activeTab} onTabChange={setActiveTab} />

        <main className="flex-1 p-6">
          {activeTab === "overview" && <OverviewView />}
          {activeTab === "analytics" && <AnalyticsView />}
          {activeTab === "reports" && <ReportsView />}
          {activeTab === "benchmarks" && <BenchmarksView />}
        </main>
      </div>
    </ThemeProvider>
  )
}
