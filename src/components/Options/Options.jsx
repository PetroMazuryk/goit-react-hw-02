import css from './Options.module.css';

export const Options = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonWrapper}>
      <ul className={css.buttonList}>
        {options.map(option => (
          <li className="listItem" key={option}>
            <button
              className={css.button}
              type="button"
              name={option}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
