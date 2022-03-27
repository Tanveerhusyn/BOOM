import logo from "./logo.svg";
import "./App.css";
import SignUp from "./auth/signup/SignUp";
import SignIn from "./auth/signin/SignIn";
import NavBar from "./navigation/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SignIn />
    </div>
  );
}

export default App;
