const HeaderSec = ({head,disc}:{head:string, disc:string}) => {
    return (
        <div className="max-w-xl text-center mt-10 mb-5">
            <h3 className="font-medium text-gray-700 dark:text-white mb-2 text-3xl sm:text-4xl md:text-5xl">{head}</h3>
            <p className="text-gray-500">{disc}</p>
        </div>
    )
}

export default HeaderSec