// a reducer takes in two things:

// 1) The action (info about what happened)
// 2) Copy of current state

const posts = (state = [], action) => {
  console.log('ACTION ===> ', action);
  switch (action.type) {
    // return updated state
    case 'INCREMENT_LIKES':
      const i = action.index;
      console.log('incrementing likes');
      return [
        ...state.slice(0, i),
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1),
      ];

    default:
      return state;
  }
};

export default posts;
