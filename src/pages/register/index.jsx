import { useState } from "react";
import styles from "./Register.module.css";
import SelectRoles from "./components/selectRoles";
import { useForm } from "react-hook-form";
import { useLocation } from "wouter";
import { registerUser } from "@services/api"
import SmallInput from "./components/smallInput";
const Register = () => {

    const [location, setLocation] = useLocation()
    const [state, setState] = useState({
        rol: "",
        passwordValida: true,
        passwordView: false
    })

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        if (data.password !== data.secondPassword) {
            setState({
                ...state,
                passwordValida: false
            })
            return
        }
        else {
            setState({
                ...state,
                passwordValida: true
            })
        }

        const username = data.name.substring(0, 1) +
            data.lastName.substring(0, 2) +
            data.motherLastName.substring(data.motherLastName.length - 2) +
            data.phone.substring(0, 1) +
            data.phone.substring(data.phone.length - 1);

        const body = {
            "name": data.name,
            "email": data.email,
            "username": username,
            "last_name": data.lastName,
            "mother_last_name": data.motherLastName,
            "phone": data.phone,
            "role": state.rol,
            "password": data.password
        }
        registerUser(body)
        setLocation("/register/succesfully")
    }

    const handlePasswordView = () => {
        if (state.passwordView) {
            setState({
                ...state,
                passwordView: false
            })
        }
        else {
            setState({
                ...state,
                passwordView: true
            })
        }
    };

    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Registrate</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.nombre_container}>
                        <SmallInput placeholder="Ingresa tu nombre" register={register} type="text" value="name"/>
                        <SmallInput placeholder="Apellido Paterno" register={register} type="text" value="lastName"/>
                        <SmallInput placeholder="Apellido Materno" register={register} type="text" value="motherLastName"/>
                        <SmallInput placeholder="Email"  register={register} type="email" value="email"/>
                    </div>

                    <div className={styles.container_password}>
                        <div className={styles.section}>
                            <div className={styles.headerPassword}>
                                <label htmlFor="Contraseña">Contraseña</label>
                                <div
                                    className={styles.bt_view_pass}
                                    onClick={handlePasswordView}
                                >
                                    {state.passwordView ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-eye"
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="#ffffff"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-eye-closed"
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="#ffffff"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" />
                                            <path d="M3 15l2.5 -3.8" />
                                            <path d="M21 14.976l-2.492 -3.776" />
                                            <path d="M9 17l.5 -4" />
                                            <path d="M15 17l-.5 -4" />
                                        </svg>
                                    )}
                                </div>
                            </div>

                            <input
                                type={state.passwordView ? "text" : "password"}
                                {...register("password")}
                                required
                            />
                        </div>
                        <div className={styles.section}>
                            <label htmlFor="Contraseña">
                                {state.passwordValida ? (
                                    "Verifica tu contraseña"
                                ) : (
                                    <p className={styles.error}>{"la contraseña no coincide"}</p>
                                )}
                            </label>
                            <input
                                type="password"
                                placeholder="Verifica tu contraseña"
                                {...register("secondPassword")}
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.container_tel_rol}>
                        <div className={styles.section}>
                            <label htmlFor="telefono">Telefono</label>
                            <input
                                type="text"
                                placeholder="ejem: 5512346543"
                                required
                                {...register("phone")}
                                maxLength={10}
                            />
                        </div>

                        <div className={styles.section}>
                            <label htmlFor="rol">Rol</label>
                            <select
                                className={styles.option_container}
                                value={state.rol}
                                onChange={(e) => setState({
                                    ...state,
                                    rol: e.target.value
                                })}
                            >
                                <SelectRoles />
                            </select>
                        </div>
                    </div>
                    <div className={styles.bt_container}>
                        <button className={styles.bt}>Registrate</button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Register