import axios from "axios";

import Filter from "./components/Filters";
import Table from "./components/Table";

import { useEffect, useState, useRef } from "react";

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/allUser");
        setUser(response.data.allUser);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const handleFilterChange = (propValue) => {
    // Do something with the prop value received from the child component
    setUser(propValue.filterUser);
  };
  return (
    <div className="max-w-screen-2xl overflow-auto mx-auto">
        <Filter onPropChange={handleFilterChange}  />
      <div className="w-full mx-auto">
        <div className="container border border-primary"></div>
        <Table user={user} />
      </div>
    </div>
  );
}

export default App;
