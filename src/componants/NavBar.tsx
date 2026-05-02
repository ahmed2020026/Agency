import assets from "../assets/assets";
import { useState } from "react";

const NavBar = ({ themes, setThemes }: { themes: string, setThemes: () => void }) => {
    const [openSideBar, setOpenSideBar] = useState<boolean>(false);

    return (
        <>
            <div className="container flex justify-between items-center font-medium">
                <img width={100} height={100} src={themes === 'dark' ? assets.logo_dark : assets.logo} className="w-32 sm:w-40" alt="logo" />

<nav className={`flex md:items-center gap-5 z-50 sm:text-sm 
text-gray-700 dark:text-white transition-all

max-sm:fixed max-sm:top-0 max-sm:right-0
max-sm:min-h-screen max-sm:bg-primary 
max-sm:flex-col max-sm:px-5 max-sm:pt-20 
max-sm:text-white max-sm:w-60

transform ${openSideBar ? 'max-sm:translate-x-0' : 'max-sm:translate-x-full'}
`}>
                    <button className="cursor-pointer absolute top-3 right-3 p-2 sm:hidden" onClick={() => setOpenSideBar(false)}>
                        <img src={assets.close_icon} className="block w-5 h-5" alt="close_menu" />
                    </button>

                    <button className="border-b cursor-pointer border-transparent hover:border-gray-700">Home</button>
                    <button className="border-b cursor-pointer border-transparent hover:border-gray-700">Services</button>
                    <button className="border-b cursor-pointer border-transparent hover:border-gray-700">Our Work</button>
                    <button className="border-b cursor-pointer border-transparent hover:border-gray-700">Contact US</button>
                </nav>

                <div className="flex items-center gap-2">
                    <button className="cursor-pointer p-2 rounded-full" onClick={setThemes} aria-label="toggle-themes">
                        <img className="w-5 " src={themes === 'dark' ? assets.sun_icon : assets.moon_icon} alt="themes_change_icon" />
                    </button>
                    <button className="cursor-pointer sm:hidden" onClick={() => setOpenSideBar(true)} aria-label="toggle-menu">
                        <img className="w-8 opacity-70" alt="menu_icon" src={themes === 'dark' ? assets.menu_icon_dark : assets.menu_icon} />
                    </button>
                    <button className="bg-primary cursor-pointer transition-all max-md:hidden text-sm inline-flex gap-3 py-2 px-5 text-white rounded-full">
                        contact <img src={assets.arrow_icon} alt="arrow" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default NavBar