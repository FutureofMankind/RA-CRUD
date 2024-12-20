import { useEffect, useState } from 'react';
import { pingAPI, getAPI, postAPI, deleteAPI } from './libs/api';
import Form from './components/Form/Form';
import Load from './components/Load/Load';
import NoteList from './components/NoteList/NoteList';
import ServerError from './components/ServerError/ServerError';
import Title from './components/Title/Title';

const App = () => {
  const [note, setNote] = useState('');
  const [list, setList] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    (async () => {
      const loaderTimeout = setTimeout(() => setStatus('pending'), 1000);
      const server = await pingAPI();
      clearTimeout(loaderTimeout);

      if (server.status === 520) {
        setStatus('error');
        return;
      }

      setStatus('success');
      const data = await getAPI();
      setList(data);
    })();
  }, []);

  const handleChange = (textNote: string) => {
    setNote(textNote);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    textNote: string
  ) => {
    event.preventDefault();
    if (!textNote) {
      setNote('');
      return;
    }

    await postAPI(note);
    const data = await getAPI();
    setList(data);
    setNote('');
  };

  const onRefresh = async () => {
    const data = await getAPI();
    setList(data);
    setNote('');
  };

  const onRemove = async (id: number) => {
    await deleteAPI(id);
    const data = await getAPI();
    setList(data);
  };

  return (
    <>
      {status === 'pending' && <Load />}
      {status === 'error' && <ServerError />}
      {status === 'success' && (
        <>
          <Title onRefresh={onRefresh} />
          <NoteList list={list} onRemove={onRemove} />
          <Form note={note} onChange={handleChange} onSubmit={handleSubmit} />
        </>
      )}
    </>
  );
};

export default App;