import css from './App.module.css';
import { Description } from './components/Description/Description';
import { useState, useEffect } from 'react';
import { Options } from './components/Options/Options';
import { Feedback } from './components/Feedback/Feedback';
import { Notification } from './components/Notification/Notification';

const initialTypesFeedback = () => {
  const savedFeedback = window.localStorage.getItem('saved-value');
  return savedFeedback !== null
    ? JSON.parse(savedFeedback)
    : {
        good: 0,
        neutral: 0,
        bad: 0,
      };
};

export const App = () => {
  const [valuesFeedback, setValuesFeedback] = useState(initialTypesFeedback);

  useEffect(() => {
    window.localStorage.setItem('saved-value', JSON.stringify(valuesFeedback));
  }, [valuesFeedback]);

  const handleClickButton = option => {
    setValuesFeedback({
      ...valuesFeedback,
      [option]: valuesFeedback[option] + 1,
    });
  };

  const handleClickButtonReset = () => {
    setValuesFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = () => {
    const countTotalFeedback = valuesFeedback.good + valuesFeedback.neutral + valuesFeedback.bad;
    return countTotalFeedback;
  };

  const feedbackButton = () => {
    const options = ['good', 'neutral', 'bad'];
    return options;
  };
  const positiveFeedback = () => {
    const positivePercentage = Math.round(((valuesFeedback.good + valuesFeedback.neutral) / totalFeedback()) * 100);
    return positivePercentage;
  };

  return (
    <div className={css.appWrapper}>
      <Description />

      <Options
        total={totalFeedback()}
        options={feedbackButton()}
        onLeaveFeedback={handleClickButton}
        reset={handleClickButtonReset}
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
