import { useLocation, useOutletContext } from "react-router-dom"

function ServiceDescription() {
    let location = useLocation()
    let con = useOutletContext()
    console.log(location.state)
    console.log(con)

    if(!con && !location.state){
        return <h1>ERROR</h1>
    }
    
    return (
        <section>
            <h1>Service Description</h1>
            <p>{con.servicesDescription}</p>
            <p>{con.servicesDescription}</p>
        </section>
    )
}

export default ServiceDescription
