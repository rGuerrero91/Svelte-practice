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

// TODO: Implement the loadTasks function
// Should:
// 1. Simulate an API delay with setTimeout (200-500ms)
// 2. Return a Promise that resolves with SAMPLE_TASKS
// 3. You can add error simulation (10% chance?) for practice
export async function loadTasks() {
	// Your code here
	// Hint: return new Promise((resolve, reject) => { ... })
}

// TODO: Implement the saveTask function
// Should:
// 1. Take a task object as parameter
// 2. Simulate API delay
// 3. Return a Promise that resolves with the task
// 4. In a real app, this would POST to an API endpoint
export async function saveTask(task) {
	// Your code here
}

// TODO: Implement the removeTask function
// Should:
// 1. Take a task id as parameter
// 2. Simulate API delay
// 3. Return a Promise that resolves with success message
// 4. In a real app, this would DELETE from an API endpoint
export async function removeTask(id) {
	// Your code here
}

// Helper function to simulate network delay (already implemented for you!)
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
