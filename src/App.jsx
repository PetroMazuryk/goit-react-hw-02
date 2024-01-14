import css from './App.module.css';
import { Description } from './components/Description/Description';
import { useState, useEffect } from 'react';
import { Options } from './components/Options/Options';
import { Feedback } from './components/Feedback/Feedback';
import { Notification } from './components/Notification/Notification';

export const App = () => {
  const initialTypesFeedback = JSON.parse(
    window.localStorage.getItem('saved-value')
  ) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [valuesFeedback, setValuesFeedback] = useState(initialTypesFeedback);

  useEffect(() => {
    window.localStorage.setItem('saved-value', JSON.stringify(valuesFeedback));
  }, [valuesFeedback]);

  useEffect(() => {
    window.localStorage.setItem('saved-value', JSON.stringify(valuesFeedback));
  }, [valuesFeedback]);

  const handleClickButton = e => {
    const option = e.target.name;

    switch (option) {
      case 'good':
        setValuesFeedback({ ...valuesFeedback, good: valuesFeedback.good + 1 });
        break;

      case 'neutral':
        setValuesFeedback({
          ...valuesFeedback,
          neutral: valuesFeedback.neutral + 1,
        });
        break;

      case 'bad':
        setValuesFeedback({ ...valuesFeedback, bad: valuesFeedback.bad + 1 });
        break;

      case 'reset':
        setValuesFeedback({ good: 0, neutral: 0, bad: 0 });
        break;

      default:
        throw new Error(`Unsupported variant prop value - ${option}`);
    }
  };

  const totalFeedback = () => {
    const countTotalFeedback =
      valuesFeedback.good + valuesFeedback.neutral + valuesFeedback.bad;
    return countTotalFeedback;
  };

  const resetFeedbackButton = () => {
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
      ((valuesFeedback.good + valuesFeedback.neutral) / totalFeedback()) * 100
    );
    return positivePercentage;
  };

  return (
    <div className={css.appWrapper}>
      <Description />

      <Options
        options={resetFeedbackButton()}
        onLeaveFeedback={handleClickButton}
      />
      {totalFeedback() > 0 ? (
        <Feedback
          good={valuesFeedback.good}
          neutral={valuesFeedback.neutral}
          bad={valuesFeedback.bad}
          total={totalFeedback()}
          positive={positiveFeedback()}
        />
      ) : (
        <Notification message="No feedback yet"></Notification>
      )}
    </div>
  );
};
