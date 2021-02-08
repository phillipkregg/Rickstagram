const comments = (state = [], action) => {
  console.log('Comments - dispatch happened');
  console.log('State = ', state);
  console.log('Action = ', action);
  return state;
};

export default comments;
