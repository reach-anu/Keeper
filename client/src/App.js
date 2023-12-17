import React, {useState,useEffect} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CreateNote from "./Components/CreateNote";
import Note from "./Components/Note";
import axios from 'axios'
function App() {
  const [notes, setNotes] = useState([]);

  useEffect(()=> {
      axios.get(`${process.env.REACT_APP_BASE_URL}/notes`).
      then((response) => {
        setNotes(response.data);
      }).
    catch((e) => console.log(e));
  }, [])

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  // function deleteNote(id) {
  //   setNotes(prevNotes => {
  //     return prevNotes.filter((noteItem, index) => {
  //       return index !== id;
  //     });
  //   });
  // }
  return (
    <div >
      <Header />
      <CreateNote onAdd={addNote} />
      <div className="notesContainer">
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            // onDelete={deleteNote}
          />
        );
      })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
