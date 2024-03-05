// "use client"
// import Prism from "prismjs";
// import { useEffect } from "react";
// export default function Components() {
//     useEffect(() => {
//         Prism.highlightAll();
//     })
//     const js = `
// <div>
//     Components
//     <pre>
//         <code className="language-js">
//             const a = 10
//             const b = 20
//             const c = a + b
//         </code>
//     </pre>
// </div>
//     `
//     return (
//         <div>
//             Components
//             <pre>
//                 <code className="language-html">
//                 {js}
//                 </code>
//             </pre>
//         </div>
//     );
// }

import Tabs from "@/components/tabs/Tabs";

export default function page() {
  return (
    <div>
      <Tabs/>
    </div>
  )
}
