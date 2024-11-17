import React from "react";

const KanbanCard = ({ ticket }) => {
  return (
    <div className="kanban-card">
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p><strong>User:</strong> {ticket.user?.name || "Unassigned"}</p>
      <p><strong>Priority:</strong> {["No priority", "Low", "Medium", "High", "Urgent"][ticket.priority]}</p>
    </div>
  );
};

export default KanbanCard;