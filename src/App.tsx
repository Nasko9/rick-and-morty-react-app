// Components
import Header from "./components/Header";
import Filter from "./components/Filter";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <div className="my-5 px-20">
        <Header />
      </div>
      <div className="bg-slate-100 px-20 py-10">
        <Filter />
        <Cards />
      </div>
    </div>
  );
}

export default App;
