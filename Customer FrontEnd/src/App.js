
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
import AddRooms from './components/AddRooms';
import ViewCustomer from './components/ViewCustomer';
import AddCustomer from './components/AddCustomer';
import Error from './components/Error';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import UpdateCustomer from './components/UpdateCustomer';
import UpdateRoombyReceptionist from './components/UpdateRoombyReceptionist';
import UpdateRoombyAdmin from './components/UpdateRoombyadmin';
import RoomInformation from './components/RoomInformation';
import ShowRooms from './components/ShowRooms';


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

    
    {/* <div className="container"> */}
    
      <Navbar></Navbar>

        <Switch>
      <Route path='/' component={Home}exact/>
      <Route path='/contacts' component={ImportantContacts}/>
      <Route path='/Adminlogin' component={Adminlogin}/>
      <Route path='/Admin' component={PostAdminLoginPage}/>
      <Route path='/view-Employee' component={ViewEmployee}/>
      <Route path='/add-Employee' component={AddEmployee}/>
      <Route path='/update-Employee/:id' component={UpdateEmployeeComponent}/>
      <Route path='/Room-Info' component={RoomInformation}/>
      <Route path='/add-Rooms' component={AddRooms}/>
      <Route path='/Receptionlogin' component={Receptionlogin}/>
      <Route path='/Reception' component={PostReceptionloginPage}/>
      <Route path='/update-room/:roomno' component={UpdateRoombyAdmin}/>
      <Route path='/update-roominfo/:roomno' component={UpdateRoombyReceptionist}/>
      <Route path='/show-rooms' component={ShowRooms}/>
      <Route path='/view-Customers' component={ViewCustomer}/>
      <Route path='/add-Customer/:roomno' component={AddCustomer}/>
      
      <Route path='/update-Customer/:cid' component={UpdateCustomer}/>
      <Route path='/404' component={Error}/>
      <Route path="*">
            <Redirect to="/404" />
      </Route>
    
      </Switch>
           
    {/* </div> */}

 
    </BrowserRouter>
   
  );
}

export default App;
