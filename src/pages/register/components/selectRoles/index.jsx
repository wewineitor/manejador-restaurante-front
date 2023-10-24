import styles from './SelectRoles.module.css'

const SelectRoles = () => {
    return (
        <>
            <option className={styles.option} value={''}></option>
            <option className={styles.option} value={'ROLE_MESERO'}>Mesero</option>
            <option className={styles.option} value={'ROLE_COCINERO'}>Cocinero</option>
            <option className={styles.option} value={'ROLE_RECEPCIONISTA'}>Recepcionista</option>
            <option className={styles.option} value={"ROLE_MAITRE"}>Maitre</option>
        </>
    )
}

export default SelectRoles