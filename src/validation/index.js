class ValidateMetric {
  static postMetric(req, res, next) {
    const { value } = req.body;
    if (!value || !Number(value)) {
      return res.status(400).send('value must be a number');
    }
    return next();
  }
}

export default ValidateMetric;
