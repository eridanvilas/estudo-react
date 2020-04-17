import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/main';
import Product from './pages/product';
import NewProduct from './pages/newproduct';



const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/products/:id" component={Product} />
      <Route path="/newproduct/" component={NewProduct}/>
    </Switch> 
  </BrowserRouter>
)

export default Routes;