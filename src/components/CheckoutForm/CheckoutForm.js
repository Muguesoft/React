import { useState} from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({onConfirm}) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [nombreError, setNombreError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [telefonoError, setTelefonoError] = useState("");

    const handleConfirm = (event) => {
        event.preventDefault()

        // Validación de Nombre
        if (!nombre.trim()) {
            setNombreError("Por favor, ingrese su nombre");
            return;
        }
    
        // Validación de Teléfono (puedes ajustar la expresión regular según tus necesidades)
        const telefonoRegex = /^\d{10}$/;
        if (!telefono.match(telefonoRegex)) {
            setTelefonoError("Ingrese un número de teléfono válido (10 dígitos)");
            return;
        }
    
        // Validación de Correo Electrónico
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email.match(emailRegex)) {
            setEmailError("Ingrese una dirección de correo electrónico válida");
            return;
        }

        const userData = {nombre, telefono, email}
        onConfirm(userData)
    }

    return(
        <div className="form-container">
            <form onSubmit={handleConfirm}>
                <label>
                    Nombre
                    <input placeholder="ingrese su nombre" className="nombre_telefono"
                        type = "text"
                        value = {nombre}
                        onChange={({target}) => {
                            setNombre(target.value)
                            setNombreError("")}}
                    />
                    {nombreError && <p className="error-message">{nombreError}</p>}
                </label>

                <label>
                    Teléfono
                    <input placeholder="ingrese un número de teléfono" className="nombre_telefono"
                        type = "text"
                        value = {telefono}
                        onChange={({target}) => {
                            setTelefono(target.value)
                            setTelefonoError("")}}
                    />
                    {telefonoError && <p className="error-message">{telefonoError}</p>}
                </label>

                <label>
                    e-mail  
                    <input placeholder="ingrese una dirección de email" className="email"
                        type = "text"
                        value = {email}
                        onChange={({target}) => {
                            setEmail(target.value)
                            setEmailError("")}}
                    />
                    {emailError && <p className="error-message">{emailError}</p>}
                </label>
                <div>
                    <button type = "submit">Crear Orden</button>
                </div>
            </form>
        </div>
    )
}


export default CheckoutForm;