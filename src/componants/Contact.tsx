import assets from "../assets/assets"
import HeaderSec from "./HeaderSec"

const Contact = () => {
    return (
        <div className="container flex flex-col items-center">
            <HeaderSec head="Reach out to us" disc="From strategy to execution, we craft digital solutions that move your business forward." />
            <div className="my-10 w-full">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="dark:text-gray-600 text-sm block mb-2 font-medium">Your name</label>
                            <div className="relative">
                                <img src={assets.person_icon} alt="personal Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                                <input type="text" autoComplete="off" className="border border-gray-400 rounded-md pl-10 block w-full text-sm p-2.5 outline-0 focus:border-gray-500 dark:text-white dark:border-gray-500/20" placeholder="enter your name" name="name" />
                            </div>
                        </div>
                        <div>
                            <label className="dark:text-gray-600 text-sm block mb-2 font-medium">Email id</label>
                            <div className="relative">
                                <img src={assets.email_icon} alt="email Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                                <input type="text" autoComplete="off" className="border border-gray-400 rounded-md pl-10 block w-full text-sm p-2.5 outline-0 focus:border-gray-500 dark:text-white dark:border-gray-500/20" placeholder="enter your email" name="email" />
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-5">
                        <label className="dark:text-gray-600 text-sm block mb-2 font-medium">Email id</label>
                        <textarea name="message" id="message" className="border border-gray-400 rounded-md block w-full text-sm p-2.5 outline-0 focus:border-gray-500 resize-none h-30 dark:text-white dark:border-gray-500/20" placeholder="message"></textarea>
                    </div>
                    <button className="bg-primary cursor-pointer transition-all max-md:hidden text-sm inline-flex gap-3 py-2 px-5 text-white rounded-full mt-5">Submit
                        <img src={assets.arrow_icon} alt="arrow_image" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact