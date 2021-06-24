import React, { useState, useEffect } from "react";
function Render(props) {
  console.log(props);
  const [state, setState] = useState(props.url);

  return (
    <div>
      totot <img src={state} alt="" />
    </div>
  );
}
export default Render;
