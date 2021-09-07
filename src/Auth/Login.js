import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const SignupSchema = yup.object().shape({
   password: yup.string().required('Required'),
   email: yup.string().email('Invalid email').required('Required'),
 });

const Login = (ceva) => (
   <div>
     <Formik
       initialValues={{ email: '', password: '' }}
       validationSchema={SignupSchema}
       onSubmit={(values, { setSubmitting }) => {
         ceva.onClick(values.email, values.password);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
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

 export default Login;
