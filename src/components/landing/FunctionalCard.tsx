// // Reusable FunctionalCard Component
// interface FunctionalCardProps {
//   icon: React.ElementType; // Icon component
//   title: string;
//   description: string;
// }

// export const FunctionalCard = ({
//   imageSrc,
//   imageAlt,
//   title,
//   description,
// }: FunctionalCardProps) => {
//   return (
//     <div className="functional-card max-w-sm bg-black text-white rounded-lg shadow-md overflow-hidden flex flex-col">
//       {/* Image Section */}
//       <div className="functional-card-image">
//         <img
//           src={imageSrc}
//           alt={imageAlt}
//           className="w-full h-64 object-cover"
//         />
//       </div>
//       {/* Text Content */}
//       <div className="functional-card-content p-6 flex flex-col items-center">
//         <h3 className="functional-card-title text-xl font-semibold mb-2 text-center">
//           {title}
//         </h3>
//         <p className="functional-card-description text-sm text-center">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };
