import { Link } from 'wouter'
import styles from './Succesfully.module.css'

const Succesfully = () => {
    return (
        <main className={styles.container}>
            <h1>Te has registrado con existo!</h1>
            <h2>Nombre de usuario</h2>
            <h3 className={styles.usuario}>{"username"}</h3>
            <Link href='/login'><a className={styles.bt} >Ir a inicio</a></Link>
        </main>
      )
}

export default Succesfully