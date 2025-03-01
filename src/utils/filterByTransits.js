import filterBySort from "./filterBySort";

export default function filterByTransits(tickets, transitCheckboxes, filter) {
  const ticketsArray = filterBySort(tickets, filter);

  if (transitCheckboxes.every((val) => val === true)) return ticketsArray;
  if (transitCheckboxes.every((val) => val !== true)) return null;

  return ticketsArray.slice().filter((ticket) => {
    const transits = ticket.segments[0].stops.length;
    return transitCheckboxes[transits] === true;
  });
}
