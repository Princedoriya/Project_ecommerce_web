import React from 'react'

const Logo = ({w,h}) => {
    return (
        <div className="flex items-center justify-center">
            <div
                className="p-0.5 rounded-full border-2 border-white-400"
                style={{ display: 'inline-block' }}
            >
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-76 h-12 rounded-full "
                />
            </div>
        </div>
    )
}

export default Logo
