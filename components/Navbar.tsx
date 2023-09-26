import Image from 'next/image'
import React from 'react'
import carLogo from '../public/assets/logo.svg'

const Navbar = () => {
    return (
        <nav className='py-3 bg-red-400'>
            <div className='max-w-[1440px] mx-auto'>
                <div className="flex justify-between">
                    <Image src={carLogo} alt='' />
                    <p>Sign in</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar