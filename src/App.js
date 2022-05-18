import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation} from 'react-router-dom';
import React, { useState } from 'react'
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
// import Footer from './components/shared/Footer/Footer';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Dashboard from './pages/Dashboard/Dashboard';
import Blogs from './pages/Blogs/Blogs';
import { useSelector } from 'react-redux';
import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh';
import SingleBlog from './pages/SingleBlog/SingleBlog';

// const isAuth = false;
// const user = {
//   activated:false,
// }


const App = () => {

  // call refresh endpoint
    // const { loading } = useLoadingWithRefresh();
    // console.log(loading);
    const loading = false;
    
    return loading? ('loading...' ) : (
        <>
            <Router>
              <Navigation />
              <Routes>
                <Route path='/' exact element={<Home/>}  />
                <Route path='/blogs' exact element={<Blogs/>} />
                <Route path='/singleblog/:_id' exact element={<SingleBlog />} />
                <Route path='/authenticate' 
                  element = {
                    <GuestRoute>
                      <Authenticate />
                    </GuestRoute>
                  }
                />
                <Route path='/activate'
                element = {
                  <SemiProtectedRoute>
                    <Activate />
                  </SemiProtectedRoute>
                }
                />
                <Route path='/dashboard'
                element = {
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
                />
              </Routes>
              {/* <Footer /> */}
            </Router>
        </>
    )
}

function GuestRoute({children, ...rest}){
  const { isAuth } = useSelector((state) => state.auth);
  let location = useLocation();
  if(isAuth){
    return <Navigate to="/dashboard" state={{from:location}} />
  }
  return children;
}

function SemiProtectedRoute({children, ...rest}){
  const { user, isAuth } = useSelector((state) => state.auth);
  let location = useLocation();
  if(!isAuth){
    return <Navigate to="/" state={{from:location}} />
  }else if(isAuth && !user.activated){
    return children;
  }
  return <Navigate to="/dashboard" state={{from:location}} />
}

function ProtectedRoute({children, ...rest}){
  const { user, isAuth } = useSelector((state) => state.auth);
  let location = useLocation();
  if(!isAuth){
    return <Navigate to="/" state={{from:location}} />
  }else if(isAuth && !user.activated){
    return <Navigate to="/activate" state={{from:location}} />;
  }
  return children;
}


export default App;

