import refresh from '../../assets/refresh.svg';
import './title.css';

interface ITitleProps {
  onRefresh: () => void;
}

const Title = ({ onRefresh }: ITitleProps) => {
  return (
    <div className="title">
      <h1 className="title__text">Notes</h1>
      <div className="title__btn" onClick={onRefresh}>
        <img className="title__refresh-btn" src={refresh} alt="refresh" />
      </div>
    </div>
  );
};

export default Title;