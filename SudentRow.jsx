export default function StudentRow({ student, onUpdateScore }) {
  const isPass = student.score >= 40;

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.score}</td>
      <td>
        <span className={isPass ? "status pass" : "status fail"}>
          {isPass ? "Pass" : "Fail"}
        </span>
      </td>
      <td>
        <input
          type="number"
          min="0"
          max="100"
          value={student.score}
          onChange={(e) => onUpdateScore(student.id, e.target.value)}
          className="score-input"
        />
      </td>
    </tr>
  );
}