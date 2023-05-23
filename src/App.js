import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import DatePicker from "./components/DatePicker";
import Filter from "./components/Filters";
import ResetButton from "./components/ResetButton";
import FilterButton from "./components/FilterButton"
import Table from "./components/Table"

import { useEffect, useState } from "react";

function App() {
  const [user, setUser] =useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/allUser');
        setUser(response.data.allUser);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <Filter />
        {/* <DatePicker /> */}
      <div className="container border border-primary">
      </div>
        <Table user={user} />
      </div>
    </div>
  );
}

export default App;
