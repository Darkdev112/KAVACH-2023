import React, { useEffect } from 'react'
import Loading from '../../components/Loader/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { hasOpen, isClose, isOpen } from '../../redux/slices/loaderSlice'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'


const LandingPage = () => {
  
  const isLoading = useSelector((state) => {
    return state.loader.isLoading
  })
  const hasLoaded = useSelector((state) => state.loader.hasLoaded)
  const dispatch = useDispatch();

  useEffect(() => {
    if(!hasLoaded){
      dispatch(isOpen())
      setTimeout(()=> {
        dispatch(isClose())
      },2000)
      dispatch(hasOpen())
    }
  }, [])
  

  return (
    <>
      {isLoading && <Loading/>}
      {(!isLoading) && 
      <>
        <Header/>
        <Card/>
      </>
      }
    </>
  )
}

export default LandingPage