import "bootstrap/dist/css/bootstrap.min.css";
import AutoUser from "./Components/Auth/auth";
import Navbar from "./Components/Navbar/navbar";
import SignIn from "./Components/Navbar/signin";



function App() {
  const {getToken} = AutoUser()
  if(!getToken()){
    return <Navbar />
  } 
  
  return (
    <div>
      <SignIn />
     
    </div>
  );
}

export default App;
