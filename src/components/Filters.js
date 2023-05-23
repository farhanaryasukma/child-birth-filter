import { useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

export default function Filter() {

  return (
    <div>
    <Formik
      initialValues={{
        gender: [],
        condition:[],
        motherAge: [],
        method: [],
        labourRange: []
      }}
      onSubmit={async (values) => {
        try {
          const response = await axios.get('/user', {
            params: {
              gender: values.gender,
              condition: values.condition,
              motherAge: values.motherAge,
              method: values.method,
              labourRange: values.labourRange
            }
          });
        } catch (err) {
          console.log(err)
        }
      }}
    >
      {({ values }) => (
        <Form>
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
              <Field type="checkbox" name="motherAge" value="30-35" />
              30-35
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
        </Form>
      )}
    </Formik>
  </div>
  );
}
