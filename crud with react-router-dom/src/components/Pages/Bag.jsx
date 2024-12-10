import BagList from "../Bag/BagList"

function Bag({ bag}) {
    return (
        <section>
            <h1>Bag</h1>
            <BagList bag={bag}/>
        </section>
    )
}

export default Bag
