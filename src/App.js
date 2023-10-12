import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Header from './components/Header'
import CatagoriesSec from './components/CatagoriesSec'
import LatestIntern from './components/LatestIntern'
import CoursesSec from './components/CoursesSec'
import Review from './components/Review'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>  
      <CatagoriesSec/>
      <LatestIntern/>
      <CoursesSec/>  
      <Review/>
      <Footer/>
    </>
  )
}

export default App