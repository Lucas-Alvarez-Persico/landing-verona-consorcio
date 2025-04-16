import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Form = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_verona_test', // reemplazá con tu Service ID
        'template_yz05bv8', // reemplazá con tu Template ID
        formRef.current,
        '_VOIAfIElSSnwR3W-'   // reemplazá con tu Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje enviado con éxito!");
        },
        (error) => {
          console.log(error.text);
          alert("Error al enviar el mensaje.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="max-w-[1000px] max-h-[500px] w-full mx-auto bg-[#0d1b2a]/85 rounded-lg shadow-md p-4">
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block mb-2 text-gray-50" htmlFor="name"> Nombre: </label>
          <input
            name="name"
            placeholder="Nombre"
            className="w-full p-2 border-b-2 border-blue-500 bg-transparent outline-none focus:border-b-2 focus:border-blue-300"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-50" htmlFor="email"> Email: </label>
          <input
            placeholder="Correo Electrónico"
            className="w-full p-2 border-b-2 border-blue-500 bg-transparent outline-none focus:border-b-2 focus:border-blue-300"
            name="email"
            id="email"
            type="email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-50" htmlFor="message"> Mensaje: </label>
          <textarea
            placeholder="Escriba aquí su mensaje"
            className="w-full p-2 border-b-2 resize-none border-blue-500 bg-transparent outline-none focus:border-b-2 focus:border-blue-300"
            maxLength={500}
            rows="4"
            name="message"
            id="message"
          ></textarea>
        </div>
        <div className="mb-4">
          <button
            className="w-full bg-blue-500 text-white font-semibold p-2 rounded transition-all hover:bg-blue-700"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
