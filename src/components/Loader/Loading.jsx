import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ClipLoader } from 'react-spinners'

const Loading = () => {

    const isLoading = useSelector((state) => state.loader.isLoading)

    const override = {
        display: "block",
        margin : "0 auto",
        borderColor : "red",
    }

  return (
    <div>
        <ClipLoader
        color="red"
        loading={isLoading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loading