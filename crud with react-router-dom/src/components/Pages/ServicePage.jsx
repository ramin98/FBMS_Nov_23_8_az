import { Link, Outlet, useLocation, useParams } from "react-router-dom"

function ServicePage({services}) {
    let location = useLocation()
    console.log(location)
    let {serviceId} = useParams()
    console.log(serviceId)
    let parsedServiceId = parseInt(serviceId)
    console.log(parsedServiceId)
    let elementIndex = services.findIndex((item) => item.id === parsedServiceId)

    
    
    return (
        <section>
            <h1>ServicePage</h1>
            <Link to='service-name' >SERVICE NAME</Link>
            <Link to='service-description' >SERVICE Description</Link>
            <Outlet context={services[elementIndex]}/>
        </section>
    )
}

export default ServicePage
