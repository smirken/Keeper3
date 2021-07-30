import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [noteCounter, setNoteCounter] = useState(0);

  function addNote(newNote) {
    console.log("adding note");
    console.log(newNote);
    setNoteCounter((prevCounter) => prevCounter + 1);
    // newNote.key = "Note" + noteCounter;
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  }

  function deleteNote() {
    console.log("delete a note");
    console.log();
  }

  notes.length ||
    addNote({
      key: noteCounter,
      idkey: noteCounter,
      title: "defaultNote",
      content: "random Content"
    });

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {/* <Note key={991} title="Note title" content="Note content" /> */}
      {notes.map((note, index) => (
        <Note
          onDelete={deleteNote}
          key={note.key}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
