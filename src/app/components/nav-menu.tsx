'use client';
import Link from 'next/link'
import SearchComponent from './weather/search-component';
import ThemeToggle from './theme-toggle';

export default function NavMenu() {

    return (
        <div className="flex items-start justify-between px-8 xl:px-64 sm:px-16 pt-5 gap-4">
            <SearchComponent />
            <div className="font-bold text-blue-600 text-xs md:text-3xl flex items-center gap-2">
                <ThemeToggle />  <Link href="/"><p className="invisible md:visible">WEATHER THING</p></Link>
            </div>
        </div>
    )
}