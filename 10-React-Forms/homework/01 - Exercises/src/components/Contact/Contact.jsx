import React from "react";
import "./Contact.modules.css";

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


export function validate(inputs){

  const errors ={};

  if (!inputs.name){
    errors.name = "Se requiere un nombre"
  }
  if(!regexEmail.test(inputs.email)){
    errors.email = "Debe ser un correo electrónico"
  }
  if(inputs.phone < 0){
    errors.phone="Sólo números positivos"
  }
  if(!inputs.subject){
    errors.subject="Se requiere un asunto"
  }
  if(!inputs.message){
    errors.message="Se requiere un mensaje"
  }
  return errors;
}

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    phone: 0,
    subject: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e)=>{
    e.preventDefault()

    const jueputa = Object.entries(errors);

    if(jueputa.length===0){
      alert("Datos completos")
      setInputs({name:"",email:"",phone:0,subject:"",message:""})
      setErrors(validate(errors));
    } alert("Debes corregir los errores")

  }


  const handleChange = (e) => {
    setInputs({...inputs,[e.target.name]: e.target.value});

    setErrors(validate({...inputs,[e.target.name]: e.target.value,}));
  };



  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          className={errors.name&&"warning"}
          value={inputs.name}
          name="name"
          placeholder="Escribe tu nombre..."
          type="text"
          onChange={handleChange}
        ></input>
        <p className='danger'>{errors.name}</p>
        <label>Correo Electrónico:</label>
        <input
          className={errors.email&&"warning"}
          value={inputs.email}
          type="text"
          name="email"
          placeholder="Escribe tu email..."
          onChange={handleChange}
        />
        <p className='danger'>{errors.email}</p>
        <label>Teléfono:</label>
        <input
          className={errors.phone&&"warning"}
          value={inputs.phone}
          type="number"
          name="phone"
          placeholder="Escribe un teléfono..."
          onChange={handleChange}
        />
        <p className='danger'>{errors.phone}</p>
        <label>Asunto:</label>
        <input
          className={errors.subject&&"warning"}
          value={inputs.subject}
          type="text"
          name="subject"
          placeholder="Escribe el asunto..."
          onChange={handleChange}
        />
        <p className='danger'>{errors.subject}</p>
        <label>Mensaje:</label>
        <textarea
          className={errors.message&&"warning"}
          value={inputs.message}
          name="message"
          placeholder="Escribe tu mensaje..."
          type="text"
          onChange={handleChange}
        ></textarea>
        <p className='danger'>{errors.message}</p>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
