// import * as React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { sidebarItems as initialSidebarItems } from "./SidebarData";
// import { SidebarItem } from "./SidebarItem";
// import { ClinicInfo } from "./ClinicInfo";

// export function Sidebar() {
//   const [activeIndex, setActiveIndex] = React.useState(null);
//   const [dropdownState, setDropdownState] = React.useState({});
//   const location = useLocation(); // Get the current location

//   // Update activeIndex whenever the location changes
//   React.useEffect(() => {
//     const path = location.pathname;
//     const activeItemIndex = initialSidebarItems.findIndex(
//       (item) => item.path === path || (item.subItems && item.subItems.some(subItem => subItem.path === path))
//     );
//     setActiveIndex(activeItemIndex);
//   }, [location]);

//   const handleItemClick = (index, path) => {
//     setActiveIndex(index);
//     if (path) {
//       // Directly navigate here from Sidebar
//       window.location.href = path;
//     }
//   };

//   const toggleDropdown = (index) => {
//     setDropdownState((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   return (
//     <div className="flex overflow-hidden flex-col pt-7 pb-28 bg-white max-w-[230px]">
//       <div className="flex flex-col px-3 w-full leading-6 text-neutral-600">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/34ea6cfec7c992fc90facc52f2f7cc6dad535af18db29c42d838365585ed6fd1?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36"
//           alt=""
//           className="object-contain ml-4 max-w-full aspect-[3.13] w-[103px]"
//         />
//         <ClinicInfo />
//       </div>
//       <div className="flex flex-col items-start mt-5 w-full text-xs font-medium tracking-tight leading-6 text-black">
//         {initialSidebarItems.map((item, index) => (
//           <SidebarItem
//             key={index}
//             title={item.title}
//             icon={item.icon}
//             isActive={activeIndex === index}
//             onClick={() => handleItemClick(index, item.path)}
//             subItems={item.subItems}
//             isOpen={dropdownState[index]}
//             toggleDropdown={() => toggleDropdown(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { sidebarItems as initialSidebarItems } from './SidebarData';
import { SidebarItem } from './SidebarItem';
import { ClinicInfo } from './ClinicInfo';

export function Sidebar() {
  const [activeIndex, setActiveIndex] = React.useState(null);
  const [dropdownState, setDropdownState] = React.useState({});
  const location = useLocation(); // Get the current location

  // Update activeIndex whenever the location changes
  React.useEffect(() => {
    const path = location.pathname;
    const activeItemIndex = initialSidebarItems.findIndex(
      (item) =>
        item.path === path ||
        (item.subItems &&
          item.subItems.some((subItem) => subItem.path === path))
    );
    setActiveIndex(activeItemIndex);
  }, [location]);

  const handleItemClick = (index, path) => {
    setActiveIndex(index);
    if (path) {
      window.location.href = path; // Directly navigate here from Sidebar
    }
  };

  const toggleDropdown = (index) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle dropdown state
    }));
  };

  return (
    <div className="flex overflow-hidden flex-col pt-7 pb-28 bg-white max-w-[230px]">
      <div className="flex flex-col px-3 w-full leading-6 text-neutral-600">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/34ea6cfec7c992fc90facc52f2f7cc6dad535af18db29c42d838365585ed6fd1?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36"
          alt=""
          className="object-contain ml-4 max-w-full aspect-[3.13] w-[103px]"
        />
        <ClinicInfo />
      </div>
      <div className="flex flex-col items-start mt-5 w-full text-xs font-medium tracking-tight leading-6 text-black">
        {initialSidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            title={item.title}
            icon={item.icon}
            isActive={activeIndex === index}
            onClick={() => handleItemClick(index, item.path)}
            subItems={item.subItems}
            isOpen={dropdownState[index]}
            toggleDropdown={() => toggleDropdown(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;