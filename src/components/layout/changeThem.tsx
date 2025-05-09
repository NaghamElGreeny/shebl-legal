'use client'

import Cookies from "js-cookie"
import React from 'react'

export default function () {

    const themLayout = Cookies.get('modeLayout')
    const changeMode = () => {
        if (themLayout) {
            if (themLayout === 'light') {
                Cookies.set('modeLayout', 'dark')
            } else {

                Cookies.set('modeLayout', 'light')
            }

        }
        document.documentElement.classList.toggle('dark')
    }
    return (
        <button type='button' className="text-black bg-MainColor size-5 rounded-full" onClick={changeMode}>
            {themLayout}
        </button>
    )
}
