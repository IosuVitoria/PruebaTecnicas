import React, { useState } from "react";
import Clock from "../Clock/Clock";
import "./Home.css";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("low");
  const [contentFilter, setContentFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [editIndex, setEditIndex] = useState(-1);

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

  const handleEditTask = (index, task) => {
    setEditIndex(index);
    setNewTask(task.content);
    setPriority(task.priority);
  };

  const handleSaveEditedTask = (e, index) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      const newTasks = [...tasks];
      newTasks[index] = { content: newTask, priority };
      setTasks(newTasks);
      setEditIndex(-1);
      setNewTask("");
    }
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
    <div className="App">
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
      <form className="form-container" onSubmit={handleAddTask}>
        <div className="input-container">
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
        </div>
        <button className="button-action" type="submit">Agregar</button>
      </form>
      <div className="task-list">
        {filteredTasks.map((task, index) => (
          <div key={index} className={`task ${task.priority}`}>
            <span className="task-number">{index + 1}.</span>
            {editIndex === index ? (
              <form onSubmit={(e) => handleSaveEditedTask(e, index)}>
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Editar tarea"
                />
                <select value={priority} onChange={handlePriorityChange}>
                  <option value="low">Baja</option>
                  <option value="medium">Media</option>
                  <option value="high">Alta</option>
                </select>
                <button className="button-action" type="submit">Guardar</button>
              </form>
            ) : (
              <>
                <div className="task-content">{task.content}</div>
                <div className="task-actions">
                  <button className="button-action" onClick={() => handleDeleteTask(index)}>Eliminar</button>
                  <button className="button-action" onClick={() => handleEditTask(index, task)}>Editar</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <button id="print-button" onClick={() => window.print()}>Imprimir Lista</button>
    </div>
  );
}

export default Home;
