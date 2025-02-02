import React from 'react';
import FaqsCategory from './FaqsCategory'; // Adjust the import if necessary

const faqCategories = [
  {
    title: 'General Information',
    questions: [
      {
        question: 'What is your return policy?',
        subQuestions: [
          {
            question: 'Can I return opened items?',
            answers: ['No, items must be unopened for a return.']
          },
          {
            question: 'How long do I have to return an item?',
            answers: ['You have 30 days to return an item.']
          }
        ]
      },
      {
        question: 'Where do you ship to?',
        subQuestions: [
          {
            question: 'Do you ship internationally?',
            answers: ['Yes, we offer international shipping.']
          }
        ]
      }
    ]
  },
  {
    title: 'Technical Support',
    questions: [
      {
        question: 'How do I reset my password?',
        subQuestions: [
          {
            question: 'I forgot my password, what do I do?',
            answers: ['Click on the \'Forgot Password\' link on the login page.']
          }
        ]
      }
    ]
  }
];

export default function Faqs() {
  return (
    <div className="p-8">
      {faqCategories.map((category, index) => (
        <FaqsCategory key={index} title={category.title} questions={category.questions} />
      ))}
    </div>
  );
}