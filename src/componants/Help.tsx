import React from "react"
import { Services } from "../assets/assets"
import HeaderSec from "./HeaderSec"
import Service from "./Service"

const Help = () => {
    return (
        <div className="container flex flex-col items-center">
            <HeaderSec head="How can we help?" disc="From strategy to execution, we craft digital solutions that move your business forward." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 mb-10">
                {
                    Services.map((item ,index) => (
                        <div className="shadow-md rounded-md p-5 pr-10 bg-white/5 backdrop-blur-2xl hover:shadow-none" key={index}>
                            <Service Service={item}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default React.memo(Help)