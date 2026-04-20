import StudentRow from "./StudentRow";

export default function StudentTable({ students, onUpdateScore }) {
  return (
    <div className="table-card">
      <table className="student-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update Score</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              onUpdateScore={onUpdateScore}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}