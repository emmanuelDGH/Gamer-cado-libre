import './App.css';
//import {useEffect, useState} from 'react'
import {Route, Routes, /* useNavigate */} from 'react-router-dom'
import Navbar from './commons/Navbar';
import Footer from './commons/Footer';
import SignUp from './components/Signup';
import { Products } from './components/Products';
import Product from './components/Product';
//import signIn from './components/signIn'

function App() {

  //const navigate = useNavigate()
  return (
      <Routes>
        <Route path='/' element={
          <div className="App">
            <Navbar/>
            <Footer/>
          </div>
        }/>
        <Route path='/user' element={''}/>
        <Route path='/cart' element={''}/>
        <Route path='/signup' element={<><SignUp/></>}/>
        {/* <Route path='/signin' element={<signIn/>}/> */}
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:genre' element={''}/>
        <Route path='/product/:name' element={<Product/>}/>
      </Routes>
  );
}

export default App;
