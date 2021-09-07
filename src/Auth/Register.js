import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const Register = (ceva) => (
   <div>
     <Formik
       initialValues={{ email: '', password: '' , firstName : '', lastName : ''}}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         ceva.onClick(values.firstName, values.lastName, values.email, values.password);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <label htmlFor="firstName">firstName</label>
           <Field type="firstName" name="firstName" />
           <ErrorMessage name="firstName" component="div" />

           <label htmlFor="lastName">lastName</label>
           <Field type="lastName" name="lastName" />
           <ErrorMessage name="lastName" component="div" />

           <label htmlFor="email">Email Address</label>
           <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />

           <label htmlFor="password">Password </label>
           <Field type="password" name="password" />
           <ErrorMessage name="password" component="div" />

           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
 );

 export default Register;
