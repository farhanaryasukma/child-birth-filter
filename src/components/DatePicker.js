import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import axios from "axios";

export default function CalendarPicker(onPropChange) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handeClick = () => {
    axios.post("http://localhost:3001/filter", {
      startDate: startDate,
      endDate: endDate
    })
  }
  return (
    <div className="container">
      <h5 className="justify-content-center ">date picker</h5>
      <div className="d-flex justify-content-center">
        <p>start</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          showYearDropdown={true}
          showMonthDropdown={true}
          scrollableYearDropdown={true}
        />
        <h6>until</h6>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          showYearDropdown={true}
          showMonthDropdown={true}
          scrollableYearDropdown={true}
        />
      </div>
      <button onClick={handeClick}>go</button>
    </div>
  );
}
