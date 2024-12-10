import { Link, Outlet, useLocation, useParams } from "react-router-dom"

function ServicePage() {
    let location = useLocation()
    console.log(location)
    let {serviceId} = useParams()
    console.log(serviceId)
    let parsedServiceId = parseInt(serviceId)
    console.log(parsedServiceId)

    return (
        <section>
            <h1>ServicePage</h1>
            <Link to='service-name' state={location.state}>SERVICE NAME</Link>
            <Link to='service-description' state={location.state}>SERVICE Description</Link>
            <Outlet context={location.state}/>
        </section>
    )
}

export default ServicePage
