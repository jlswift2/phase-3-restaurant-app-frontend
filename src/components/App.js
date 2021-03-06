import Menu from "./Menu1/Menu";
import Menu3 from "./Menu3/Menu3"
import Home from "./IntroPage/Home";
import FoodForm from "./Menu1/FoodForm"

import { Route, Switch } from "react-router-dom";
import PrintComponent from "./Menu1/PrintComponent";



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
          <Route exact path="/PrintMenu">
            <PrintComponent />
          </Route>
          <Route exact path="/Menu3">
            <Menu3 />
          </Route>
      </Switch> 
     </div>
  );
}

export default App;
