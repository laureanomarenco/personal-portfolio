export const LENG = "LENG";

const initialState = {
  lenguage: "esp",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LENG:
      return {
        ...state,
        lenguage: action.payload,
      };

    default:
      return state;
  }
}
