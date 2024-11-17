import React from "react";
import KanbanCard from "./KanbanCard";

const sortTickets = (tickets, sortBy) => {
  return [...tickets].sort((a, b) => {
    if (sortBy === "priority") {
      return b.priority - a.priority;
    }
    return a.title.localeCompare(b.title);
  });
};

const KanbanColumn = ({ title, tickets, sortBy }) => {
  const sortedTickets = sortTickets(tickets, sortBy);

  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      {sortedTickets.map((ticket) => (
        <KanbanCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default KanbanColumn;