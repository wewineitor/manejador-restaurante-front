import styles from "./SmallInput.module.css"

const SmallInput = ({placeholder, type, value, register}) => {
    return (
        <div className={styles.section}>
            <label htmlFor="Nombre">Nombres (s)</label>
            <input
                type={type}
                placeholder={placeholder}
                {...register(value)}
                required
            />
        </div>
    )
}

export default SmallInput