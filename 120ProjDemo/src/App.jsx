import './App.css'
import { InfoCard } from "@/components/dashboard/InfoCard";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/dark-mode-toggle";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="relative min-h-screen bg-background text-foreground p-6">
        {/* Top right light/dark mode switcher*/}
        <div className="fixed top-4 right-4 z-50">
          <ModeToggle />
        </div>

        <main>
          <InfoCard />
        </main>
      </div>
    </ThemeProvider>
  )
}
