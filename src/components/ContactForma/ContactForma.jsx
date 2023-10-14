import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { FormContainer } from './ContactForm.styled';
import styles from './ContactForma.module.css'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number().min(2, 'Too Short!').required('Required'),
});

export const ContactForma = ({ onAdd }) => {
  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <Form>
          <div className={styles.container}>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Alex Repeta" />
            <ErrorMessage name="name" />
          </div>
          <div className={styles.container}>
            <label htmlFor="number">Number</label>
            <Field
              type="tel"
              id="number"
              name="number"
              placeholder="+380-XX-XXX-XX-XX"
            />
            <ErrorMessage name="number" />
          </div>

          <button type="submit" className="btn main-btn">
            Add contact
          </button>
        </Form>
      </Formik>
   </div>
  );
};