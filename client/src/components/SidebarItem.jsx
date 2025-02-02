// import * as React from "react";
// import { useNavigate } from "react-router-dom";

// export function SidebarItem({
//   title,
//   icon,
//   isActive,
//   onClick,
//   subItems,
//   isOpen,
//   toggleDropdown,
// }) {
//   const navigate = useNavigate();

//   const handleItemClick = () => {
//     if (onClick) {
//       onClick(); // Call onClick from parent component (Sidebar.js)
//     }
//   };

//   return (
//     <div className="flex flex-col w-full">
//       <div
//         onClick={handleItemClick}
//         className={`flex gap-2.5 items-center self-stretch px-5 py-2.5 w-full whitespace-nowrap cursor-pointer ${
//           isActive ? "font-semibold text-green-900 bg-stone-900 bg-opacity-20" : ""
//         }`}
//       >
//         {isActive && (
//           <div className="flex shrink-0 self-stretch bg-green-900 h-[45px] w-[7px]" />
//         )}
//         {icon && (
//           <img
//             loading="lazy"
//             src={icon}
//             alt=""
//             className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//           />
//         )}
//         {!icon && <div className="flex shrink-0 self-stretch my-auto w-6 h-6" />}
//         <div className="flex-grow my-auto">{title}</div>
//         {subItems && (
//           <div
//             className={`transform transition-transform ${
//               isOpen ? "rotate-90" : "rotate-0"
//             }`}
//           >
//             ▼
//           </div>
//         )}
//       </div>
//       {isOpen && subItems && (
//         <div className="flex flex-col pl-10">
//           {subItems.map((subItem, index) => (
//             <div
//               key={index}
//               className="py-1 cursor-pointer hover:text-green-700"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 navigate(subItem.path); // Use subItem.path for navigation
//               }}
//             >
//               {subItem.title}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export function SidebarItem({
  title,
  icon,
  isActive,
  onClick,
  subItems,
  isOpen,
  toggleDropdown,
}) {
  const navigate = useNavigate();

  const handleItemClick = () => {
    if (onClick) {
      onClick(); // Call onClick from parent component (Sidebar.js)
    }
    if (subItems) {
      toggleDropdown(); // Toggle dropdown if there are subItems
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div
        onClick={handleItemClick}
        className={`flex gap-2.5 items-center self-stretch px-5 py-2.5 w-full whitespace-nowrap cursor-pointer ${
          isActive ? 'font-semibold text-green-900 bg-stone-900 bg-opacity-20' : ''
        }`}
      >
        {isActive && (
          <div className="flex shrink-0 self-stretch bg-green-900 h-[45px] w-[7px]" />
        )}
        {icon && (
          <img
            loading="lazy"
            src={icon}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        )}
        {!icon && <div className="flex shrink-0 self-stretch my-auto w-6 h-6" />}
        <div className="flex-grow my-auto">{title}</div>
        {subItems && (
          <div
            className={`transform transition-transform ${
              isOpen ? 'rotate-90' : 'rotate-0'
            }`}
          >
            ▼
          </div>
        )}
      </div>
      {isOpen && subItems && (
        <div className="flex flex-col pl-10">
          {subItems.map((subItem, index) => (
            <div
              key={index}
              className="py-1 cursor-pointer hover:text-green-700"
              onClick={(e) => {
                e.stopPropagation();
                navigate(subItem.path); // Navigate to the path
              }}
            >
              {subItem.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}