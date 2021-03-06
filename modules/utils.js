export const reducerMethods = {
  add: (state, {payload}) => [...state, payload],
  remove: (state, {payload}) => state.filter(name => name !== payload),
  replace: propName => (state, {payload}) => ({
    ...state,
    [propName]: payload
  }),
  addByPropName: propName => (state, {payload}) => ({
    ...state,
    [propName]: [...state[propName], ...payload]
  }),
  addById: propName => (state, {payload}) => ({
    ...state,
    [propName]: {
      ...state[propName],
      [payload.id]: payload
    }
  }),
  identity: (state, {payload}) => payload,
  identityByPropName: propName => (state, {payload}) => ({
    ...state,
    [propName]: payload
  }),
  mergeObjectByPropName: propName => (state, {payload}) => ({
    ...state,
    [propName]: {
      ...state[propName],
      ...payload
    }
  })
}
