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

		// TODO: Implement the addTask method
		// Should:
		// 1. Generate a unique ID for the task (use Date.now() or crypto.randomUUID())
		// 2. Add a 'completed' field set to false
		// 3. Add a 'createdAt' field with current timestamp
		// 4. Add the new task to the store
		addTask: (task) => {
			// Your code here
		},

		// TODO: Implement the deleteTask method
		// Should remove the task with the matching id from the store
		deleteTask: (id) => {
			// Your code here
		},

		// TODO: Implement the toggleComplete method
		// Should:
		// 1. Find the task by id
		// 2. Toggle its 'completed' status
		// 3. If completed, set status to 'done'
		// 4. If not completed, keep the current status (or set to 'in-progress')
		toggleComplete: (id) => {
			// Your code here
		},

		// TODO: Implement the updateTask method
		// Should update a task with new data
		// Takes an id and an object with fields to update
		updateTask: (id, updates) => {
			// Your code here
		}
	};
}

// Export the store instance
export const taskStore = createTaskStore();
