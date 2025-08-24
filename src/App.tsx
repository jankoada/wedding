import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Menu from "@/pages/Menu.tsx";
import CoffeeMenu from "@/pages/CoffeeMenu.tsx";
import SignatureDrinks from "@/pages/SignatureDrinks.tsx";
import BeverageMenu from "@/pages/BeverageMenu.tsx";
import WineList from "@/pages/WineList.tsx";
import Memories from "@/pages/Memories.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vzpominky" element={<Memories />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/coffee-menu" element={<CoffeeMenu />} />
          <Route path="/signature-drinks" element={<SignatureDrinks />} />
          <Route path="/beverage-menu" element={<BeverageMenu />} />
          <Route path="/wine-menu" element={<WineList />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
