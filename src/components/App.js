import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Drink from "./Drink";
import Appitizer from "./Appitizer";
import Entree from "./Entree";
import Dessert from "./Dessert";
import Footer from "./Footer";

function App() {
  return (
    <div className="text-white">
      <Navbar  transparent/> 
      <Header />
      <About />
      <Drink />
      <Appitizer />
      <Entree />
      <Dessert />
      <Footer />

    </div>
  );
}

export default App;
