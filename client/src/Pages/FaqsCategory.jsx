// import React, { useState } from "react";

// export default function FaqCategory({ title, questions }) {
//   const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
//   const [selectedSubQuestionIndex, setSelectedSubQuestionIndex] = useState(null);

//   // Defensive check to avoid map on undefined or empty array
//   if (!questions || questions.length === 0) return <div>No questions available.</div>;

//   // Handle question click to show/hide answers
//   const handleQuestionClick = (index) => {
//     if (selectedQuestionIndex === index) {
//       setSelectedQuestionIndex(null); // Toggle off if the same question is clicked
//     } else {
//       setSelectedQuestionIndex(index); // Show the clicked question's answer
//       setSelectedSubQuestionIndex(null); // Reset sub-question selection
//     }
//   };

//   // Handle sub-question click to show/hide its answer
//   const handleSubQuestionClick = (index) => {
//     if (selectedSubQuestionIndex === index) {
//       setSelectedSubQuestionIndex(null); // Toggle off if the same sub-question is clicked
//     } else {
//       setSelectedSubQuestionIndex(index); // Show the clicked sub-question's answer
//     }
//   };

//   return (
//     <div className="flex flex-row w-full">
//       {/* Left Section - Questions */}
//       <div className="flex flex-col w-1/2 p-4">
//         <h2 className="text-lg font-semibold">{title}</h2>
//         {questions.map((q, questionIndex) => (
//           <div key={questionIndex}>
//             <div
//               className="cursor-pointer font-medium text-blue-600 mt-2"
//               onClick={() => handleQuestionClick(questionIndex)}
//             >
//               {q.question}
//             </div>
//             {selectedQuestionIndex === questionIndex && q.subQuestions && q.subQuestions.length > 0 && (
//               <div className="pl-4">
//                 {q.subQuestions.map((sub, subIndex) => (
//                   <div
//                     key={subIndex}
//                     className="cursor-pointer text-sm text-gray-700 mt-2"
//                     onClick={() => handleSubQuestionClick(subIndex)}
//                   >
//                     - {sub.question}
//                     {selectedSubQuestionIndex === subIndex && (
//                       <div className="mt-2 pl-4">
//                         {sub.answers && sub.answers.map((answer, ansIndex) => (
//                           <div key={ansIndex} className="text-gray-600">
//                             - {answer}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Right Section - Answers */}
//       <div className="flex flex-col w-1/2 p-4 border-l border-gray-300">
//         <h3 className="text-lg font-semibold">Answers</h3>
//         {selectedQuestionIndex !== null && (
//           <div>
//             {questions[selectedQuestionIndex].subQuestions && questions[selectedQuestionIndex].subQuestions.map((sub, subIndex) => (
//               <div key={subIndex}>
//                 {selectedSubQuestionIndex === subIndex && (
//                   <div>
//                     {sub.answers && sub.answers.map((answer, ansIndex) => (
//                       <div key={ansIndex} className="text-gray-600">
//                         - {answer}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqCategory({ title, questions }) {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  // Handle question click to show answers on the right section
  const handleQuestionClick = (index) => {
    setSelectedQuestionIndex(selectedQuestionIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row w-full bg-gray-100 p-6 rounded-lg shadow-lg">
      {/* Left Section - Questions */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
        <div className="space-y-4">
          {questions.map((q, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow cursor-pointer flex justify-between items-center border border-gray-300 hover:bg-gray-50 transition-all"
              onClick={() => handleQuestionClick(index)}
            >
              <span className="text-gray-700 font-medium">{q.question}</span>
              {selectedQuestionIndex === index ? (
                <ChevronUp className="text-gray-500" size={20} />
              ) : (
                <ChevronDown className="text-gray-500" size={20} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Answers */}
      <div className="w-full md:w-1/2 p-4 border-l border-gray-300">
        {/* <h3 className="text-2xl font-bold mb-4 text-gray-800">Answer</h3> */}
        {selectedQuestionIndex !== null ? (
          <div className="bg-white p-4 rounded-lg shadow border border-gray-300">
            <h4 className="text-lg font-semibold text-gray-800">
              {questions[selectedQuestionIndex].question}
            </h4>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              {questions[selectedQuestionIndex].subQuestions.map((sub, i) => (
                <li key={i} className="mt-2">{sub.answers.join(' ')}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-500 italic">Select a question to view details.</p>
        )}
      </div>
    </div>
  );
}