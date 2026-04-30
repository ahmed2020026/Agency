import { teamData } from "../assets/assets"
import HeaderSec from "./HeaderSec"

const Team = () => {
    return (
        <div className="container flex flex-col items-center">
            <HeaderSec head="Meet the team" disc="A passionate team of digital experts dedicated to your brands success." />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 justify-between items-center my-10 w-full">
                {
                    teamData.map((item, index) => (
                        <div key={index} className="flex justify-start gap-5 items-center shadow-md p-3 rounded-md bg-white dark:bg-white/5 backdrop-blur-2xl">
                            <img src={item.image} alt={`${item.title}_image`} className="max-w-12 max-h-12 rounded-full"/>
                            <div className="flex-1">
                                <h4 className="text-sm font-bold text-gray-950 dark:text-white">{item.name}</h4>
                                <p className="text-xs text-gray-400 dark:text-gray-500">{item.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Team