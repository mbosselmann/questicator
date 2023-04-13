import { useQuests } from "@/context.js";

export default function Date({ day = null }) {
  const { today } = useQuests();

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

  const date = day ? day.split(" ") : today.split(" ");
  const formatDate = `${date[2]}.${
    months.indexOf(date[1]) >= 10
      ? months.indexOf(date[1])
      : `0${months.indexOf(date[1]) + 1}`
  }.${date[3]}`;

  return <span>{formatDate}</span>;
}
