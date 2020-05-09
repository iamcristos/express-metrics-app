import model from '../model';

class Metrics {
  static async getMetrics(req, res) {
    const value = await model.getMetric();
    return res.status(200).json({ value });
  }

  static async addMetrics(req, res) {
    const { value } = req.body;
    model.addMetric(value);
    return res.status(200).json({ value });
  }
}

export default Metrics;
