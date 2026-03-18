"use client"

import { Toaster } from "sonner"
import { LanguageProvider } from "@/components/language-context"

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <Toaster richColors position="top-center" />
    </LanguageProvider>
  )
}
