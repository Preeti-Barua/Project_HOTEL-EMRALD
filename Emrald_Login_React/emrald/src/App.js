
import './App.css';
import Home from'./components/Home'
import Adminlogin from './components/Adminlogin';
import Receptionlogin from './components/Receptionlogin';
import Navigation from './components/Navigation';
import {BrowserRouter,Redirect,Route,Switch, useLocation} from 'react-router-dom';
import ImportantContacts from './components/ImportantContacts';
import PostAdminLoginPage from './components/PostAdminLoginPage';
import PostReceptionloginPage from './components/PostReceptionloginPage';
import ViewEmployee from './components/ViewEmployee';
import AddEmployee from './components/AddEmployee';
import RoomInfo from './components/RoomInformation';
import AddRooms from './components/AddRooms';
import ViewCustomer from './components/ViewCustomer';
import AddCustomer from './components/AddCustomer';
import Error from './components/Error';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';


function Navbar(){
  let location = useLocation();
 
   if(location.pathname === '/404'){
     return null;
   }
 
  return (
  <div>
        <h3 className="m-3 d-flex justify-content-center">
        Hotel Emrald</h3> 
        <h3 className="m-3 d-flex justify-content-center">
        Hotel Management Portal</h3>
        <Navigation/>
  </div>
     )
 }


function App() {
  return (
    <BrowserRouter>

    
    <div className="container">
    
      <Navbar></Navbar>

        <Switch>
      <Route path='/' component={Home}exact/>
      <Route path='/contacts' component={ImportantContacts}/>
      <Route path='/Adminlogin' component={Adminlogin}/>
      <Route path='/Admin' component={PostAdminLoginPage}/>
      <Route path='/view-Employee' component={ViewEmployee}/>
      <Route path='/add-Employee' component={AddEmployee}/>
      <Route path='/update-Employee/:id' component={UpdateEmployeeComponent}/>
      <Route path='/Room-Info' component={RoomInfo}/>
      <Route path='/add-Rooms' component={AddRooms}/>
      <Route path='/Receptionlogin' component={Receptionlogin}/>
      <Route path='/Reception' component={PostReceptionloginPage}/>
      <Route path='/view-Customers' component={ViewCustomer}/>
      <Route path='/add-Customers' component={AddCustomer}/>
      <Route path='/404' component={Error}/>
      <Route path="*">
            <Redirect to="/404" />
      </Route>
    
      </Switch>
           
    </div>

 
    </BrowserRouter>
   
  );
}

export default App;
