import NoteCard from './NoteCard';

function NoteList({ notes, onDeleteNote, isLoading }) {
  if (isLoading) {
    return <p className="status-text">Loading notes...</p>;
  }

  if (!notes.length) {
    return <p className="status-text">No notes found. Add your first note.</p>;
  }

  return (
    <section className="note-list">
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} onDelete={onDeleteNote} />
      ))}
    </section>
  );
}

export default NoteList;
