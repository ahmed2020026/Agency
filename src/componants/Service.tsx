interface ServiceType {
    title: string,
    content: string,
    img: any
}
const Service = ({ Service }: { Service: ServiceType }) => {
    return (
        <div className="flex justify-start items-center gap-5 bg-transparent">
            <img src={Service.img} loading="lazy" alt={`image_service_of_${Service.title}`} className="max-w-24"/>
            <div className="py-5">
                <h3 className="font-semibold text-gray-900 mb-2 dark:text-white">{Service.title}</h3>
                <p className="text-gray-600 dark:text-gray-500 text-sm">{Service.content}</p>
            </div>
        </div>
    )
}

export default Service