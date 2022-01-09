import AllCountrys from './Component/AllCountrys';
import AddCountry from './Component/AddCountry';
import EditCountry from './Component/EditCountry';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={AllCountrys} />
        <Route exact path="/all" component={AllCountrys} />
        <Route exact path="/add" component={AddCountry} />
        <Route exact path="/edit/:id" component={EditCountry} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
