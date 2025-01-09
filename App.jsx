import React, { useState } from 'react';
import './App.css'; // For custom styles

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    if (newNote.trim()) {
      const currentTime = new Date().toLocaleString(); // Get the current date and time
      setNotes([...notes, { note: newNote, time: currentTime }]);
      setNewNote('');
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">My Creative Notes</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={handleAddNote} className="add-btn">
          Add Note
        </button>
      </div>

      <div className="notes-list">
        {notes.length > 0 ? (
          notes.map((noteObj, index) => (
            <div className="note" key={index}>
              <span>{noteObj.note}</span>
              <span className="note-time">{noteObj.time}</span>
              <button className="delete-btn" onClick={() => handleDeleteNote(index)}>
                🗑️
              </button>
            </div>
          ))
        ) : (
          <p className="empty-message">No notes yet. Add one!</p>
        )}
      </div>
    </div>
  );
}

export default App;
