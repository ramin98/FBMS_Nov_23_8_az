import BagList from "../Bag/BagList"
import { useOutletContext } from 'react-router-dom'

function Bag() {
    let {bag} = useOutletContext()
    return (
        <section>
            <h1>Bag</h1>
            <BagList bag={bag}/>
        </section>
    )
}

export default Bag
