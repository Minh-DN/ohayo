import { ErrorMessage, Field, Form, Formik } from 'formik'
import { motion } from "framer-motion";
import * as Yup from "yup"

import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from '@/shared/HText'
import { Pages } from '@/shared/types'

type Props = {
  setSelectedPage: (page: Pages) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {

  const MessageSchema = Yup.object().shape({
    name: Yup.string()
      .required('Required'),
    email: Yup.string()
      .required('Required')
      .email('Invalid email'),
    message: Yup.string()
      .required('Required')
  });

  const inputStyles = `mt-5 w-full rounded-lg bg-primary-300
    px-5 py-3 placeholder-white`;

  return (
    <section
      id={`${Pages.ContactUs}`}
      className='min-h-full py-24 mx-auto w-5/6'
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(Pages.ContactUs)}
      >
        {/* TITLE AND DESCRIPTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className='text-primary-500'>JOIN NOW {' '}</span>
            TO START YOUR JAPANESE LEARNING JOURNEY
          </HText>
          <p className='my-5 text-sm md:w-2/3'>
            Let Ohayo be your gateway to discovering the beauty of Japanese language and culture,
            all within a fun and supportive community of learners. Reach out now to start your path to
            mastering Japanese with our dedicated team of instructors and immersive resources.
          </p>
        </motion.div>

        {/* FORM AND GRAPHIC */}
        <motion.div 
          className='md:flex justify-between'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {/* FORM */}
          <Formik
            initialValues={{
              name: '',
              email: '',
              message: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400)
            }}
            validationSchema={MessageSchema}
          >
            {({ isSubmitting }) => (
              <Form className='flex flex-col gap-1 mt-6 md:w-3/5'>
                <Field
                  type="name"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className={inputStyles}
                />
                <ErrorMessage name="name" component="div" />

                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Email'
                  className={inputStyles}
                />
                <ErrorMessage name="email" component="div" />

                <Field
                  id='message'
                  name='message'
                  rows={4}
                  cols={50}
                  placeholder='Message'
                  component='textarea'
                  className={inputStyles}
                />
                <ErrorMessage name="message" component="div" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 mb-10 text-center w-1/3 rounded-lg bg-secondary-500 py-3 transition duration-300 hover:text-white"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>

          {/* TODO: GRAPHIC */}
          <motion.div 
            className='relative md:w-1/4 md:mr-8'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className='before:absolute before:-bottom-40 before:-right-10 before:z-[-1] md:before:content-shadowText'>
              <img
                src={ContactUsPageGraphic}
                alt="contact-us-graphic"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ContactUs