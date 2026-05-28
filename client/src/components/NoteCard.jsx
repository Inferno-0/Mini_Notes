function NoteCard({ note, onDelete }) {
  const createdOn = new Date(note.createdAt).toLocaleString();

  return (
    <article className="note-card">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <small>Created: {createdOn}</small>
      <button type="button" onClick={() => onDelete(note._id)}>
        Delete
      </button>
    </article>
  );
}

export default NoteCard;
