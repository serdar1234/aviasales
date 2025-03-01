export default function filterBySort(ticketsArray, filter) {
  if (filter === "cheap") {
    return ticketsArray.toSorted((a, b) => {
      return a.price - b.price;
    });
  }
  if (filter === "fast") {
    return ticketsArray.toSorted((a, b) => {
      return a.segments[0].duration - b.segments[0].duration;
    });
  }
  if (filter === "optimal") {
    return ticketsArray.toSorted((a, b) => {
      // Логика: за каждую лишнюю минуту в полете турист теряет 15р. счастья под солнцем
      return (
        a.price +
        a.segments[0].duration * 15 -
        b.price -
        b.segments[0].duration * 15
      );
    });
  }
}
