import React, { useEffect,useState } from 'react'
import Loading from '../../components/Loader/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { hasOpen, isClose, isOpen } from '../../redux/slices/loaderSlice'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import Navbar from '../../components/Navbar/Navbar'


const LandingPage = () => {
  const isLoading = useSelector((state) => {
    return state.loader.isLoading
  })
  const dispatch = useDispatch();
  const [userToken,setUserToken] = useState("");

  
  useEffect(() => {
    const token =localStorage.getItem('token');
    if(!token){
      dispatch(isOpen())
      setTimeout(()=> {
        dispatch(isClose())
      },2000)
    }
  }, [])
  

  return (
    <>
      {isLoading && <Loading/>}
      {(!isLoading) && 
      <>
        <Navbar/>
        <Header/>
        <Card/>
      </>
      }
    </>
  )
}

export default LandingPage