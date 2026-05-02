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
                            <label htmlFor="name" className="text-gray-600 dark:text-gray-500  text-sm block mb-2 font-medium">Your name</label>
                            <div className="relative">
                                <img src={assets.person_icon} alt="personal Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                                <input type="text" id="name" autoComplete="off" className="border border-gray-400 rounded-md pl-10 block w-full text-sm p-2.5 outline-0 focus:border-gray-500 dark:focus:border-gray-400 dark:text-white dark:border-gray-500" placeholder="enter your name" name="name" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="text-gray-600 dark:text-gray-500  text-sm block mb-2 font-medium">Email id</label>
                            <div className="relative">
                                <img src={assets.email_icon} alt="email Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                                <input type="text" id="email" autoComplete="off" className="border border-gray-400 rounded-md pl-10 block w-full text-sm p-2.5 outline-0 focus:border-gray-500 dark:focus:border-gray-400 dark:text-white dark:border-gray-500" placeholder="enter your email" name="email" />
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-5">
                        <label htmlFor="message" className="text-gray-600 dark:text-gray-500  text-sm block mb-2 font-medium">Message</label>
                        <textarea name="message" id="message" className="border border-gray-400 rounded-md block w-full text-sm p-2.5 outline-0 focus:border-gray-500 dark:focus:border-gray-400 resize-none h-30 dark:text-white dark:border-gray-500" placeholder="message"></textarea>
                    </div>
                    <button className="bg-primary cursor-pointer transition-all text-sm inline-flex gap-3 py-2 px-5 text-white rounded-full mt-5">Submit
                        <img src={assets.arrow_icon} alt="arrow_image" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact