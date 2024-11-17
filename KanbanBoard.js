import React from "react";
import KanbanColumn from "./KanbanColumn";

const groupTickets = (tickets, groupBy) => {
  switch (groupBy) {
    case "status":
      return tickets.reduce((acc, ticket) => {
        const status = ticket.status || "No Status";
        acc[status] = acc[status] || [];
        acc[status].push(ticket);
        return acc;
      }, {});
    case "user":
      return tickets.reduce((acc, ticket) => {
        const user = ticket.user?.name || "Unassigned";
        acc[user] = acc[user] || [];
        acc[user].push(ticket);
        return acc;
      }, {});
    case "priority":
      return tickets.reduce((acc, ticket) => {
        const priority = ["No priority", "Low", "Medium", "High", "Urgent"][ticket.priority] || "No priority";
        acc[priority] = acc[priority] || [];
        acc[priority].push(ticket);
        return acc;
      }, {});
    default:
      return {};
  }
};

const KanbanBoard = ({ tickets, groupBy, sortBy }) => {
  const groupedTickets = groupTickets(tickets, groupBy);
  const sortedKeys = Object.keys(groupedTickets).sort();

  return (
    <div className="kanban-board">
      {sortedKeys.map((key) => (
        <KanbanColumn key={key} title={key} tickets={groupedTickets[key]} sortBy={sortBy} />
      ))}
    </div>
  );
};

export default KanbanBoard;