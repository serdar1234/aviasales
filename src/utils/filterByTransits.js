export default function filterTicketsByTransits(
  ticketsArray,
  transitCheckboxes,
) {
  if (transitCheckboxes.every((val) => val === true)) return ticketsArray;
  if (transitCheckboxes.every((val) => val !== true)) return null;

  return ticketsArray.filter((ticket) => {
    const transits = ticket.segments[0].stops.length;
    return transitCheckboxes[transits] === true;
  });
}
