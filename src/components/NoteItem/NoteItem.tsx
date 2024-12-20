import './noteItem.css';

interface INoteItemProps {
  id: number;
  content: string;
  onRemove: (id: number) => void;
}

const NoteItem = ({ id, content, onRemove }: INoteItemProps) => {
  return (
    <li className="note-item">
      <p className="note-item__content">{content}</p>
      <div className="note-item__close-btn" onClick={() => onRemove(id)}>
        <span className="note-item__close-btn_first"></span>
        <span className="note-item__close-btn_second"></span>
      </div>
    </li>
  );
};

export default NoteItem;