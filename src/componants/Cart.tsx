interface projectType {
    title: string,
    disc: string,
    img: any
}
const Cart = ({ project }: { project: projectType }) => {
    return (
        <div className="shadow-md rounded-md p-5 bg-white/2 backdrop-blur-xl border border-gray-300 dark:border-gray-500/10 hover:shadow-none">
            <img src={project.img} alt="" className="w-full" />
            <div className="pt-4">
                <h4 className="mb-2 text-gray-900 dark:text-white font-medium text-lg">{project.title}</h4>
                <p className="text-sm text-gray-600">{project.disc}</p>
            </div>
        </div>
    )
}

export default Cart