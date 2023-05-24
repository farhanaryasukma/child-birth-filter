import { useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";


export default function Filter({onPropChange}) {
  const handleReset = (resetForm) => {
    resetForm(); // Reset the form values
  };
 
  return (
    <div className="mb-5 border pb-5 ps-4 pe-4">
      <h1>Filter</h1>
      
    <Formik
      initialValues={{
        gender: [],
        condition:[],
        motherAge: [],
        method: [],
        labourRange: [],
        startDate: new Date(),
        endDate: new Date()
      }}
      
      onSubmit={async (values) => {
        try {
          // console.log(values)
          const response = await axios.get('http://localhost:3001/user', {
            params: {
              gender: values.gender,
              condition: values.condition,
              motherAge: values.motherAge,
              method: values.method,
              labourRange: values.labourRange,
              startDate: values.startDate,
              endDate: values.endDate
            }
          });
          // console.log('API response:', response.data);
          const dataFiltered = response.data;
          onPropChange(dataFiltered)

        } catch (err) {
          console.log(err)
        }
      }}
    >
      {({ values, resetForm, setFieldValue }) => (
        <Form>
      <h5 className="justify-content-center ">date picker</h5>
      <div className="d-flex justify-content-center">
        <p>start</p>
        <DatePicker
          selected={values.startDate}
          onChange={(date) => setFieldValue('startDate', date)}
          selectsStart
          startDate={values.startDate}
          endDate={values.endDate}
          showYearDropdown={true}
          showMonthDropdown={true}
          scrollableYearDropdown={true}
        />
        <h6>until</h6>
        <DatePicker
          selected={values.endDate}
          onChange={(dateEnd) => setFieldValue('endDate', dateEnd)}
          selectsEnd
          startDate={values.startDate}
          endDate={values.endDate}
          minDate={values.startDate}
          showYearDropdown={true}
          showMonthDropdown={true}
          scrollableYearDropdown={true}
        />
      </div>
          <div className="mb-3 d-flex flex-column" role="group">
            <h6>Baby's Gender</h6>
            <label>
              <Field type="checkbox" name="gender" value="boy" />
              boy
            </label>
            <label>
              <Field type="checkbox" name="gender" value="girl" />
              girl
            </label>
          </div>
          <div role="group" className="mb-3 d-flex flex-column">
            <h6>Birth condition</h6>
            <label>
              <Field type="checkbox" name="condition" value="healthy" />
              healthy
            </label>
            <label>
              <Field type="checkbox" name="condition" value="disabled" />
              disabled
            </label>
            <label>
              <Field type="checkbox" name="condition" value="stillborn" />
              stillborn
            </label>
          </div>
          <div role="group" className="mother-age mb-3 d-flex flex-column">
            <h6>Mother Age</h6>
            <label>
              <Field type="checkbox" name="motherAge" value="below-20" />
              Below 20
            </label>
            <label>
              <Field type="checkbox" name="motherAge" value="20-24" />
              20 - 24
            </label>
            <label>
              <Field type="checkbox" name="motherAge" value="25-29" />
              25-29
            </label>
            <label>
              <Field type="checkbox" name="motherAge" value="30-34" />
              30-34
            </label>
            <label>
              <Field type="checkbox" name="motherAge" value="above-35" />
              Above 35
            </label>
          </div>
          <div role="group" className="childbirth-method mb-3 d-flex flex-column">
            <h6>Birth method</h6>
            <label>
              <Field type="checkbox" name="method" value="normal" />
              normal
            </label>
            <label>
              <Field type="checkbox" name="method" value="with support" />
              with support
            </label>
            <label>
              <Field type="checkbox" name="method" value="c-section" />
              c-section
            </label>
            <label>
              <Field type="checkbox" name="method" value="waterbirth" />
              waterbirth
            </label>
          </div>
          <div role="group" className="labour-range mb-3 d-flex flex-column">
            <h6>Labour range</h6>
            <label>
              <Field type="checkbox" name="labourRange" value="fullTerm" />
              full-term labour
            </label>
            <label>
              <Field type="checkbox" name="labourRange" value="preTerm" />
              pre-term labour
            </label>
            <label>
              <Field type="checkbox" name="labourRange" value="postTerm" />
              post-term labour
            </label>
          </div>
          <button className="btn btn-primary" type="submit">set filter</button>
          <button className="btn btn-danger" type="button" onClick={() => handleReset(resetForm)}>Reset Filter</button>
        </Form>
      )}
    </Formik>
  </div>
  );
}
