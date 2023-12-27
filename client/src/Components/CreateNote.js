import React, { useState } from "react";
import {IoAddCircle} from "react-icons/io5"
import axios from "axios";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  async function submitNote(event){
    event.preventDefault();
    if(note.title==="")
    {
      alert("Please enter a valid title");
      return;
    }
    await axios.post(`${process.env.REACT_APP_BASE_URL}/notes`, note )
    .then((response) => 
    { 
      console.log(response)
      props.onAdd(note);
      setNote({
        title: "",
        content: ""
      })
    })
    .catch(err=>console.log(err))
  }

  return (
    <div className="form">
      <form className="create-note" >
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <IoAddCircle className="button" onClick={submitNote} />
      </form>
    </div>
  );
}

export default CreateNote;