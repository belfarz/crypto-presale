import React from 'react'

export default function Header() {
    return (
        <nav className='fixed top-0 left-0 right-0 flex justify-around text-white font-medium text-xl  p-4' style={{ backgroundColor: "#8955f3" }}>
            <div>logo</div>
            <div className="nav hidden md:block">
                <ul className="flex">
                    <li className="p-2 mx-5 font-medium text-lg">ABOUT</li>
                    <li className="p-2 mx-5 font-medium text-xl">TOKEN</li>
                    <li className="p-2 mx-5 font-medium text-xl">PARTNER</li>
                    <li className="p-2 mx-5 font-medium text-xl">ROADMAP</li>
                </ul>
            </div>
            <div>
                {/* social media icons here */}
            </div>
        </nav>
    )
}
