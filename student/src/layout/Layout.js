import React, { Fragment } from 'react'
import Header from './Header';
import Footer from './Footer';
import '../style/layout.css'

function Layout  (props)  {
    
  return (
    <Fragment>
      <Header/>
    <div className='main-layout'>{props.children} </div>
    <Footer/>
    </Fragment>
  );
}

export default Layout
