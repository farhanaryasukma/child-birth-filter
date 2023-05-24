import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import Filter from "./components/Filters";
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

  const handleFilterChange = (propValue) => {
    // Do something with the prop value received from the child component
    setUser(propValue.filterUser);
  };
  return (
    <div className="App">
      <div className="container">
        <Filter onPropChange={handleFilterChange} />
      <div className="container border border-primary">
      </div>
        <Table user={user} />
      </div>
    </div>
  );
}

export default App;
