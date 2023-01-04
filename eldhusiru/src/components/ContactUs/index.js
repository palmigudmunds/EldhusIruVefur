import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const ContactUs = () => {

    const SERVICE_ID = "service_9m0nylf";
    const TEMPLATE_ID = "template_djr75os";
    const USER_ID = "6IvRmXwrdvAQ55kMg";

    const onSubmit = (e) => {
        // e.preventDefault()
        // setFormStatus('Fyrirspurn sent')
        // const { user_name, user_email, user_message } = e.target.elements
        // let conFom = {
        //     user_name: user_name.value,
        //     user_email: user_email.value,
        //     user_message: user_message.value,
        // }
        // console.log(conFom)
        e.preventDefault();
        console.log(e.target)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Fyrirspurn send'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Eitthvað fór úrskeiðis, prófaðu aftur',
              text: error.text,
            })
          });
        e.target.reset()
    }
    
    return (
        <div id="HafaSamband" className="flex flex-row justify-center max-w-screen-xl mx-auto relative">
            <div className='md:w-8/12 w-full bg-main rounded-3xl h-96 mb-6'>
                <h4 className="text-center mt-6">Hafa samband</h4>
                <form onSubmit={onSubmit}>
                    <div className="md:mb-6 mt-4 flex flex-col items-center md:flex-row justify-between">
                        <div className='w-10/12 md:w-5/12 md:ml-12'>
                            <label className="label md:mb-2" for="name">
                                Nafn
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full mb-3 md:mb-0 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500" 
                                id="form-input-control-last-name" 
                                name='user_name'
                                type="text"
                                required
                                />
                        </div>
                        <div className='w-10/12 md:w-5/12 md:mr-12'>
                            <label className="label md:mb-2" for="email">
                                Netfang
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500" 
                                id="form-input-control-email" 
                                name='user_email'
                                type="text"
                                required
                                />
                        </div>
                    </div>
                    <div className="mt-3 md:mt-0 md:mb-6 flex flex-row justify-center h-16 md:h-24">
                        <div className='w-10/12 md:w-11/12 md:mr-12 md:ml-12 md:h-full'>
                            <label className="label md:mb-2" for="message">
                                Skilaboð
                            </label>
                            <textarea 
                                className="block shadow appearance-none h-full border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500" 
                                id='form-textarea-control-opinion'
                                name='user_message'
                                type="text"
                                required
                            ></textarea>
                        </div>
                    </div>
                    <div className="mt-10 md:mt-14 flex items-center justify-center">
                        <button 
                            className="w-5/12 md:w-3/12 bg-main border border-white hover:bg-white text-white hover:text-main text-xl py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline duration-100 ease-in-out" 
                            type="submit"
                            >Senda</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;