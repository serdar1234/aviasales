export const showDeparturesTimes = (timeString, duration) => {
  const date = new Date(timeString);
  const depHours =
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const depMinutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const durationInMilliseconds = duration * 60 * 1000;
  const arrivalDate = new Date(date.getTime() + durationInMilliseconds);
  const arrHours =
    arrivalDate.getHours() < 10
      ? "0" + arrivalDate.getHours()
      : arrivalDate.getHours();
  const arrMinutes =
    arrivalDate.getMinutes() < 10
      ? "0" + arrivalDate.getMinutes()
      : arrivalDate.getMinutes();

  return depHours + ":" + depMinutes + " - " + arrHours + ":" + arrMinutes;
};

export const durationInHoursMinutes = (duration) => {
  const res = duration % 60;
  const minutes = res > 10 ? res : "0" + res;
  const resHours = (duration - res) / 60;
  const hours = resHours > 10 ? resHours : "0" + resHours;
  return hours + "ч " + minutes + "м";
};

export const transitsCount = (arr) => {
  if (!arr.length) {
    return "БЕЗ ПЕРЕСАДОК";
  } else if (arr.length === 1) {
    return "1 ПЕРЕСАДКА";
  } else {
    return arr.length + " ПЕРЕСАДКИ";
  }
};
