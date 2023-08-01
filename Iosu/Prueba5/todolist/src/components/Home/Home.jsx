import "./Home.css";
import React, { useState } from "react";
import Clock from "../Clock/Clock";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("low");
  const [contentFilter, setContentFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, { content: newTask, priority }]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleEditTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleContentFilterChange = (e) => {
    setContentFilter(e.target.value);
  };

  const handlePriorityFilterChange = (e) => {
    setPriorityFilter(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (
      priorityFilter === "all" ||
      (priorityFilter === "high" && task.priority === "high") ||
      (priorityFilter === "medium" && task.priority === "medium") ||
      (priorityFilter === "low" && task.priority === "low")
    ) {
      return task.content.includes(contentFilter);
    }
    return false;
  });

  return (
    <div>
      <Clock />
      <div className="filters">
        <label htmlFor="contentFilter">Filtrar por contenido:</label>
        <input
          type="text"
          id="contentFilter"
          value={contentFilter}
          onChange={handleContentFilterChange}
        />
        <label htmlFor="priorityFilter">Filtrar por prioridad:</label>
        <select
          id="priorityFilter"
          value={priorityFilter}
          onChange={handlePriorityFilterChange}
        >
          <option value="all">Todas las prioridades</option>
          <option value="low">Baja</option>
          <option value="medium">Media</option>
          <option value="high">Alta</option>
        </select>
      </div>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva tarea"
        />
        <select value={priority} onChange={handlePriorityChange}>
          <option value="low">Baja</option>
          <option value="medium">Media</option>
          <option value="high">Alta</option>
        </select>
        <button type="submit">Agregar</button>
      </form>
      <ul className="task-list">
        {filteredTasks.map((task, index) => (
          <li key={index} className={`task ${task.priority}`}>
            <span className="task-number">{index + 1}.</span>
            <span className="task-content">{task.content}</span>
            <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
            <button onClick={() => handleEditTask(index, task)}>Editar</button>
          </li>
        ))}
      </ul>
      <button onClick={() => window.print()}>Imprimir Lista</button>
    </div>
  );
}

export default Home;
