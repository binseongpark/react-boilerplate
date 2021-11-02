const initialState = {
  test: "test",
};

export const TEST = "test/TEST";
export const TEST_SUCCESS = "test/TEST_SUCCESSa";

function test(state = initialState, action) {
  console.log("@@@@ action: ", action);
  switch (action.type) {
    case TEST_SUCCESS:
      return {
        ...state,
        test: action.data,
      };
    default:
      return state;
  }
}

export default test;
