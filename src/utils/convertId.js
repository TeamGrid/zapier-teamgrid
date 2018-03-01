const convert = (result) => {
  const res = { ...result };
  res.id = res._id; // eslint-disable-line no-underscore-dangle
  delete res._id; // eslint-disable-line no-underscore-dangle
  return res;
};

export default (results) => {
  if (!results) return results;
  if (Array.isArray(results)) return results.map(convert);
  return convert(results);
};
