const HeaderSec = ({head,disc}:{head:string, disc:string}) => {
    return (
        <div className="max-w-xl text-center mt-10 mb-5">
            <h2 className="font-medium text-gray-900 dark:text-white mb-2 text-3xl sm:text-4xl md:text-5xl">{head}</h2>
            <p className="text-gray-600 dark:text-gray-500">{disc}</p>
        </div>
    )
}

export default HeaderSec