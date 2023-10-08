import {createBrowserRouter, RouterProvider, Route, Link} from 'react-router-dom'
import SignupPage from './pages/SignupPage';
import Loginpage from './pages/LoginPage';
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { setUser } from './features/auth/authSlice';
import Homepage from './pages/Hompage';
import Deployment from './pages/Deployment';

const router= createBrowserRouter([
  {
    path:"/",
    element:<Homepage></Homepage>

  },
  {
    path:"/deploy",
    element:<Deployment></Deployment>

  },
  {
    path:"/login",
    element:<Loginpage></Loginpage>
  },
  {
    path:"/signup",
    element:<SignupPage></SignupPage>
  }
])
function App() {
  const dispatch=useDispatch()

  //tokenset login and register
  const user= JSON.parse(localStorage.getItem("fontendvercel"))
  useEffect(()=>{
    dispatch(setUser(user))

  },[user])
  console.log('app.js-user',user)
  
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
