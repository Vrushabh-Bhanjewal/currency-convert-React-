import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Currency from "./Currency/Currency"

function App() {
  const queryClient= new QueryClient()
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Currency/>
    </QueryClientProvider>
    </>
  )
}

export default App
