import React from 'react'
import "./Loading.scss"
import { useDispatch, useSelector } from 'react-redux'
import { PacmanLoader } from 'react-spinners'

const Loading = () => {

    const isLoading = useSelector((state) => state.loader.isLoading)

    const override = {
        display: "block",
        margin : "0 auto",
        borderColor : "red",
    }

  return (
    <div className='container'>
        <PacmanLoader
        color="rgb(36, 36, 36)"
        loading={isLoading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
    </div>
  )
}

export default Loading