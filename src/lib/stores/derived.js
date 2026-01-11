// NEW: Derived Stores for Task Statistics
// Derived stores automatically update when their source stores change
// They're perfect for computed values based on other stores

import { derived } from 'svelte/store';
import { taskStore } from './tasks.js';

// EXAMPLE: Derived store for total tasks count (COMPLETED - for reference)
export const totalTasksCount = derived(
	taskStore,
	$tasks => $tasks.length
);

// TODO: Create a derived store for completed tasks count
// Hint: Use derived() with taskStore as the source
// Filter tasks where completed === true and return the count
// Example structure:
// export const completedTasksCount = derived(
//   taskStore,
//   $tasks => {
//     // Your code here: filter and count completed tasks
//   }
// );
export const completedTasksCount = derived(
	taskStore,
	$tasks => {
		// Your code here
		return 0; // Replace with actual calculation
	}
);

// TODO: Create a derived store for completion percentage
// Should calculate: (completed / total) * 100
// Handle the case where total is 0 (return 0 to avoid division by zero)
// Hint: You can derive from taskStore or use multiple stores
export const completionPercentage = derived(
	taskStore,
	$tasks => {
		// Your code here
		return 0; // Replace with actual calculation
	}
);

// TODO: Create a derived store that groups tasks by priority
// Should return an object: { high: [], medium: [], low: [] }
// Each array contains the tasks of that priority level
export const tasksByPriority = derived(
	taskStore,
	$tasks => {
		// Your code here
		// Hint: Use reduce() or filter() for each priority
		return {
			high: [],
			medium: [],
			low: []
		};
	}
);

// BONUS TODO: Create a derived store that combines multiple stores
// This shows how to derive from multiple sources
// Example: Derive from both taskStore and another hypothetical store
// Hint: derived([store1, store2], ([$store1, $store2]) => { ... })
//
// Example use case: Combine tasks with user preferences or filters
// export const filteredTasksByPreference = derived(
//   [taskStore, userPreferenceStore],
//   ([$tasks, $preferences]) => {
//     // Combine data from both stores
//   }
// );

// LEARNING NOTE: Derived stores vs Reactive statements
//
// Derived stores ($: in components):
// - Can be shared across multiple components
// - Calculated once and cached until dependencies change
// - Better for global computed state
//
// Reactive statements ($: in script):
// - Component-local only
// - Recalculated on every reactive dependency change
// - Better for component-specific calculations
//
// Use derived stores when you need the same computed value in multiple places!
