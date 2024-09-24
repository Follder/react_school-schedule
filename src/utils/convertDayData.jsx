export const convertDayData = (week, dayId) => {
  const day = week.find((item) => item.dayId === dayId);
  return day.dayName;
};