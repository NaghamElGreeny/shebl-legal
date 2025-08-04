'use client'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import '@/src/styles/ThemeBtn.scss'
export default function ThemeButton() {
    const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

    useEffect(() => {
        const savedTheme = Cookies.get('modeLayout') as 'light' | 'dark' | undefined;
        const initial = savedTheme ?? 'light';
        setTheme(initial);

        document.documentElement.classList.toggle('dark', initial === 'dark');
        Cookies.set('modeLayout', initial);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        Cookies.set('modeLayout', newTheme);
    };

    if (theme === null) return null; // تأجيل الرندر لحد ما تتحدد الثيم

    return (
        <button type="button" className="mode" onClick={toggleTheme} dir='ltr'>
            <span className="icon"></span>
            <p>{theme === 'light' ? '☀️' : '🌙'}</p>
        </button>
    );
}
