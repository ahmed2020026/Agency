interface projectType {
    title: string,
    disc: string,
    img: any
}
const Cart = ({ project }: { project: projectType }) => {
    return (
        <div className="shadow-md rounded-md p-5 bg-white/5 backdrop-blur-2xl hover:shadow-none">
            <img src={project.img} loading="lazy" alt={`image of ${project.title}`} className="w-full" />
            <div className="pt-4">
                <h3 className="mb-2 text-gray-900 dark:text-white font-medium text-lg">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-500 ">{project.disc}</p>
            </div>
        </div>
    )
}

export default Cart