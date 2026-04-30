import assets from "../assets/assets"

const Footer = ({ themes }: { themes: string }) => {
    return (
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <img src={themes === 'dark' ? assets.logo_dark : assets.logo} alt="footer_logo" className="w-32 sm:w-40" />
                    <p className="text-sm dark:text-gray-600 text-gray-400 mt-3">From strategy to execution, we craft digital solutions that move your business forward.</p>
                </div>
                <div>
                    <h2 className="text-gray-900 dark:text-gray-400">Subscribe to our newsletter</h2>
                    <p className="text-sm dark:text-gray-600 text-gray-400 mt-3 mb-5">The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className="flex gap-2.5">
                        <input type="text" autoComplete="off" className="border border-gray-400 block w-full text-sm p-2.5 rounded outline-0 focus:border-gray-500 dark:text-white dark:border-gray-500/20" placeholder="enter your email" name="email" />
                        <button className="bg-primary cursor-pointer transition-all max-md:hidden text-sm inline-flex py-2.5 px-5 text-white rounded">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="border-t border-black/10 dark:border-white/10 mt-7 pt-5 text-sm text-center text-gray-400 dark:text-gray-500">
                <p>Copyright 2025 © GreatStack - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer