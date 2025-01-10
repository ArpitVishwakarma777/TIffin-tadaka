
import React from 'react'
import Header from './component/Header/Header'

import Footer from './component/Footer/Footer'
import SignPage from './component/SignUp/SignPage.jsx'
import { Outlet } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './RTK/store.js'
function Layout() {
  return (
    
    <Provider store = {store}> 
    <Header/>
    <Outlet/>
    <Footer/>
    </Provider>
  )
}

export default Layout;