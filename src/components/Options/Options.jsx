import css from './Options.module.css';

export const Options = ({ options, total, onLeaveFeedback, reset }) => {
  return (
    <div className={css.buttonWrapper}>
      <ul className={css.buttonList}>
        {options.map(option => (
          <li className="listItem" key={option}>
            <button
              className={css.button}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      {total > 0 && (
        <button onClick={reset} className={css.button}>
          Reset
        </button>
      )}
    </div>
  );
};
