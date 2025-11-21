import { useState } from "react";

export default function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
      />

      <input 
        type="email"
        name="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}