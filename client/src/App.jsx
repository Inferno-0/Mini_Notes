import { useEffect, useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';

// API base URL comes from frontend environment variables.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const fetchNotes = async () => {
    try {
      setError('');
      const response = await fetch(`${API_URL}/notes`);

      if (!response.ok) {
        throw new Error('Unable to fetch notes');
      }

      const data = await response.json();
      setNotes(data);
    } catch (fetchError) {
      setError(fetchError.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleAddNote = async (newNote) => {
    try {
      setError('');
      setIsSubmitting(true);

      const response = await fetch(`${API_URL}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote),
      });

      if (!response.ok) {
        throw new Error('Unable to save note');
      }

      const createdNote = await response.json();
      setNotes((prevNotes) => [createdNote, ...prevNotes]);
      return true;
    } catch (createError) {
      setError(createError.message);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      setError('');
      const response = await fetch(`${API_URL}/notes/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Unable to delete note');
      }

      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (deleteError) {
      setError(deleteError.message);
    }
  };

  return (
    <main className="app">
      <header>
        <h1>Mini Notes App</h1>
        <p>Create, view, and delete notes with a simple MERN stack setup.</p>
      </header>

      <NoteForm onAddNote={handleAddNote} isSubmitting={isSubmitting} />

      {error && <p className="status-text error">{error}</p>}

      <NoteList notes={notes} onDeleteNote={handleDeleteNote} isLoading={isLoading} />
    </main>
  );
}

export default App;
