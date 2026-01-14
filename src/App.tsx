import Quiz from './components/Quiz';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <>
      <Quiz />
      <Analytics />
    </>
  );
};

export default App;
