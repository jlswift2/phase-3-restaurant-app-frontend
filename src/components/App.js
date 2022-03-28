import Menu from "./LittleOsaka/Menu";
import Home from "./IntroPage/Home";
import { Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className="text-white">
      <Route exact path="/">
      <Home />
      </Route>
   


        <Route exact path="/Menu">
          <Menu />
        </Route>

     
    </div>
  );
}

export default App;
