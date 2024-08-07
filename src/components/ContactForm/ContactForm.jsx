import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too Long!")
    .matches(phoneRegExp, "Invalid phone number")
    .required("Required"),
});

const ContactForm = ({ submitHandler }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={validationSchema}
    >
      <Form className={css.formContainer}>
        <label className={css.label}>
          Name <br />
          <Field type="text" name="name" />
        </label>
        <ErrorMessage className={css.error} name="name" component="span" />

        <label className={css.label}>
          Number <br />
          <Field type="text" name="number" />
        </label>
        <ErrorMessage className={css.error} name="number" component="span" />

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
