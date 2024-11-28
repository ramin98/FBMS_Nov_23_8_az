import styles from '../App.module.css'
import '../App.css'

function Footer() {
    console.log(styles)
    return (
        <footer className={styles.active}>
            <h1 style={{
                color:'red',
                fontSize:'60px',
                fontWeight:'900'
            }}>FOOTER</h1>
        </footer>
    )
}

export default Footer