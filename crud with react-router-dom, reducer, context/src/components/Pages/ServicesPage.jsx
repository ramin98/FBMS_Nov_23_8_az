import AddForm from "../AddForm"
import Services from "../Services/Services"

function ServicesPage() {

    // DIGER EDIT USULU
  // let [servicesArray, setServicesArray] = useState([...services.map((item) => ({...item,open: false}))])

    return (
        <>
        <AddForm/>
        <Services/>
        </>
    )
}

export default ServicesPage