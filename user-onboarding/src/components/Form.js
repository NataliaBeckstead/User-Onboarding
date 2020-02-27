import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";

const OnboardForm = ({ values, errors, touched, status }) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        status && setUser(user => [...user, status]);
    }, [status]);
    return (
        <div>
            <Form>
                <label htmlFor="name">Name: 
                <Field
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                {touched.name && errors.name && (
                    <p className="errors">{errors.name}</p>
                )}
                </label>
                <label htmlFor="email">email: 
                <Field
                    id="email"
                    type="text"
                    name="email"
                    placeholder="your@email.here"
                />
                {touched.email && errors.email && (
                    <p className="errors">{errors.email}</p>
                )}
                </label>
                <label htmlFor="password">Password: 
                <Field
                    id="password"
                    type="text"
                    name="password"
                    placeholder="password"
                />
                {touched.password && errors.password && (
                    <p className="errors">{errors.password}</p>
                )}
                </label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <label>
                <Field
                    type="checkbox"
                    name="terms"
                    checked={values.terms}
                />
                {touched.terms && errors.terms && (
                    <p className="errors">{errors.terms}</p>
                )}
                I have read and agree with Terms and Conditions</label>
                <button type="submit">Submit</button>
            </Form>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre> */}
        </div>
    );
};

const FormikOnboardForm = withFormik({
    mapPropsToValues(props) {
        return {
            name: props.name || "",
            email: props.email || "",
            password: props.password || "",
            terms: props.terms || false
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Add your name"),
        email: Yup.string().required("Add your email"),
        password: Yup.string().required("password required"),
        terms: Yup.bool().oneOf([true], "Must agree to terms and conditions")
    }),
    handleSubmit(values, { setStatus, resetForm }) {
        axios
          .post("https://reqres.in/api/users/", values)
          .then(res => {
            console.log("success", res);
            setStatus(res.data);
            resetForm();
          })
          .catch(err => console.log(err.response));
    }
})(OnboardForm);


export default FormikOnboardForm;