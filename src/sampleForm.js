import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";

const SampleForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .trim()
        .matches(/^[aA-zZ\s]+$/, "Enter a valid first name.")
        .required("First name is required."),
      zipCode: Yup.string()
        .trim()
        .matches(/(^\d{5}$)|(^\d{5}-\d{4}$)/, "Enter a valid ZIP Code.")
        .required("A valid ZIP Code is required."),
      /* CA Regex would be /^[ABCEGHJ-NPRSTVXY][0-9][ABCEGHJ-NPRSTV-Z] ?[0-9][ABCEGHJ-NPRSTV-Z][0-9]$/ */
      city: Yup.string().trim().required("City is required."),
      email: Yup.string()
        .email("Enter a valid email address.")
        .required("Email address is required."),
      confirmEmail: Yup.string().oneOf(
        [Yup.ref("email"), null],
        "Email addresses do not match."
      ),
      phoneNumber: Yup.string()
        .trim()
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Enter a valid 10-digit phone number."
        )
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="zipCode">Zip Code</label>
        <input
          id="zipCode"
          name="zipCode"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.zipCode}
        />
        {formik.touched.zipCode && formik.errors.zipCode ? (
          <div>{formik.errors.zipCode}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        />
        {formik.touched.city && formik.errors.city ? (
          <div>{formik.errors.city}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="email">Confirm Email Address</label>
        <input
          id="confirmEmail"
          name="confirmEmail"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmEmail}
        />
        {formik.touched.confirmEmail && formik.errors.confirmEmail ? (
          <div>{formik.errors.confirmEmail}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="email">Phone Number</label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div>{formik.errors.phoneNumber}</div>
        ) : null}
      </div>

      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default SampleForm;
