import { Link } from "wouter";
import styles from "./Login.module.css";

const Login = () => {
    //const [error, setError] = useState(false);
    let error = false
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Inicia sesión</h1>
                <form action="" onSubmit={() => { }}>
                    {error ? <p className={styles.error}>{"Correo o contraseña no valido"}</p> : null}
                    <div className={styles.section_content}>
                        <div className={styles.icon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-user"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#ffffff"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                        </div>

                        <input
                            type="text"
                            name="username"
                            id="userName"
                            placeholder="Nombre de usuario"
                            required
                        />
                    </div>
                    <div className={styles.section_content}>
                        <div className={styles.icon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-lock"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#ffffff"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                                <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                                <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                            </svg>
                        </div>

                        <input
                            type="password"
                            name="password"
                            id="userPassword"
                            placeholder="contraseña"
                            required
                        />
                    </div>
                    <button type="submit" className={styles.bt}>
                        Entrar
                    </button>

                    <h2 className={styles.msg_password}>
                        ¿Olvidaste tu contraseña?{" "}
                        <Link className={styles.msg_password} href={"#"}>
                            Click aquí
                        </Link>{" "}
                    </h2>
                    <div className={styles.bt_regis_section}></div>
                    <Link href={"/register"}>
                        <button className={`${styles.bt} ${styles.bt_regis}`}>
                            Registrate
                        </button>
                    </Link>
                </form>
            </div>
        </main>
    );
};

export default Login;
