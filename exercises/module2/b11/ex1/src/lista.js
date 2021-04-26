import React from 'react';
import './App.css';

const tasks = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];

const DoTasks = () => ( <ul>{tasks.map(task => <li>{task}</li>)}</ul>)

export default DoTasks;