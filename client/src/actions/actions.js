const test = () => async(dispatch) => {
  const response = await fetch('/test');
  const json = await response.json();
  console.log(json);
};

module.exports = {
  test,
};
