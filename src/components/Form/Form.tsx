import send from '../../assets/send.png';
import './form.css';

interface IFormProps {
  note: string;
  onChange: (textNote: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>, textNote: string) => void;
}

const Form = ({ note, onChange, onSubmit }: IFormProps) => {
  return (
    <form className="form" onSubmit={(event) => onSubmit(event, note.trim())}>
      <h3 className="form__title">New Note</h3>
      <label htmlFor="note" className="form__label visually-hidden">
        New Note
      </label>
      <textarea
        id="note"
        className="form__textarea"
        required
        value={note}
        onChange={(event) => onChange(event.target.value)}
      />
      <button className="form__button" type="submit">
        <img src={send} alt="send" className="form__button-img" />
      </button>
    </form>
  );
};

export default Form;