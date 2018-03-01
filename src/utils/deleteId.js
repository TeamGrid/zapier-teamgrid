export default (doc) => {
  const item = { ...doc };
  delete item.id;
  return item;
};
