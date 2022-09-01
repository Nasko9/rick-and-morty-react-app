import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// Components
import Header from "./components/Header";
import Filter from "./components/Filter";
import Characters from "./components/Characters";

// Context
import { FilterContextProvider } from "./context/filterContext";

// React Qery client
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <FilterContextProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <div className="bg-white">
            <div className="container mx-auto py-5">
              <Header />
            </div>
          </div>
          <div className=" bg-gray-100">
            <div className="container mx-auto min-h-[calc(100vh_-_100px)] py-10">
              <Filter />
              <Characters />
            </div>
          </div>
        </QueryClientProvider>
      </FilterContextProvider>
    </div>
  );
}

export default App;
