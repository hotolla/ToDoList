export const reducer = (state, action) => {
  switch (action.type) {
    case 'createTask':
      return {...state, tasks: [action.payload, ...state.tasks]};
  }
} 
