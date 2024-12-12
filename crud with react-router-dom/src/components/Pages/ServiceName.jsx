import { useLocation, useOutletContext } from "react-router-dom"

function ServiceName() {
    // let location = useLocation()
    let con =  useOutletContext()
    // console.log(location.state)
    console.log(con)
    if(!con){
        return <h1>ERROR</h1>
    }
    return (
        <section>
            <h1>Service Name</h1>
            <p>{con.servicesName}</p>
            {/* <p>{location.state.servicesName}</p> */}
        </section>
    )
}

export default ServiceName
