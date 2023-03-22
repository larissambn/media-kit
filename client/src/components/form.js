import { useState } from "react";
import axios from "axios";

export function UserForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    number: "",
    event : "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:3000/media-kit/", form);

      window.location.reload(true);

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className= "d-flex justify-content-center">
    <div className="form-group mx-auto w-25 p-1 h-25">
      <h1 className="text-center"> Profile</h1>
      <form onSubmit={handleSubmit}>
        {" "}
        <label htmlFor="name" class="form-group colFormLabelLg">Name</label>{" "}
        <p>
          {" "}
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            class="form-control"
          />
        </p>{" "}
        <label htmlFor="email" class="form-group">E-mail</label>{" "}
        <p>
          {" "}
          <input
            id="email"
            name="email"
            type="text"
            value={form.email}
            onChange={handleChange}
            class="form-control"
          />
        </p>{" "}
        <label htmlFor="username" class="form-group">Instagram Username</label>
        <p>
          {" "}
          <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" 
         id="username"
         name="username"
         value={form.instagram_username}
         onChange={handleChange}
       />
      </div>
        </p>{" "}
        <label htmlFor="number" class="form-group">Phone Number</label>
        <p>
          {" "}
          <input
            id="number"
            name="number"
            type="text"
            value={form.number}
            onChange={handleChange}
            class="form-control"
          />
        </p>{" "}
        <label htmlFor="event" class="form-group">Event</label>
        <p>
          {" "}
    <select multiple class="form-control"             
            id="event"
            name="event"
            type="text"
            value={form.event}
            onChange={handleChange} >
      <option>Hostess</option>
      <option>Cerimonal</option>
      <option>Reception</option>
    </select>
        </p>{" "}
        <button type="submit" id="btn" class="btn btn-primary">
          Send
        </button>
      </form>
    </div>
    </div>
  );
}


