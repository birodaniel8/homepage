import React from "react";
import { Provider } from "react-redux"; // wrap this around everything for redux

import store from "../store";

const Root = () => {
  return (
    <Provider store={store}>
      <div>
        <p>HomePage</p>
      </div>
    </Provider>
  );
};

export default Root;
