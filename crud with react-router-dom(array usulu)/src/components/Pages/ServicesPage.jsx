import { useState } from "react"
import AddForm from "../AddForm"
import Services from "../Services/Services"
import { services } from "../../assets/data"
import { useOutletContext } from "react-router-dom"

function ServicesPage() {
    let [servicesArray, setServicesArray] = useState([...services])

    let {bag, setBag} = useOutletContext()

    // DIGER EDIT USULU
  // let [servicesArray, setServicesArray] = useState([...services.map((item) => ({...item,open: false}))])

    return (
        <>
        <AddForm servicesArray={servicesArray} setServicesArray={setServicesArray}/>
        <Services bag={bag} setBag={setBag} servicesArray={servicesArray} setServicesArray={setServicesArray}/>
        </>
    )
}

export default ServicesPage