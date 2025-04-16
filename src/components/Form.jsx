import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';

const Form = () => {
  const formRef = useRef();
  const [emailError, setEmailError] = useState("");

  const isValidEmail = (email) => {
    // Validación básica de formato de email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const emailValue = formRef.current.reply_to.value;


    if (!isValidEmail(emailValue)) {
      setEmailError("Por favor ingrese un correo válido.");
      return;
    }

    setEmailError("");

    emailjs
      .sendForm(
        'service_verona_test',       // Tu service ID
        'template_yz05bv8',          // Tu template ID
        formRef.current,
        '_VOIAfIElSSnwR3W-'          // Tu public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje enviado con éxito!");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Error al enviar el mensaje.");
        }
      );
  };

  return (
    <div className="max-w-[1000px] max-h-[500px] w-full mx-auto bg-[#0d1b2a]/85 rounded-lg shadow-md p-4">
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block mb-2 text-gray-50" htmlFor="name">Nombre:</label>
          <input
            name="name"
            placeholder="Nombre"
            className="w-full p-2 border-b-2 border-blue-500 bg-transparent outline-none focus:border-blue-300"
            type="text"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-gray-50" htmlFor="reply_to">Correo Electrónico:</label>
          <input
            name="reply_to"
            id="reply_to"
            placeholder="Correo Electrónico"
            className="w-full p-2 border-b-2 border-blue-500 bg-transparent outline-none focus:border-blue-300"
            type="email"
          />
          {emailError && <p className="text-red-400 text-sm mt-1">{emailError}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-gray-50" htmlFor="message">Mensaje:</label>
          <textarea
            name="message"
            id="message"
            placeholder="Escriba aquí su mensaje"
            className="w-full p-2 border-b-2 resize-none border-blue-500 bg-transparent outline-none focus:border-blue-300"
            rows="4"
            maxLength={500}
          ></textarea>
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold p-2 rounded transition-all hover:bg-blue-700"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
