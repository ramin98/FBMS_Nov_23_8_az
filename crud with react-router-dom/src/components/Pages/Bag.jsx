import BagList from "../Bag/BagList"

function Bag({ bag,setId }) {
    return (
        <section>
            <h1>Bag</h1>
            <BagList setId={setId} bag={bag}/>
        </section>
    )
}

export default Bag
