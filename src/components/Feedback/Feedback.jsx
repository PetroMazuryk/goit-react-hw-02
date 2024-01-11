import css from './Feedback.module.css';

export const Feedback = ({ good, neutral, bad }) => {
  return (
    <div className={css.feedbackWrapper}>
      <ul className={css.statisticList}>
        <li className={css.statisticItem}>
          <p className={css.statisticText}>
            Good: <span className={css.statisticNumber}>{good}</span>
          </p>
        </li>
        <li className={css.statisticItem}>
          <p className={css.statisticText}>
            Neutral: <span className={css.statisticNumber}>{neutral}</span>
          </p>
        </li>
        <li className={css.statisticItem}>
          <p className={css.statisticText}>
            Bad: <span className={css.statisticNumber}>{bad}</span>
          </p>
        </li>
      </ul>
    </div>
  );
};
