import "./App.css";
import Header from "./navbar/navbar";
import Users from "./users/users";
import UsersFunctional from "./users/usersFunctional";
import Login from './login/login';
function App() {
  return (
    <>
      {/* <div className="App">
        <h1 style={{backgroundColor:"red",textAlign:"center"}}>hello from app component</h1>
      </div> */}

     <Header x="3"/>

     {/* <Users/> */}

     <UsersFunctional/>

     <div className="container my-5">

     <Contact/>
     <Home />

     </div>

    </>
  );
}

export default App;
