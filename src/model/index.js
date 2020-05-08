class Model {
  constructor(db = []) {
    this.db = db;
  }

  static checkDate(date) {
    const dateDiff = date - Date.now();
    const oneHour = 60 * 60 * 1000;
    return dateDiff < oneHour;
  }

  addMetric(value) {
    const data = { value, time: Date.now() };
    this.db.push(data);
    return this;
  }

  getMetric() {
    let sum = 0;

    const db = this.db.filter((item) => {
      if (Model.checkDate(item.time)) {
        sum += item.value;
        return item;
      }
      return false;
    });
    this.db = db;
    return Math.round(sum);
  }
}
const ONE_HOUR = 60 * 60 * 1000; /* ms */
const arr = [{ time: Date.now() + ONE_HOUR + 0.11 * 1000, value: 12 },
  { time: Date.now() + ONE_HOUR, value: 12 },
  { time: 1588977178118, value: 12 }, { time: Date.now(), value: 2 },
  { time: Date.now(), value: 12 }];
export default new Model(arr);
