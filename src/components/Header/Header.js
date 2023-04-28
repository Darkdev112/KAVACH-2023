import React from 'react'
import './Header.scss'
import character from '../../Assets/images/character.png'


const Header = ({aos,aos1}) => {
    return (
        <div className='header-all'>
            <div className='header'>
                <div className='head-text' data-aos={`${aos1}`}>
                    <h1 className='heading'>Fraudsters<span className='red-head'> BEWARE</span> we are always there</h1>
                    <div className='parah-header'>One stop solution for financial fraud identification. br
                    Facilitating a safe financial experience by awaring users of possible financial frauds</div>
                </div>
                <div className='head-image' data-aos={`${aos}`}>
                    <img src={character} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header
