import React from 'react';
import {Container} from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';


const App=()=> {
  return (
    <Router>

    <Header></Header>
    <main className='py-3'>
      <Container>
        
        <Route path='/order/:id' component={OrderScreen} exact ></Route>
        <Route path='/shipping' component={ShippingScreen} exact ></Route>
        <Route path='/placeorder' component={PlaceOrderScreen} exact ></Route>
        <Route path='/payment' component={PaymentScreen} exact ></Route>
        <Route path='/login' component={LoginScreen}></Route>
        <Route path='/profile' component={ProfileScreen}></Route>
        <Route path='/register' component={RegisterScreen}></Route>
        <Route path='/product/:id' component={ProductScreen}></Route>
        <Route path='/cart/:id?' component={CartScreen}></Route>
        <Route path='/admin/userlist' component={UserListScreen}></Route>
        <Route path='/admin/user/:id/edit' component={UserEditScreen}></Route>
        <Route path='/admin/productlist' component={ProductListScreen} exact></Route>
        <Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact></Route>
        <Route path='/admin/product/:id/edit' component={ProductEditScreen}></Route>
        <Route path='/admin/orderlist' component={OrderListScreen}></Route>
        <Route path='/search/:keyword' component={HomeScreen} exact></Route>
        <Route path='/page/:pageNumber' component={HomeScreen} ></Route>
        <Route path='/search/:keyword/page/:pageNumber' component={HomeScreen} ></Route>
        <Route path='/' component={HomeScreen} exact ></Route>
        
        
      </Container>
    </main>
    <Footer></Footer>
      
    </Router>
  );
}

export default App;
