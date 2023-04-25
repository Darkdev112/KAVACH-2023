import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='head-text'>
                    <div className='heading'>LOREM EPSUM</div>
                    <div className='parah-header'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, harum
                        quod, odio molestias ratione officia quis debitis ab, omnis quas magnam consectetur
                        voluptatem pariatur unde illum doloribus provident quia dolore!</div>
                </div>
                <div className='head-image'>
                    <img src="/images/character.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header
