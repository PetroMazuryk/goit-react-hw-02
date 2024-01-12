import { Description } from './components/Description/Description';
import { useState, useEffect } from 'react';
import { Options } from './components/Options/Options';
import { Feedback } from './components/Feedback/Feedback';
import { Notification } from './components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(() => {
    const savedClicks = window.localStorage.getItem('good-clicks');
    if (savedClicks !== null) {
      return savedClicks;
    }
    return 0;
  });

  const [neutral, setNeutral] = useState(() => {
    const savedClicks = window.localStorage.getItem('neutral-clicks');
    if (savedClicks !== null) {
      return savedClicks;
    }
    return 0;
  });
  const [bad, setBad] = useState(() => {
    const savedClicks = window.localStorage.getItem('bad-clicks');

    if (savedClicks !== null) {
      return savedClicks;
    }
    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem('good-clicks', good);
    window.localStorage.setItem('neutral-clicks', neutral);
    window.localStorage.setItem('bad-clicks', bad);
  }, [good, neutral, bad]);

  const handleClickButton = e => {
    const option = e.target.name;

    switch (option) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      case 'reset':
        setGood(0);
        setNeutral(0);
        setBad(0);
        break;

      default:
        throw new Error();
    }
  };

  const totalFeedback = () => {
    const countTotalFeedback = Number(good) + Number(neutral) + Number(bad);

    return countTotalFeedback;
  };

  const resetFeedback = () => {
    const options = ['good', 'neutral', 'bad', 'reset'];

    if (totalFeedback()) {
      return options;
    }
    if (!totalFeedback()) {
      return options.splice(0, 3);
    }
  };
  const positiveFeedback = () => {
    const positivePercentage = Math.round(
      ((Number(good) + Number(neutral)) / totalFeedback()) * 100
    );
    return positivePercentage;
  };

  return (
    <div>
      <Description />

      <Options options={resetFeedback()} onLeaveFeedback={handleClickButton} />
      {totalFeedback() > 0 ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback()}
          positive={positiveFeedback()}
        />
      ) : (
        <Notification message="No feedback yet"></Notification>
      )}
    </div>
  );
};
