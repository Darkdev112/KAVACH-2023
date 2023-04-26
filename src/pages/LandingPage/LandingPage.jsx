import React, { useEffect,useState } from 'react'
import Loading from '../../components/Loader/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { hasOpen, isClose, isOpen } from '../../redux/slices/loaderSlice'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import Navbar from '../../components/Navbar/Navbar'
import Modal from '../../components/Modal/Modal'

const LandingPage = () => {
  const isLoading = useSelector((state) => {
    return state.loader.isLoading
  })
  const show = useSelector((state) => {
    return state.modal.show
  })
  const dispatch = useDispatch();
  const [userToken,setUserToken] = useState("");
  const [key, setKey] = useState(0);

  
  useEffect(() => {
    const token =localStorage.getItem('token');
    if(!token){
      dispatch(isOpen())
      setTimeout(()=> {
        dispatch(isClose())
      },2000)
    }
  }, [])
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      setUserToken(token)
      setKey(Math.random())
    }
  }, [userToken,show])
  
  

  return (
    <>
      {isLoading && <Loading/>}
      {(!isLoading) && 
      <>
        <Modal/>
        <Navbar userToken={userToken} key={key} setKey={setKey} setUserToken={setUserToken}/>
        <Header/>
        <Card/>
      </>
      }
    </>
  )
}

export default LandingPage