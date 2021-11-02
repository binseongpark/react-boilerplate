import React from "react";
import Header from "components/Header";
import { useSelector, useDispatch } from "react-redux";
import * as types from "reducers/test";

export default function HomePage() {
  const { test } = useSelector((state) => {
    return {
      test: state.test,
    };
  });
  const dispatch = useDispatch();
  console.log('@@@@ test: ', test)

  return (
    <div>
      <Header />
      <h2>this is homepage</h2>
      <button
        onClick={() => {
          dispatch({
            type: types.TEST,
            data: test.test + '1',
          });
        }}
      >
        saga test
      </button>
      <p>{test.test}</p>
    </div>
  );
}
