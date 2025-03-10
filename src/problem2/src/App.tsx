import ChangeCurrencyForm from "@/components/forms/ChangeCurrencyForm";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChangeCurrencyForm />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
