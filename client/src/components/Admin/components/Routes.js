import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard';
import AdminProduct from './AdminProduct/AdminProduct';
import AdminCreate from './AdminProduct/AdminCreate'
import AdminUpdate from './AdminProduct/AdminUpdate'
import AdminUser from './AdminUser/AdminUser';
import ReviewProduct from './AdminProduct/ReviewProduct/ReviewProduct';
import UserCreate from './AdminUser/CreateUser';
import UserUpdate from './AdminUser/UpdateUser';
import ProductReviews from './AdminReview/Review';
import HomePage from '../pages/../../../pages/HomePage';
// import UpdateType from './AdminProduct/DataFilterProduct/updateTypeProduct';
import ContactList from './AdminContact/Contact';
import DataFilterProduct from './AdminProduct/DataFilterProduct/DataFilterProduct';
import AdminOrderAll from './AdminOrder/AdminOrder';
import OrderDetail from './AdminOrder/AdminOrderUI/OrderDetails';
import EditListTypeProductForm from './AdminProduct/DataFilterProduct/UpdateTypeProduct';

function Routes(props) {
    return (
        <Switch>
            <Route path='/admin/' exact component={Dashboard}/>
            <Route path='/admin/customer' component={AdminUser}/>
            <Route path='/admin/user/create' component={UserCreate}/>
            <Route path='/admin/user/detail/:id' component={UserUpdate}/>
            <Route path='/admin/product/create' component={AdminCreate}/>
            <Route path='/admin/product/update/info' component={DataFilterProduct}/>
            <Route path='/admin/product/update/:id' component={AdminUpdate}/>
            <Route path='/admin/product/reviewProduct/:id' component={ReviewProduct}/>
            <Route path='/admin/product' component={AdminProduct}/>
            <Route path="/admin/order" exact component={AdminOrderAll} />
            <Route path="/admin/order/detail/:id" component={OrderDetail} />
            <Route path='/admin/review' component={ProductReviews}/>
            <Route path='/admin/contact' component={ContactList}/>
            <Route path='/admin/list/update/:id' component={EditListTypeProductForm}/>
            <Route path='/' component={HomePage}/>
        </Switch>
    );
}

export default Routes;