import React, { useState, useEffect } from "react";
import KanbanBoard from "./components/KanbanBoard";
import Controls from "./components/Controls";
import { fetchData } from "./api";
import "./App.css";

const App = () => {
  // State declarations
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState("status"); // Correctly declared
  const [sortBy, setSortBy] = useState("priority");

  // Fetch data using useEffect
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setTickets(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="app">
      <Controls
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <KanbanBoard
        tickets={tickets}
        groupBy={groupBy}
        sortBy={sortBy}
      />
    </div>
  );
};

export default App;