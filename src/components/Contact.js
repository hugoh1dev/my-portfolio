import React, { useRef } from 'react';
// icons
import { FaTelegramPlane } from 'react-icons/fa';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// EmailJS
import emailjs from 'emailjs-com';
// Material-UI
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  const form = useRef();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault(); // Prevents page reload

    emailjs.sendForm(
      'service_h7wr6ig',  // Replace with your EmailJS Service ID
      'template_9tlicya', // Replace with your EmailJS Template ID
      form.current,  // Pass the form reference directly
      'xyl4ZhJgXDpetrymE' // Replace with your EmailJS public key
    )
    .then(response => {
      console.log('Email sent successfully!', response.status, response.text);
      form.current.reset(); // Clears form after submission
      handleClick(); // Open snackbar
    })
    .catch(error => {
      console.error('Error sending email:', error);
      alert('There was an error sending the email. Please try again later.');
    });
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br/> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form 
            ref={form} // Assigns the ref to the form
            onSubmit={sendEmail} // Adds the submit event
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              type='text'
              placeholder='Your name'
              name='from_name'
            />
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              type='email'
              placeholder='Your email'
              name='reply_to'
            />
            <textarea
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Your message'
              name='message'
            ></textarea>
            <button type='submit' className='btn btn-lg flex items-center justify-center gap-3'>
              Send message
              <FaTelegramPlane size={22} />
            </button>
          </motion.form>
        </div>
        <Snackbar 
          open={open} 
          autoHideDuration={6000} 
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Positioning the snackbar at the top-right
        >
          <Alert onClose={handleClose} severity="success">
            Email sent successfully!
          </Alert>
        </Snackbar>
      </div>
    </section>
  );
};

export default Contact;
