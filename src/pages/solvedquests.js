import { Fragment } from "react";
import QuestList from "@/components/QuestList/QuestList.js";
import { useQuests } from "@/context.js";
import { formatDate } from "@/lib/format/formatDate.js";

export default function SolvedQuests() {
  const { solvedQuests } = useQuests();

  if (solvedQuests.length === 0) {
    return (
      <p>
        No solved quests yet. Try to solve your daily quests to defeat the
        Questicator!
      </p>
    );
  }

  const finishedDates = solvedQuests.map((solvedQuest) => {
    return solvedQuest.dateFinished;
  });

  const formattedFinishedDates = [...finishedDates].map((finishedDate) => {
    const formattedDate = formatDate(finishedDate, "sorting");
    return formattedDate;
  });

  const sortedFinishedDates = new Set(
    [...formattedFinishedDates]
      .sort((a, b) => b - a)
      .map(
        (date) => `${date.slice(6, 8)}.${date.slice(4, 6)}.${date.slice(0, 4)}`
      )
  );

  return (
    <>
      <h2>Solved Quests</h2>
      {[...sortedFinishedDates].map((date, index) => {
        return (
          <Fragment key={index}>
            <h3>{date}</h3>
            <QuestList
              quests={solvedQuests
                .filter(
                  (quest) => formatDate(quest.dateFinished, "display") === date
                )
                .sort((a, b) => {
                  return (
                    new Date(a.dateFinished).getTime() -
                    new Date(b.dateFinished).getTime()
                  );
                })}
              displayCheckbox
            />
          </Fragment>
        );
      })}
    </>
  );
}
