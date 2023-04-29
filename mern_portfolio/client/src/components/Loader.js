import React from 'react'

function Loader() {
    return (
        <div className="z-[100] fixed inset-0 bg-primary h-screen flex items-center justify-center">
            <div className="flex gap-5 text-6xl sm:text-3xl font-semibold">
                <h1 className="text-secondary a">A</h1>
                <h1 className="text-white k">K</h1>
                <h1 className="text-tertiary p">P</h1>
            </div>
        </div>
    )
}

export default Loader