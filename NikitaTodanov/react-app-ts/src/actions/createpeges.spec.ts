import { expect, describe, it, beforeEach } from "@jest/globals";

import { pagesReducer, PageReducerState } from "reducers/pageReducer";
import { pageAdd, PagePayload, pagePending } from "./createpeges";

const mockStore = (): PageReducerState => {
  return {
    loading: false,
    data: [],
    error: null,
    currentId: null,
  };
};

const getPagePayload = (): PagePayload => ({
  id: "123",
  url: "/",
  title: "10",
  content: "3",
  userId: "1",
});

describe("Page", () => {
  let store = mockStore();
  beforeEach(() => {
    store = mockStore();
  });

  it("pagePending", () => {
    const action = pagePending();
    // console.log(action)
    expect(pagesReducer(store, action)).toMatchObject({ loading: true });
  });

  it("pageAdd", () => {
    const data = getPagePayload();
    const action = pageAdd(data);
    expect(pagesReducer(store, action)).toMatchObject({ data: [data] });
  });
});
