'use client'
import '../../styles/ThemeBtn.scss'
import Cookies from "js-cookie"
import React, { useEffect, useState } from 'react'

export default function ThemeButton() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        return Cookies.get('modeLayout') === 'dark' ? 'dark' : 'light'
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        Cookies.set('modeLayout', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }

    return (
        <button type='button' id="mode" className="mode" onClick={toggleTheme} dir='ltr'>
            <span className="icon"></span>
            <p>{theme === 'light' ? '☀️' : '🌙'}</p>
        </button>
    );
}