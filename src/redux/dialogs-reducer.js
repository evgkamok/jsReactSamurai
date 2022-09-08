const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE";
const ADD_MESSAGE = "ADD-MESSAGE";

const initialState = {
  dialogs: [
    { id: 1, textMessage: "First" },
    { id: 2, textMessage: "Second" },
    { id: 3, textMessage: "Third" },
  ],
  newTextMessage: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT_MESSAGE:
      return {
        ...state,
        newTextMessage: action.text,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        newTextMessage: "",
        dialogs: [
          ...state.dialogs,
          { id: 5, textMessage: state.newTextMessage },
        ],
      };
    default:
      return state;
  }
};

export const updateTextMessageCreate = (text) => ({
  type: UPDATE_TEXT_MESSAGE,
  text: text,
});

export const postNewMessageCreate = () => ({
  type: ADD_MESSAGE,
});

export default dialogsReducer;
