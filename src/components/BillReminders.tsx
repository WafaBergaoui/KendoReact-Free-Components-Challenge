"use client";

import {
  Scheduler,
  TimelineView,
  DayView,
  WeekView,
  MonthView,
} from "@progress/kendo-react-scheduler";

interface Reminder {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

const reminders: Reminder[] = [
  {
    id: 1,
    title: "Electricity Bill",
    start: new Date(2023, 9, 15, 10, 0),
    end: new Date(2023, 9, 15, 11, 0),
  },
  {
    id: 2,
    title: "Internet Bill",
    start: new Date(2023, 9, 20, 14, 0),
    end: new Date(2023, 9, 20, 15, 0),
  },
];

const BillReminders = () => (
  <div className="container">
    <h1 className="title">Bill Reminders</h1>
    <Scheduler data={reminders} defaultView="week">
      <TimelineView />
      <DayView />
      <WeekView />
      <MonthView />
    </Scheduler>
  </div>
);

export default BillReminders;
