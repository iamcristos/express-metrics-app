import model from '../src/model';

describe('Test for models', () => {
  beforeAll(() => {
    const ONE_HOUR = 60 * 60 * 1000; /* ms */
    const arr = [{ time: Date.now() + ONE_HOUR + (0.1 * 1000), value: 12 },
      { time: Date.now() + ONE_HOUR, value: 12 },
      { time: Date.now(), value: 2 },
      { time: Date.now(), value: 12 }];
    model.db = arr;
  });

  test('should return 26', () => {
    expect(model.getMetric()).toBe(26);
  });

  test('should add value', () => {
    model.addMetric(0);
    expect(model.getMetric()).toBe(26);
    expect(model.db.length).toBe(4);
  });
});
