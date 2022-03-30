import Menu from "./LittleOsaka/Menu";
import Home from "./IntroPage/Home";
import FoodForm from "./LittleOsaka/FoodForm"

import { Route, Switch } from "react-router-dom";



function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
        <Route exact path="/Menu">
          <Menu />
        </Route>
        <Route exact path="/FoodForm">
          <FoodForm />
        </Route>
        <Route exact path="/FoodForm/:id/Edit">
          <FoodForm />
        </Route>
      </Switch>
      

     
    </div>
  );
}

export default App;
