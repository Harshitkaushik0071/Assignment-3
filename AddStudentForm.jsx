import { useState } from "react";

export default function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || score === "") return;

    onAddStudent(name.trim(), score);
    setName("");
    setScore("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter score"
        min="0"
        max="100"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <button type="submit">Add Student</button>
    </form>
  );
}