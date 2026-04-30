interface ServiceType {
    title: string,
    content: string,
    img: any
}
const Service = ({ Service }: { Service: ServiceType }) => {
    return (
        <div className="flex justify-start items-center gap-5">
            <img src={Service.img} alt="" className="max-w-24"/>
            <div className="py-5">
                <h4 className="font-semibold text-gray-900 mb-2 dark:text-white">{Service.title}</h4>
                <p className="text-gray-500 text-sm">{Service.content}</p>
            </div>
        </div>
    )
}

export default Service