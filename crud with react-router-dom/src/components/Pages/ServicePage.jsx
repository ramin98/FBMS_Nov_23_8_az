function ServicePage({bag, id}) {
    let serviceIndex = bag.findIndex((item) => id === item.id)
    
    return (
        <section>
            <h1>ServicePage</h1>
            <p>{bag[serviceIndex] && bag[serviceIndex].servicesName}</p>
            <p>{bag[serviceIndex] && bag[serviceIndex].servicesDescription}</p>

        </section>
    )
}

export default ServicePage
