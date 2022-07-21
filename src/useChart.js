import { useState, useEffect } from "react";

function useChart({ type }) {
  let component;

  if (type === 1) component = <h1>chart 1</h1>;
  else if (type === 2) component = <h1>chart 1</h1>;
  else if (type === 3) component = <h1>chart 1</h1>;
  else component = "";
  return component;
}
export default useChart;
