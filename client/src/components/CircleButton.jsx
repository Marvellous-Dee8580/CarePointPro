// import * as React from "react";

// function CircleButton({ size, color }) {
//   return (
//     <div
//       className={`flex shrink-0 self-stretch my-auto ${size} ${color} rounded-[100px]`}
//       role="button"
//       tabIndex={0}
//       aria-label="Emergency call control button"
//     />
//   );
// }

// export default CircleButton;

import * as React from 'react';

function CircleButton({ size, color, icon }) {
  return (
    <div
      className={`flex shrink-0 justify-center items-center ${size} ${color} rounded-[100px]`}
      role="button"
      tabIndex={0}
      aria-label="Emergency call control button"
    >
      {icon}
    </div>
  );
}

export default CircleButton;
