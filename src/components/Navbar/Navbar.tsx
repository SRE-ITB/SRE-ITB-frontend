// import React, { useState } from 'react';
// import '../Style.css';
// import i1 from '.../Images/Logo/whiteLogo.png';

// export default function Navbar(): JSX.Element {
//   const [open, setOpen] = useState<boolean>(false);

//   const toggleMenu = () => {
//     setOpen(!open);
//   };

//   return (
//     <div>
//       <div className='fixed z-0 top-0 bg-gradient-to-b from-greenSRE100 to-green-0 xl:h-64 sm:h-32 w-screen sm:visible' id='nav'>
//         <nav className='flex h-2/3 '>
//           <img src={i1} alt='logo' />
//           <ul className='cursor-pointer ml-auto flex text-center items-center text-white font-inter mr-4 font-medium xl:text-2.5xl md:text-base sm:text-sm'>
//             <li className='hover:text-greenSRE200 py-3 xl:px-6 sm:px-3 xl:m-5 lg:m-0.5 sm:m-0 text-greenSRE200 font-extrabold xl:text-4xl md:text-2xl sm:text-xl'>Home</li>
//             <li className='hover:text-greenSRE200 hover:scale-125 py-3 xl:px-6 sm:px-3 xl:m-5 lg:m-0.5 sm:m-0'>About Us</li>
//             <li className='hover:text-greenSRE200 hover:scale-125 py-3 xl:px-6 sm:px-3 xl:m-5 lg:m-0.5 sm:m-0'>Activity</li>
//             <li className='hover:text-greenSRE200 hover:scale-125 py-3 xl:px-6 sm:px-3 xl:m-5 lg:m-0.5 sm:m-0'>Student</li>
//             <li className='hover:text-greenSRE200 hover:scale-125 py-3 xl:px-6 sm:px-3 xl:m-5 lg:m-0.5 sm:m-0'>IYREF</li>
//             <li className='hover:text-greenSRE200 hover:scale-125 py-3 xl:px-6 sm:px-3 xl:m-5 lg:m-0.5 sm:m-0'>Merchandise</li>
//           </ul>
//         </nav>
//       </div>

//       <div className='absolute z-50 top-0 bg-gradient-to-b from-greenSRE100 to-green-0 h-36 w-screen transition-all-duration-500 ease-in sm:hidden'>
//         <nav className='flex h-2/3 '>
//           <img src={i1} alt='logo' />
//           <div className='ml-auto p-8 cursor-pointer sm:hidden' id={open ? 'close' : 'menu'} onClick={toggleMenu}>
//             {open ? (
//               <>
//                 <div className='ml-auto w-[35px] h-[3px] mb-[7px] rotate-45 translate-y-2.5 bg-white rounded-full'></div>
//                 <div className='ml-auto w-[35px] h-[3px] -rotate-45 bg-white rounded-full'></div>
//               </>
//             ) : (
//               <>
//                 <div className='w-[35px] h-[3px] mb-[7px] bg-white rounded-full'></div>
//                 <div className='w-[35px] h-[3px] mb-[7px] bg-white rounded-full'></div>
//                 <div className='w-[35px] h-[3px] bg-white rounded-full'></div>
//               </>
//             )}
//           </div>
//         </nav>
//       </div>
//       <div className={`bg-greenSRE200 w-screen h-screen overflow-hidden origin-left ${open ? 'visible' : 'invisible'} sm:hidden`} id='hammm'>
//         <div className='p-8 cursor-pointer' id='close'>
//           <div className='ml-auto w-[35px] h-[3px] mb-[7px] rotate-45 translate-y-2.5 bg-white rounded-full'></div>
//           <div className='ml-auto w-[35px] h-[3px] -rotate-45 bg-white rounded-full'></div>
//         </div>
//         <ul className='text-white text-center text-xl'>
//           <div className='w-screen h-[1px] bg-white'></div>
//           <li className='py-2'><a href='#'>Home</a></li>
//           <div className='w-screen h-[1px] bg-white'></div>
//           <li className='py-2'><a href='#'>About Us</a></li>
//           <div className='w-screen h-[1px] bg-white'></div>
//           <li className='py-2'><a href='#'>Activity</a></li>
//           <div className='w-screen h-[1px] bg-white'></div>
//           <li className='py-2'><a href='#'>Student</a></li>
//           <div className='w-screen h-[1px] bg-white'></div>
//           <li className='py-2'><a href='#'>IYREF</a></li>
//           <div className='w-screen h-[1px] bg-white'></div>
//           <li className='py-2'><a href='#'>Merchandise</a></li>
//           <div className='w-screen h-[1px] bg-white'></div>
//         </ul>
//       </div>
//     </div>
//   );
// }
