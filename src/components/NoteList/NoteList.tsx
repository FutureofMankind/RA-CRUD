import NoteItem from '../NoteItem/NoteItem';
import INote from '../../models/INote';
import './noteList.css';

interface INoteListProps {
  list: INote[];
  onRemove: (id: number) => void;
}

const NoteList = ({ list, onRemove }: INoteListProps) => {
  const notes = list.map((item: INote) => {
    return (
      <NoteItem key={item.id} id={item.id} content={item.content} onRemove={onRemove} />
    );
  });

  return <ul className="note-list">{notes}</ul>;
};

export default NoteList;