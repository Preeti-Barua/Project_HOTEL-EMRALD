
import './App.css';
import Home from'./components/Home'
import Adminlogin from './components/Adminlogin';
import Receptionlogin from './components/Receptionlogin';
import Navigation from './components/Navigation';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ImportantContacts from './components/ImportantContacts';
import PostAdminLoginPage from './components/PostAdminLoginPage';
import PostReceptionloginPage from './components/PostReceptionloginPage';
import ViewEmployee from './components/ViewEmployee';
import AddEmployee from './components/AddEmployee';
import AddRooms from './components/AddRooms';
import ViewCustomer from './components/ViewCustomer';
import AddCustomer from './components/AddCustomer';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import RoomInformation from './components/RoomInformation';
import UpdateRoombyAdmin from './components/UpdateRoombyadmin';
import UpdateRoombyReceptionist from './components/UpdateRoombyReceptionist';
import ShowRooms from './components/ShowRooms';






function App() {
  return (
    <BrowserRouter>
    
   <div  >
    
        
        <h3 className="m-3 d-flex justify-content-center" style={{"font-family":"Ravie","color":"white", "fontSize": "50px",}} >
        Hotel Emrald<br/> Welcom You</h3> 
        
        <Navigation/>

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
      <Route path='/view-Customers' component={ViewCustomer}/>
      <Route path='/add-Customers' component={AddCustomer}/>
      <Route path='/update-room/:roomno' component={UpdateRoombyAdmin}/>
      <Route path='/update-roominfo/:roomno' component={UpdateRoombyReceptionist}/>
      <Route path='/show-rooms' component={ShowRooms}/>
    
    
    
      </Switch>
           
   
      </div> 
 
    </BrowserRouter>
   
  );
}

export default App;
