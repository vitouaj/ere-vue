import { Notyf } from "notyf";

class DateTimeUtility {
  private static today = Date.now();

  public static TIME_OF_DAY_MAP = {
    6: { start: "T06:00:00", end: "T07:00:00" },
    7: { start: "T07:00:00", end: "T08:00:00" },
    8: { start: "T08:00:00", end: "T09:00:00" },
    9: { start: "T09:00:00", end: "T10:00:00" },
    10: { start: "T10:00:00", end: "T11:00:00" },
    11: { start: "T11:00:00", end: "T12:00:00" },
    12: { start: "T12:00:00", end: "T13:00:00" },
    1: { start: "T13:00:00", end: "T14:00:00" },
    2: { start: "T14:00:00", end: "T15:00:00" },
    3: { start: "T15:00:00", end: "T16:00:00" },
    4: { start: "T16:00:00", end: "T17:00:00" },
    5: { start: "T17:00:00", end: "T18:00:00" },
  };

  // need to build a map of '1' => 'Date of this week', find what the date of monday in this week
  // need to build a map of '6' => 'Time of week' find what time day is *** this one is static
  // '6' => { start: 'T6:00:00', end: 'T7:00:00'}
  // '1' => { start: 'T13:00:00', end: 'T14:00:00'}
  public static getWeekdayDateMap() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6

    // Get the date for Monday of the current week
    const monday = new Date(today);
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    monday.setDate(today.getDate() + diffToMonday);

    // Build the map for Monday (1) to Saturday (6)
    const map = {};
    for (let i = 0; i < 6; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      const key = (i + 1).toString(); // '1' to '6'
      map[key] = date.toISOString().split("T")[0]; // Format: 'YYYY-MM-DD'
    }

    return map;
  }

  static mapEvents(courses: any[] = []) {
    let events: Array<{ start: string; end: string }> = [];
    for (const course of courses) {
      let courseTimes = course.courseTimes;
      let courseDays = course.courseDays;
      for (const courseDay of courseDays) {
        let date = this.getWeekdayDateMap()[courseDay];
        for (const courseTime of courseTimes) {
          let event1 = this.TIME_OF_DAY_MAP[courseTime];
          event1 = {
            title: course.subject,
            start: date + event1.start,
            end: date + event1.end,
          };
          events.push(event1);
        }
      }
    }
    return events;
  }
}

const ROLE_MAPPER = {
  1: "Student",
  2: "Teacher",
  3: "Parent",
};

function notify(option: NotifyOption) {
  const notyfDefault = new Notyf({
    position: {
      x: "center",
      y: "top",
    },
  });
  notyfDefault.open({
    className: option.type || "type-error",
    message: option.message,
    duration: option.duration || 3000,
    ripple: true,
    dismissible: true,
  });
}

interface NotifyOption {
  type?: string;
  message: string;
  duration?: number;
}

export { DateTimeUtility, notify, ROLE_MAPPER };
