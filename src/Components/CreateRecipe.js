import { useState } from "react";
import { CreatePost } from "../Utils/CreatePost";
import "./createRecipe.css";

export default function CreateRecipe() {
  const [inputs, setInputs] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { post, error } = await CreatePost(inputs);
      if (error) throw error;
      console.log(post);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <fieldset>
      <form onSubmit={handleSubmit}>
        <label>
          Bild URL:
          <input type="text" name="image" onChange={handleChange} />
        </label>

        <label>
          Titel:
          <input type="text" name="title" onChange={handleChange} />
        </label>

        <label>
          Benötigte Zeit:
          <input name="number" onChange={handleChange}></input>
        </label>

        <label>
          Schwierigkeit:
          <input name="text" onChange={handleChange}></input>
        </label>

        <label>
          Autor:
          <input name="text" onChange={handleChange}></input>
        </label>

        <label>
          Datum:
          <input name="number" onChange={handleChange}></input>
        </label>

        <label>
          Zutaten:
          <textarea name="number" onChange={handleChange}></textarea>
        </label>

        <label>
          Beschreibung:
          <textarea name="number" onChange={handleChange}></textarea>
        </label>

        <div className="terms">
          <label>
            Agree to terms
            <input type="checkbox" name="terms" onChange={handleChange} />
          </label>
        </div>
        <button>Submit</button>
      </form>
      <legend>
        <h1>React Form 2</h1>
      </legend>
    </fieldset>
  );
}