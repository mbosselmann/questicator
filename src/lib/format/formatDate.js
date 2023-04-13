export function formatDate(day, formatType) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = day.split(" ");

  if (formatType === "display" || !formatType) {
    const formattedDate = `${date[2]}.${
      months.indexOf(date[1]) >= 10
        ? months.indexOf(date[1])
        : `0${months.indexOf(date[1]) + 1}`
    }.${date[3]}`;

    return formattedDate;
  } else if (formatType === "sorting") {
    const formattedDate = `${date[3]}${
      months.indexOf(date[1]) >= 10
        ? months.indexOf(date[1])
        : `0${months.indexOf(date[1]) + 1}`
    }${date[2]}`;
    return formattedDate;
  }
}
