import { Routes, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm/SignUpForm.js";
import LogInForm from "./components/LogInForm/LogInForm.js"
import SignOutForm from "./components/SignOutForm/SignOutForm.js"
import Home from './screens/Home/Home.js'
import { getUser } from "./utilities/users-service.js"
import { useState } from "react"
import SearchByBreed from "./screens/SearchByBreed/SearchByBreed.js";
import NavBar from "./components/NavBar/NavBar.js";
import Resources from "./screens/Resources/Resources.js";
import Profile from "./screens/Profile/Profile.js";

function App() {
  const [user, setUser] = useState(getUser())
  return (
    <div className="App">
        <NavBar setUser={setUser}/>
      <Routes>
        <Route 
                path="/" 
                element={<Home setUser={setUser}/>}/>
        <Route
                path="signup"
                element={<SignUpForm setUser={setUser}/>}/>
        <Route
                path="login"
                element={<LogInForm setUser={setUser}/>}/>
        <Route
                path="searchbybreed"
                element={<SearchByBreed/>}/>
        <Route
                path="resources"
                element={<Resources/>}/>
        <Route
                path="profile"
                element={<Profile user={user}/>}/>
        <Route
                path="signout"
                element={<SignOutForm setUser={setUser}/>}/>
      </Routes>
    </div>
  );
}

export default App;
