import React, { useState, useEffect } from "react";
import CreateNote from "../Components/CreateNote";
import Note from "../Components/Note";
import axios from "axios";

const NotesPagePage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/notes`)
      .then((response) => {
        setNotes(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    console.log(id);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/notes/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    setNotes(notes.filter((noteItem) => id !== noteItem._id));
  }

  return (
    <>
      <CreateNote onAdd={addNote} />
      <div className="notesContainer">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={noteItem._id}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </>
  );
};

export default NotesPagePage;
