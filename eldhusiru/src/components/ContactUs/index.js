import React from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const ContactUs = () => {

    const { t } = useTranslation();

    const SERVICE_ID = "service_9m0nylf";
    const TEMPLATE_ID = "template_djr75os";
    const USER_ID = "6IvRmXwrdvAQ55kMg";

    const onSubmit = (e) => {

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
        <div id="contact-us" className="flex flex-row justify-center max-w-screen-xl mx-auto relative">
            <div className='md:w-8/12 w-full bg-main rounded-2xl h-auto'>
                <h2 className="text-center mt-6 text-white">{t('contact-header')}</h2>
                <form onSubmit={onSubmit}>
                    <div className="md:mb-6 mt-6 flex flex-col items-center md:flex-row justify-between">
                        <div className='w-10/12 md:w-5/12 md:ml-12'>
                            <label className="label md:mb-2" for="name">
                                {t('contact-name')}
                            </label>
                            <input 
                                className="contactus-input" 
                                id="form-input-control-last-name" 
                                name='user_name'
                                type="text"
                                required
                                />
                        </div>
                        <div className='w-10/12 md:w-5/12 md:mr-12'>
                            <label className="label md:mb-2" for="email">
                                {t('contact-email')}
                            </label>
                            <input 
                                className="contactus-input" 
                                id="form-input-control-email" 
                                name='user_email'
                                type="text"
                                required
                                />
                        </div>
                    </div>
                    <div className="mt-3 md:mt-0 mb-10 flex flex-row justify-center h-24">
                        <div className='w-10/12 md:w-11/12 md:mr-12 md:ml-12 md:h-full'>
                            <label className="label md:mb-2" for="message">
                                {t('contact-message')}
                            </label>
                            <textarea 
                                className="contactus-textarea" 
                                id='form-textarea-control-opinion'
                                name='user_message'
                                type="text"
                                required
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex items-center justify-center pt-5 pb-5">
                        <button 
                            className="w-5/12 md:w-3/12 bg-main border border-white hover:bg-red-700 text-white hover:text-main text-lg md:text-xl font-medium py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline duration-300 ease-in-out" 
                            type="submit"
                            >{t('contact-submit')}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;