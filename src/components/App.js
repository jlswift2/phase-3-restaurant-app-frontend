import Menu from "./LittleOsaka/Menu";
import Home from "./IntroPage/Home";
import { Route, Switch } from "react-router-dom";



function App() {
  return (
    <div>

      <Route exact path="/">
      <Home />
      </Route>
      
      <Switch>
      <Route exact path="/Menu">
          <Menu />
        </Route>
      </Switch>
      

     
    </div>
  );
}

export default App;
