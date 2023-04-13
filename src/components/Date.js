import { useQuests } from "@/context.js";
import { formatDate } from "@/lib/format/formatDate.js";

export default function Date({ day = null }) {
  const { today } = useQuests();
  const date = day ? day : today;
  const formattedDate = formatDate(date, "display");

  return <span>{formattedDate}</span>;
}
