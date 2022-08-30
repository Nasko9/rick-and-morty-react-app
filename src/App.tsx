// Components
import Header from "./components/Header";
import Filter from "./components/Filter";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <div className="bg-white">
        <div className="container mx-auto py-5">
          <Header />
        </div>
      </div>
      <div className=" bg-gray-100">
        <div className="container mx-auto py-10">
          <Filter />
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
