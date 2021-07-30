import React, { useState } from "react";

function CreateArea(props) {
  const [noteData, setNoteData] = useState({});

  function onInputChange(event) {
    const newValue = event.target.value;
    const name = event.target.name;
    // console.log (noteData);
    // console.log("changed" + name + newValue);
    setNoteData((prevData) => {
      return { ...prevData, [name]: newValue };
    });
  }
  function addNote() {
    const newNote = noteData;
    console.log(newNote);
    // props.addNote(newNote);
  }
  return (
    <div>
      <form>
        <input onChange={onInputChange} name="title" placeholder="Title" />
        <textarea
          onChange={onInputChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
