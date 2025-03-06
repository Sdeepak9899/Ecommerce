// /** @format */

// 'use client';

// import { useState } from 'react';

// export default function ToggleDiv() {
//   const [isVisible, setIsVisible] = useState(false);

//   // Function to toggle visibility
//   const toggleDiv = () => {
//     setIsVisible((prevState) => !prevState);
//   };

//   return (
//     <div>
//       <button onClick={toggleDiv}>{isVisible ? 'Hide' : 'Show'} Content</button>

//       {/* Target Div */}
//       {isVisible && (
//         <div id="targetDiv">
//           <p>This is the content of the div that will be shown or hidden.</p>
//         </div>
//       )}
//     </div>
//   );
// }
