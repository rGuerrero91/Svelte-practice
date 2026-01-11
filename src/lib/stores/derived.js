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

// Counts tasks marked as completed
export const completedTasksCount = derived(
	taskStore,
	$tasks => $tasks.filter(task => task.completed).length
);

// Calculates completion percentage (handles zero division)
export const completionPercentage = derived(
	taskStore,
	$tasks => {
		const total = $tasks.length;
		if (total === 0) return 0;
		const completed = $tasks.filter(task => task.completed).length;
		return Math.round((completed / total) * 100);
	}
);

// Groups tasks by priority level
export const tasksByPriority = derived(
	taskStore,
	$tasks => ({
		high: $tasks.filter(task => task.priority === 'high'),
		medium: $tasks.filter(task => task.priority === 'medium'),
		low: $tasks.filter(task => task.priority === 'low')
	})
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
