import { Description } from './components/Description/Description';
import { useState } from 'react';
import { Options } from './components/Options/Options';
import { Feedback } from './components/Feedback/Feedback';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickButton = e => {
    const option = e.target.name;

    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        throw new Error();
    }
  };

  return (
    <div>
      <Description />

      <Options
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleClickButton}
      />
      <Feedback good={good} neutral={neutral} bad={bad} />
    </div>
  );
};
