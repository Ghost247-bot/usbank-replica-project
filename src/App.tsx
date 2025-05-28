
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";

// Import all pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Personal Banking Routes
import PersonalBankingRoutes from "./routes/PersonalBankingRoutes";

// Business Banking Routes  
import BusinessBankingRoutes from "./routes/BusinessBankingRoutes";

// Wealth Management Routes
import WealthManagementRoutes from "./routes/WealthManagementRoutes";

// Action Routes
import ActionRoutes from "./routes/ActionRoutes";

// Services Routes
import ServicesRoutes from "./routes/ServicesRoutes";

// Auth and Dashboard Routes
import AuthDashboardRoutes from "./routes/AuthDashboardRoutes";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            
            {/* Personal Banking Routes */}
            <PersonalBankingRoutes />
            
            {/* Business Banking Routes */}
            <BusinessBankingRoutes />
            
            {/* Wealth Management Routes */}
            <WealthManagementRoutes />
            
            {/* Action Routes */}
            <ActionRoutes />
            
            {/* Services Routes */}
            <ServicesRoutes />
            
            {/* Auth and Dashboard Routes */}
            <AuthDashboardRoutes />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
