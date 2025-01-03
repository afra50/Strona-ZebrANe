import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/Contact_form.scss";

const Contact_form = () => {
    const initialValues = {
      fullName: "",
      email: "",
      phone: "",
      question: "",
    };
  
    const validationSchema = Yup.object({
      fullName: Yup.string()
        .required("Imię i nazwisko jest wymagane")
        .min(3, "Imię i nazwisko musi mieć co najmniej 3 znaki"),
      email: Yup.string()
        .email("Niepoprawny adres email")
        .required("Email jest wymagany"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Numer telefonu może zawierać tylko cyfry")
        .min(9, "Numer telefonu musi mieć co najmniej 9 cyfr")
        .required("Numer telefonu jest wymagany"),
      question: Yup.string()
        .required("Proszę wpisać treść pytania")
        .min(10, "Pytanie musi mieć co najmniej 10 znaków"),
    });
  
    const onSubmit = (values, { resetForm }) => {
      console.log("Form data", values);
      alert("Formularz został wysłany!");
      resetForm();
    };
  
    return (
      <div className="contact_form_container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="contact_form">
              <div className="form_group">
                <Field type="text" id="fullName" name="fullName" placeholder="* Imię i nazwisko"/>
                <ErrorMessage name="fullName" component="div" className="error" />
              </div>
  
              <div className="form_row">
                <div className="form_group">
                  <Field type="email" id="email" name="email" placeholder="* Adres e-mail"/>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
  
                <div className="form_group">
                  <Field type="text" id="phone" name="phone" placeholder="* Numer telefonu"/>
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
  
              <div className="form_group">
                <Field
                  as="textarea"
                  id="question"
                  name="question"
                  rows="4"
                  className="textarea"
                  placeholder="* Treść wiadomosci"
                />
                <ErrorMessage
                  name="question"
                  component="div"
                  className="error"
                />
              </div>
  
              <div className="form_group checkbox">
                <Field type="checkbox" id="policy" name="policy" required />
                <label htmlFor="policy">
                  Oświadczam, że zapoznałem/am się z{" "}
                  <a href="/polityka_prywatnosci.pdf">Polityką Prywatności</a>.
                </label>
              </div>

              <div className="button">
                  <button type="submit" disabled={isSubmitting}>
                    Wyślij wiadomość
                  </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  };
  
  export default Contact_form;