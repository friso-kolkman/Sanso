import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { HelmetProvider } from "react-helmet-async";
import SkipLink from "@/components/SkipLink";
import Index from "./pages/Index";
import Science from "./pages/Science";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import HowItWorks from "./pages/HowItWorks";
import Privacy from "./pages/Privacy";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <SkipLink />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/science" element={<Science />} />
              {/* Temporarily redirect Pricing to Contact for lead-gen phase */}
              <Route path="/pricing" element={<Navigate to="/contact" replace />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              {/* Temporarily redirect Reservation to Contact for lead-gen phase */}
              <Route path="/reservation" element={<Navigate to="/contact" replace />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
