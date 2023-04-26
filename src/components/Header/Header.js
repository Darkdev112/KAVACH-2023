import React from 'react'
import './Header.scss'
import character from '../../Assets/images/character.png'


const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='head-text'>
                    <h1 className='heading'>LOREM EPSUM</h1>
                    <div className='parah-header'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, harum
                        quod, odio molestias ratione officia quis debitis ab, omnis quas magnam consectetur
                        voluptatem pariatur unde illum doloribus provident quia dolore!</div>
                </div>
                <div className='head-image'>
                    <img src={character} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header
