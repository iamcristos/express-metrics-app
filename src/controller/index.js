import model from '../model';

class Metrics {
  static getMetrics(req, res) {
    const value = model.getMetric();
    return res.status(200).json({ value });
  }

  static async addMetrics(req, res) {
    const { value } = req.body;
    model.addMetric(value);
    return res.status(200).json({ value });
  }
}

export default Metrics;
