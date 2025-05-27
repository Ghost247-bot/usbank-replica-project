
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Route Modules
import PersonalBankingRoutes from "./routes/PersonalBankingRoutes";
import BusinessBankingRoutes from "./routes/BusinessBankingRoutes";
import WealthManagementRoutes from "./routes/WealthManagementRoutes";
import ServicesRoutes from "./routes/ServicesRoutes";
import AuthDashboardRoutes from "./routes/AuthDashboardRoutes";
import ActionRoutes from "./routes/ActionRoutes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Index />} />
          
          {/* Action Pages */}
          {ActionRoutes()}

          {/* Personal Banking Routes */}
          {PersonalBankingRoutes()}

          {/* Business Banking Routes */}
          {BusinessBankingRoutes()}

          {/* Wealth Management Routes */}
          {WealthManagementRoutes()}

          {/* Services Routes */}
          {ServicesRoutes()}

          {/* Authentication and Dashboard Routes */}
          {AuthDashboardRoutes()}

          {/* Catch-all route for 404 - MUST BE LAST */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
