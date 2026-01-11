import { writable } from 'svelte/store';

// Create a custom store that extends the writable store
// NOTE: This is a WRITABLE store - it holds mutable state
// For computed/calculated values based on this store, see derived.js
// Derived stores automatically update when this store changes!
function createTaskStore() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		set,

		// Adds a new task with generated ID and timestamp
		addTask: (task) => {
			update(tasks => [...tasks, {
				...task,
				id: Date.now(),
				completed: false,
				createdAt: Date.now()
			}]);
		},

		// Removes a task by filtering out the matching ID
		deleteTask: (id) => {
			update(tasks => tasks.filter(task => task.id !== id));
		},

		// Toggles task completion status and updates status field accordingly
		toggleComplete: (id) => {
			update(tasks => tasks.map(task =>
				task.id === id
					? { ...task, completed: !task.completed, status: !task.completed ? 'done' : 'in-progress' }
					: task
			));
		},

		// Updates specific fields of a task by merging the updates object
		updateTask: (id, updates) => {
			update(tasks => tasks.map(task =>
				task.id === id ? { ...task, ...updates } : task
			));
		}
	};
}

// Export the store instance
export const taskStore = createTaskStore();
