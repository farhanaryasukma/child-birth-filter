import React, { useRef, useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Filter({ onPropChange, ref }) {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const handleReset = (resetForm) => {
    resetForm(); // Reset the form values
  };

  return (
    <>
      <Button onClick={openDrawer} className="m-5">
        Open Filter
      </Button>
      <Drawer
        overlay={false}
        open={open}
        onClose={closeDrawer}
        className="p-2 border-2 drop-shadow-lg overflow-auto"
      >
        <div className="mb-2">
          <div className="mb-2 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Filters
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <XMarkIcon strokeWidth={2} className="h-5 w-5" />
            </IconButton>
          </div>
          <Formik
            initialValues={{
              gender: [],
              condition: [],
              motherAge: [],
              method: [],
              labourRange: [],
              startDate: new Date(),
              endDate: new Date(),
            }}
            onSubmit={async (values) => {
              try {
                // console.log(values)
                const response = await axios.get("http://localhost:3001/user", {
                  params: {
                    gender: values.gender,
                    condition: values.condition,
                    motherAge: values.motherAge,
                    method: values.method,
                    labourRange: values.labourRange,
                    startDate: values.startDate,
                    endDate: values.endDate,
                  },
                });
                // console.log('API response:', response.data);
                const dataFiltered = response.data;
                onPropChange(dataFiltered);
              } catch (err) {
                console.log(err);
              }
            }}
          >
            {({ values, resetForm, setFieldValue }) => (
              <Form className="text-sm">
                <div className="">
                  <h5 className="justify-content-center mb-1 font-bold">
                    date picker
                  </h5>
                  <div className="flex-col">
                    <p className="mb-1">start:</p>
                    <DatePicker
                      className=" mb-2 cursor-pointer border-2 border-blue-gray-500"
                      selected={values.startDate}
                      onChange={(date) => setFieldValue("startDate", date)}
                      selectsStart
                      startDate={values.startDate}
                      endDate={values.endDate}
                      showYearDropdown={true}
                      showMonthDropdown={true}
                      scrollableYearDropdown={true}
                    />
                    <h6 className="mb-1">until:</h6>
                    <DatePicker
                      className="cursor-pointer border-2 border-blue-gray-500"
                      selected={values.endDate}
                      onChange={(dateEnd) => setFieldValue("endDate", dateEnd)}
                      selectsEnd
                      startDate={values.startDate}
                      endDate={values.endDate}
                      minDate={values.startDate}
                      showYearDropdown={true}
                      showMonthDropdown={true}
                      scrollableYearDropdown={true}
                    />
                  </div>
                </div>
                <div className="mb-3 flex-col flex gap-1">
                  <h6 className="mt-5 font-bold">Baby's Gender</h6>
                  <label>
                    <Field type="checkbox" name="gender" value="boy" />
                    boy
                  </label>
                  <label>
                    <Field type="checkbox" name="gender" value="girl" />
                    girl
                  </label>
                </div>
                <div role="group" className="mb-3 flex flex-col gap-1">
                    <h6 className="font-bold">Birth condition</h6>
                    <label>
                      <Field type="checkbox" name="condition" value="healthy" />
                      healthy
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="condition"
                        value="disabled"
                      />
                      disabled
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="condition"
                        value="stillborn"
                      />
                      stillborn
                    </label>
                </div>
                <div role="group" className="mother-age mb-3 flex flex-col gap-1">
                  <h6 className="font-bold">Mother Age</h6>
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
                <div
                  role="group"
                  className="childbirth-method mb-3 flex flex-col gap-1"
                >
                  <h6 className="font-bold">Birth method</h6>
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
                <div
                  role="group"
                  className="labour-range mb-3 flex flex-col gap-1"
                >
                  <h6 className="font-bold">Labour range</h6>
                  <label>
                    <Field
                      type="checkbox"
                      name="labourRange"
                      value="fullTerm"
                    />
                    full-term labour
                  </label>
                  <label>
                    <Field type="checkbox" name="labourRange" value="preTerm" />
                    pre-term labour
                  </label>
                  <label>
                    <Field
                      type="checkbox"
                      name="labourRange"
                      value="postTerm"
                    />
                    post-term labour
                  </label>
                </div>
                <Button className="btn btn-primary mr-2" type="submit">
                  set filter
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => handleReset(resetForm)}
                >
                  Reset Filter
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Drawer>
    </>
  );
}
