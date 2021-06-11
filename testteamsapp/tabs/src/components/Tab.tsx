import React from "react";
import { Welcome } from "./sample/Welcome";

export default function Tab() {
  return (
    <div>
      <h1>hello world!</h1>
      <Welcome showFunction={true} />
    </div>
  );
}
