import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loader/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { hasOpen, isClose, isOpen } from '../../redux/slices/loaderSlice'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import Navbar from '../../components/Navbar/Navbar'
import Modal from '../../components/Modal/Modal'
import Insurance from '../../../src/Assets/images/insurance.png'
import Credit from '../../../src/Assets/images/credit.png'
import Debit from '../../../src/Assets/images/debit.png'
import Coin from '../../../src/Assets/images/coin.png'
import Crypto from '../../../src/Assets/images/crypto.png'
import Online from '../../../src/Assets/images/online.png'
import './LandingPage.scss'

const LandingPage = () => {
  const cards = [
    {
      id : "1",
      link : "insurancefraud",
      img : Insurance,
    },
    {
      id : "2",
      link : "creditcardfraud",
      img : Credit,
    },
    {
      id : "3",
      link : "onlinefraud",
      img : Online,
    },
    {
      id : "4",
      link : "debitcardfraud",
      img : Debit,
    },
    {
      id : "5",
      link : "cryptofraud",
      img : Crypto,
    },
    {
      id : "6",
      link : "coinfraud",
      img : Coin,
    },
  ]
  const isLoading = useSelector((state) => {
    return state.loader.isLoading
  })
  const show = useSelector((state) => {
    return state.modal.show
  })
  const dispatch = useDispatch();
  const [userToken, setUserToken] = useState("");
  const [key, setKey] = useState(0);


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(isOpen())
      setTimeout(() => {
        dispatch(isClose())
      }, 2000)
    }
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setUserToken(token)
      setKey(Math.random())
    }
  }, [userToken, show])



  return (
    <>
      {isLoading && <Loading />}
      {(!isLoading) &&
        <>
          <Modal />
          <Navbar userToken={userToken} key={key} setKey={setKey} setUserToken={setUserToken} />
          <Header />
          <div className='card-section'>
            <div className="all-cards">
              <h1>HEADING OF THE FRAUD TYPE</h1>
              <div className="all-cards">
                <div className='cards'>
                  {cards.map((card)=>{
                    return(
                      <Card key={card.id} img={card.img} link={card.link} userToken={userToken}/>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default LandingPage