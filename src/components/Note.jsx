import React from "react";

function Note(props) {
  const deleteMe = props.onDelete;
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button value={props.idkey} onClick={props.onDelete}>
        DELETE
      </button>
    </div>
  );
}

export default Note;
