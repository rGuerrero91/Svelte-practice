<script>
	// NEW: Import derived stores for automatic computed values
	// Derived stores are a better pattern than manual reactive calculations
	// when the same computed value is needed in multiple components
	import {
		totalTasksCount,
		completedTasksCount,
		completionPercentage,
		tasksByPriority
	} from '$lib/stores/derived.js';

	// BONUS TODO: Import and use the Card component as a wrapper
	// This demonstrates how slots work in practice!
	// Uncomment the line below:
	// import Card from './Card.svelte';

	export let tasks = [];

	// OLD WAY: Manual reactive calculations (keep for reference)
	// This approach works but requires duplication across components
	// Uncomment to compare with derived stores:
	//
	// let totalTasks;
	// let completedTasks;
	// let completionPercentage;
	// let highPriorityCount;
	// let mediumPriorityCount;
	// let lowPriorityCount;
	//
	// $: {
	//   totalTasks = tasks.length;
	//   completedTasks = tasks.filter(t => t.completed).length;
	//   completionPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
	//   highPriorityCount = tasks.filter(t => t.priority === 'high').length;
	//   mediumPriorityCount = tasks.filter(t => t.priority === 'medium').length;
	//   lowPriorityCount = tasks.filter(t => t.priority === 'low').length;
	// }

	// NEW WAY: Using derived stores
	// TODO: Replace the manual calculations below with derived store values
	// Hint: Use the $ prefix to auto-subscribe to stores
	// Example: const totalTasks = $totalTasksCount;

	// TODO: Get totalTasks from the totalTasksCount derived store
	// Hint: $totalTasksCount
	let totalTasks = 0; // Replace this

	// TODO: Get completedTasks from the completedTasksCount derived store
	let completedTasks = 0; // Replace this

	// TODO: Get completion percentage from the completionPercentage derived store
	let completionPercent = 0; // Replace this

	// TODO: Get priority counts from the tasksByPriority derived store
	// Hint: $tasksByPriority.high.length, $tasksByPriority.medium.length, etc.
	let highPriorityCount = 0;
	let mediumPriorityCount = 0;
	let lowPriorityCount = 0;
</script>

<!-- BONUS TODO: Wrap the content below in a <Card> component -->
<!-- This will demonstrate how default slots work! -->
<!-- Example structure:
<Card>
	<div slot="header">
		<h2>Task Statistics</h2>
	</div>

	[Your stats grid content here]

	<div slot="footer">
		<button>Refresh</button>
	</div>
</Card>
-->

<div class="stats-container">
	<div class="stat-card">
		<div class="stat-icon" style="background-color: var(--primary);">
			<span>📋</span>
		</div>
		<div class="stat-content">
			<h3>Total Tasks</h3>
			<p class="stat-value">{totalTasks}</p>
		</div>
	</div>

	<div class="stat-card">
		<div class="stat-icon" style="background-color: var(--success);">
			<span>✓</span>
		</div>
		<div class="stat-content">
			<h3>Completed</h3>
			<p class="stat-value">{completedTasks}</p>
		</div>
	</div>

	<div class="stat-card">
		<div class="stat-icon" style="background-color: var(--secondary);">
			<span>%</span>
		</div>
		<div class="stat-content">
			<h3>Completion Rate</h3>
			<p class="stat-value">{completionPercent.toFixed(0)}%</p>
		</div>
	</div>

	<div class="stat-card priority-breakdown">
		<h3>By Priority</h3>
		<div class="priority-stats">
			<div class="priority-item">
				<span class="priority-label high">High</span>
				<span class="priority-count">{highPriorityCount}</span>
			</div>
			<div class="priority-item">
				<span class="priority-label medium">Medium</span>
				<span class="priority-count">{mediumPriorityCount}</span>
			</div>
			<div class="priority-item">
				<span class="priority-label low">Low</span>
				<span class="priority-count">{lowPriorityCount}</span>
			</div>
		</div>
	</div>
</div>

<style>
	.stats-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.stat-card {
		background: var(--bg-secondary);
		border-radius: 0.5rem;
		padding: 1.5rem;
		box-shadow: 0 1px 3px var(--shadow);
		display: flex;
		gap: 1rem;
	}

	.stat-icon {
		width: 3rem;
		height: 3rem;
		border-radius: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
	}

	.stat-content {
		flex: 1;
	}

	.stat-content h3 {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--text-secondary);
		margin: 0 0 0.5rem 0;
	}

	.stat-value {
		font-size: 1.875rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0;
	}

	.priority-breakdown {
		flex-direction: column;
		gap: 0.75rem;
	}

	.priority-breakdown h3 {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--text-secondary);
		margin: 0;
	}

	.priority-stats {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.priority-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.priority-label {
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		font-size: 0.75rem;
		font-weight: 600;
		color: white;
		text-transform: uppercase;
	}

	.priority-label.high {
		background-color: var(--danger);
	}

	.priority-label.medium {
		background-color: var(--warning);
	}

	.priority-label.low {
		background-color: var(--success);
	}

	.priority-count {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--text-primary);
	}
</style>
