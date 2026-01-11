// Mock API utilities for the task dashboard
// In a real app, these would make actual API calls

// Sample initial tasks
const SAMPLE_TASKS = [
	{
		id: 1,
		title: 'Complete project proposal',
		description: 'Write and submit the Q1 project proposal document',
		priority: 'high',
		status: 'in-progress',
		completed: false,
		createdAt: Date.now() - 86400000 // 1 day ago
	},
	{
		id: 2,
		title: 'Review code PRs',
		description: 'Review pending pull requests from the team',
		priority: 'medium',
		status: 'todo',
		completed: false,
		createdAt: Date.now() - 172800000 // 2 days ago
	},
	{
		id: 3,
		title: 'Update documentation',
		description: 'Update the API documentation with new endpoints',
		priority: 'low',
		status: 'done',
		completed: true,
		createdAt: Date.now() - 259200000 // 3 days ago
	}
];

// Simulates fetching tasks from an API with network delay
export async function loadTasks() {
	await delay(300);
	return SAMPLE_TASKS;
}

// Simulates saving a task to an API (would be POST request in real app)
export async function saveTask(task) {
	await delay(300);
	return task;
}

// Simulates deleting a task from an API (would be DELETE request in real app)
export async function removeTask(id) {
	await delay(300);
	return { success: true, id };
}

// Helper function to simulate network delay (already implemented for you!)
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
