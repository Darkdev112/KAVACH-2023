import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/slices/modalSlice'
import "./Modal.scss"
import Login from '../../components/Login/Login'
import Signup from '../../components/Signup/Signup'
import {ImCross} from 'react-icons/im'

const Modal = () => {
    const toggleLogin = useSelector((state) => state.modal.toggleLogin)
    const show = useSelector((state) => state.modal.show)
    const dispatch = useDispatch()

    useEffect(() => {
        if (show) {
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }
    }, [show, toggleLogin])

    return (
        <>
            {show && <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    {toggleLogin ? <Login/> : <Signup/>}
                    <button className="close-modal" onClick={() => {dispatch(closeModal())}}>
                        <ImCross className='cross'/>
                    </button>
                </div>
            </div>}
        </>
    );
}

export default Modal