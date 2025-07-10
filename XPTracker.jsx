
import { useState } from "react";

const tasks = [
  { label: "Workout", xp: 10 },
  { label: "Clean Eating", xp: 10 },
  { label: "Study 2hr", xp: 10 },
  { label: "Skincare", xp: 10 },
  { label: "<2.5hr Screen Time", xp: 10 },
  { label: "Sleep Before 10PM", xp: 10 },
  { label: "Journaling", xp: 10 },
];

export default function XPTracker() {
  const [completed, setCompleted] = useState(Array(tasks.length).fill(false));
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);

  const toggleTask = (index) => {
    const updated = [...completed];
    updated[index] = !updated[index];
    setCompleted(updated);

    const change = updated[index] ? tasks[index].xp : -tasks[index].xp;
    const newXp = xp + change;
    setXp(newXp);
    setLevel(Math.floor(newXp / 100) + 1);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", fontFamily: "Arial" }}>
      <h1>🧍 Solo Leveling XP Tracker</h1>
      <div style={{ marginBottom: "10px" }}>Level: {level}</div>
      <div style={{ marginBottom: "20px" }}>XP: {xp}</div>
      {tasks.map((task, index) => (
        <div key={index} style={{
          backgroundColor: completed[index] ? "#a0f0a0" : "#f0f0f0",
          padding: "10px",
          marginBottom: "8px",
          cursor: "pointer",
          borderRadius: "8px"
        }}
        onClick={() => toggleTask(index)}>
          {task.label} (+{task.xp} XP)
        </div>
      ))}
      <button onClick={() => {
        setCompleted(Array(tasks.length).fill(false));
        setXp(0);
        setLevel(1);
      }} style={{
        marginTop: "20px",
        padding: "10px",
        width: "100%",
        backgroundColor: "#222",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}>Reset Tracker</button>
    </div>
  );
}
