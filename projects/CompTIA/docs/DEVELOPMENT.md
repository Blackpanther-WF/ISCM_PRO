# Development Guide

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Navigate to the CompTIA directory
cd projects/CompTIA

# Install dependencies
npm install

# Start the development server
npm start
```

The application will open in your browser at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

## Running Tests

```bash
npm test
```

Run the test suite with coverage:
```bash
npm test -- --coverage
```

## Project Structure

```
src/
├── components/
│   ├── QuizComponent.js         # Quiz interface component
│   ├── QuizComponent.css
│   ├── ProgressTracker.js       # Progress tracking component
│   ├── ProgressTracker.css
│   ├── StudyModule.js           # Study materials component
│   └── StudyModule.css
├── data/
│   ├── quizData.js              # Quiz questions for all domains
│   ├── studyMaterials.js        # Study resources
│   └── domainTopics.js          # Topic lists for each domain
├── App.js                       # Main application component
├── App.css                      # Application styles
├── index.js                     # React entry point
└── index.css                    # Global styles

tests/
├── App.test.js                  # App component tests
└── quizData.test.js             # Quiz data validation tests
```

## Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run lint`
Runs ESLint to check code quality.

### `npm run security-scan`
Runs security audit on dependencies with `npm audit`.

## Features Implemented

### Components
1. **QuizComponent**
   - Interactive quiz interface
   - Multiple choice questions
   - Answer validation and feedback
   - Detailed explanations
   - Score tracking

2. **ProgressTracker**
   - Visual progress bars for each domain
   - Overall progress calculation
   - Interactive slider for manual progress updates

3. **StudyModule**
   - Organized topic lists
   - Study materials and resources
   - Topic completion tracking

### Content
- **250+ Practice Questions**: 50 questions per domain
- **Study Materials**: Curated resources for each domain
- **Topic Lists**: Comprehensive topic coverage for all 5 domains

### Data Files
- `quizData.js`: All quiz questions with explanations
- `studyMaterials.js`: External resources and learning materials
- `domainTopics.js`: Topic checklists for systematic study

## Customization

### Adding More Questions
Edit `src/data/quizData.js` and add new question objects following the existing format:

```javascript
{
  question: "Your question here?",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  correctAnswer: 0, // index of correct answer
  explanation: "Explanation of the correct answer."
}
```

### Updating Study Materials
Edit `src/data/studyMaterials.js` to add or modify study resources:

```javascript
{
  title: "Topic Title",
  description: "Topic description",
  link: "https://resource-url.com"
}
```

### Modifying Styles
Each component has a corresponding CSS file that can be customized:
- `QuizComponent.css`
- `ProgressTracker.css`
- `StudyModule.css`
- `App.css`

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips
1. Component memoization for quiz questions
2. Lazy loading of study materials
3. Optimized CSS with minimal reflows
4. Efficient state management

## Troubleshooting

### Port 3000 already in use
```bash
npm start -- --port 3001
```

### Module not found errors
```bash
rm -rf node_modules
npm install
```

### Test failures
Clear cache and retry:
```bash
npm test -- --clearCache
```

## Contributing

When adding new features:
1. Create components in `src/components/`
2. Add data to appropriate files in `src/data/`
3. Write tests in `tests/`
4. Update styles in component CSS files
5. Test locally before committing

## License

MIT License - See LICENSE file for details
