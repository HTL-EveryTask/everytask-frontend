export default class Task {
  constructor(
    title = "TASK_TITLE",
    description = "TASK_DESCRIPTION",
    date = new Date(1970, 0, 1),
    done = false
  ) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.done = done;
  }
}
