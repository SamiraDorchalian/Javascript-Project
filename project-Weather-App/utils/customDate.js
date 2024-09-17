const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturdey",
];

const getWeekDay = (data) => {
  return DAYS[new Date(data * 1000).getDay()];
};

export { getWeekDay };
