import { test, expect } from "vitest";

import searchReducer, { updateRequestParams } from "../searchSlice";

test("updateRequestParams action", () => {
  const initialState = {
    requestParams: {
      name: "",
      registration_date: "",
      animal: "",
    },
  };

  const action = updateRequestParams({
    name: "Fluffy",
    registration_date: "2022-01-01",
    animal: "Kot",
  });

  const nextState = searchReducer(initialState, action);

  expect(nextState.requestParams).toEqual(action.payload);
});
