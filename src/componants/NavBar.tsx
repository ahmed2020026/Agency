import { Link } from "react-router-dom";
import assets from "../assets/assets";
import { useState } from "react";

const NavBar = ({ themes, setThemes }: { themes: string, setThemes: () => void }) => {
    const [openSideBar, setOpenSideBar] = useState<boolean>(false);

    return (
        <>
            <div className="container flex justify-between items-center font-medium">
                <img src={themes === 'dark' ? assets.logo_dark : assets.logo} className="w-32 sm:w-40" />

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

                    <Link to={'/'} className="border-b border-transparent hover:border-gray-700">Home</Link>
                    <Link to={'/'} className="border-b border-transparent hover:border-gray-700">Services</Link>
                    <Link to={'/'} className="border-b border-transparent hover:border-gray-700">Our Work</Link>
                    <Link to={'/'} className="border-b border-transparent hover:border-gray-700">Contact US</Link>
                </nav>

                <div className="flex items-center gap-2">
                    <button className="cursor-pointer p-2 rounded-full" onClick={setThemes}>
                        <img className="w-5 opacity-70 dark:opacity-100" src={themes === 'dark' ? assets.sun_icon : assets.moon_icon} />
                    </button>
                    <button className="cursor-pointer sm:hidden" onClick={() => setOpenSideBar(true)}>
                        <img className="w-8 opacity-70" src={themes === 'dark' ? assets.menu_icon_dark : assets.menu_icon} />
                    </button>
                    <button className="bg-primary cursor-pointer hover:scale-103 transition-all max-md:hidden text-sm inline-flex gap-3 py-2 px-5 text-white rounded-full">
                        contact <img src={assets.arrow_icon} alt="" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default NavBar