import { createSlice } from "@reduxjs/toolkit";

// Helper function to load tasks from localStorage
const loadTasksFromStorage = () => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks
    ? JSON.parse(storedTasks)
    : { toDoTasks: [], completedTasks: [] };
};

// Helper function to save tasks to localStorage
const saveTasksToStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: loadTasksFromStorage(), // Load initial state from localStorage
  reducers: {
    addTask: (state, action) => {
      state.toDoTasks.push({ ...action.payload, completed: false });
      saveTasksToStorage(state); // Save updated state to localStorage
    },
    toggleTaskCompletion: (state, action) => {
      const { index, isCompleted } = action.payload;
      if (isCompleted) {
        const task = state.completedTasks[index];
        state.completedTasks = state.completedTasks.filter(
          (_, i) => i !== index
        );
        state.toDoTasks.push({ ...task, completed: false });
      } else {
        const task = state.toDoTasks[index];
        state.toDoTasks = state.toDoTasks.filter((_, i) => i !== index);
        state.completedTasks.push({ ...task, completed: true });
      }
      saveTasksToStorage(state); // Save updated state to localStorage
    },
    deleteTask: (state, action) => {
      const { index, isCompleted } = action.payload;
      if (isCompleted) {
        state.completedTasks = state.completedTasks.filter(
          (_, i) => i !== index
        );
      } else {
        state.toDoTasks = state.toDoTasks.filter((_, i) => i !== index);
      }
      saveTasksToStorage(state); // Save updated state to localStorage
    },
  },
});

export const { addTask, toggleTaskCompletion, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
