import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductPage from './pages/ProductPage';
import DetailPage from './pages/DetailPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import AdminPage from './pages/AdminPage';
import ResetScroll from './components/ResetScroll/ResetScroll';
import MyOrderPage from './pages/MyOrderPage';
import OrderSuccessPage from './pages/OrderSuccessPage'
import UserPage from './pages/UserInforPage';
import Searchz from './pages/Search';
import ContactPage from './pages/ContacPage';
import AboutUsPage from './pages/AboutUs';
import PayPage from './pages/PayPage';


function App() {
  return (
    <div className="App">
  
      <Router>
        
        <ResetScroll></ResetScroll>

        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>

        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/register">
          <SignupPage></SignupPage>
        </Route>
        <Route path="/profile">
          <UserPage></UserPage>
        </Route> 
        <Route path="/product">
          <ProductPage></ProductPage>
        </Route>
        <Route path="/detail/:id">
          <DetailPage></DetailPage>
        </Route>

        <Route path='/cart'>
          <CartPage></CartPage>
        </Route>

        <Route path='/order'>
          <OrderPage></OrderPage>
        </Route>
        <Route path='/orderSuccess'>
          <OrderSuccessPage></OrderSuccessPage>
        </Route>

        <Route path='/MyOrder'>
          <MyOrderPage></MyOrderPage>
        </Route>

        <Route path='/search'>
          <Searchz></Searchz>
        </Route>

        <Route path='/contact'>
          <ContactPage></ContactPage>
        </Route>

        <Route path='/aboutus'>
          <AboutUsPage></AboutUsPage>
        </Route>

        <Route path='/pay'>
          <PayPage></PayPage>
        </Route>

        <Route path='/admin'>
          <AdminPage></AdminPage>
        </Route>


        {/* <Route path='*'>
          <HomePage></HomePage>
        </Route> */}

      </Router>
    </div>
  );
}

export default App;
