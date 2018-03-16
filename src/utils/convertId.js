const convert = (result) => {
  const res = { ...result };
  const idField = res._id ? '_id' : 'userId'; // eslint-disable-line no-underscore-dangle
  res.id = res[idField];
  delete res[idField];
  return res;
};

export default (results) => {
  if (!results) return results;
  if (Array.isArray(results)) return results.map(convert);
  return convert(results);
};
