import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null


    if (theme === 'dark') {
        return (
            <Moon width={30} onClick={() => setTheme('light')} />
        )
    } else {
        return (
            <Sun width={30} onClick={() => setTheme('dark')} />
        )
    }

}