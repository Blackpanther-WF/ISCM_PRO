import { domain1Questions, domain2Questions, domain3Questions, domain4Questions, domain5Questions } from '../data/quizData';

describe('Quiz Data Validation', () => {
  const allQuestions = [
    domain1Questions,
    domain2Questions,
    domain3Questions,
    domain4Questions,
    domain5Questions
  ];

  test('all domain questions should have minimum 5 questions', () => {
    allQuestions.forEach((questions, index) => {
      expect(questions.length).toBeGreaterThanOrEqual(5);
    });
  });

  test('each question should have required properties', () => {
    allQuestions.forEach((questions) => {
      questions.forEach((question) => {
        expect(question).toHaveProperty('question');
        expect(question).toHaveProperty('options');
        expect(question).toHaveProperty('correctAnswer');
        expect(question).toHaveProperty('explanation');
      });
    });
  });

  test('each question should have 4 options', () => {
    allQuestions.forEach((questions) => {
      questions.forEach((question) => {
        expect(question.options.length).toBe(4);
      });
    });
  });

  test('correct answer should be a valid index', () => {
    allQuestions.forEach((questions) => {
      questions.forEach((question) => {
        expect(question.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(question.correctAnswer).toBeLessThan(4);
      });
    });
  });
});
