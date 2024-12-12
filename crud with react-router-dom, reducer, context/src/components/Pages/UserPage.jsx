import { useContext } from "react"
import {useParams } from "react-router-dom"
import { MyContext } from "../../App"

function UserPage() {

    let {users} = useContext(MyContext)
    console.log(users)
    
    let {id} = useParams()
    console.log(id)
    let parsedServiceId = parseInt(id)
    let elementIndex = users.findIndex((item) => item.id === parsedServiceId)
    
    if(!users[elementIndex]){
        console.log(elementIndex)
        return <h1>ERROR</h1>
    }
    
    return (
        <section className="user">
            <h1>UserPage</h1>
            <p>{users[elementIndex].name}</p>
            <p>{users[elementIndex].username}</p>
            <p>{users[elementIndex].email}</p>

        </section>
    )
}

export default UserPage
