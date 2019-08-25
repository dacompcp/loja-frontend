const INITIAL_STATE = { data: [] };

export default function orderItems(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { data: [...state.data, action.payload.data] };
    case "REMOVE_ITEM":
      return {
        data: state.data.filter(e => e != action.payload.data)
      };
    case "ALTER_ITEM":
      return {
        data: state.data.filter(e => e != action.payload.data)
      };
    case "REMOVE_DATA":
      return {
        data: []
      };
    default:
      return state;
  }
}

export const Creators = {
  addItem: data => ({
    type: "ADD_ITEM",
    payload: { data }
  }),

  removeItem: data => ({
    type: "REMOVE_ITEM",
    payload: { data }
  }),

  alterItem: data => ({
    type: "ALTER_ITEM",
    payload: { data }
  }),

  removeData: () => ({
    type: "REMOVE_DATA"
  })
};
