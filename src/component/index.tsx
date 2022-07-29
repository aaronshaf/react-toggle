import React from "react";
import { Toggle } from "./toggle";

export default React.forwardRef((props, ref) => (
  <Toggle innerref={ref} {...props} />
));
