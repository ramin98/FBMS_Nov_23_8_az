import { useContext } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { MyContext } from "../../App"

function About() {

    let {users} = useContext(MyContext)

    let navigate = useNavigate()

    function showMenu(id) {
        navigate(`user-page/${id}`)
    }

    function hideMenu() {
        navigate(``)
    }

    return (
        <section className="menu">
            <h1>ABOUT</h1>
             <div>{users.map((item) => <button key={item.id} onMouseOut={hideMenu} onMouseOver={() => showMenu(item.id)}>{item.name}</button>)}</div>
             <Outlet/>
        </section>
    )
}

export default About
