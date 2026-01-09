<script>
	export let tasks = [];

	// TODO: Calculate the total number of tasks
	// Hint: tasks.length
	let totalTasks;

	// TODO: Calculate the number of completed tasks
	// Hint: Use filter to count tasks where completed === true
	let completedTasks;

	// TODO: Calculate the completion percentage
	// Hint: (completedTasks / totalTasks) * 100, handle division by zero
	let completionPercentage;

	// TODO: Count tasks by priority (high, medium, low)
	// Hint: Use filter or reduce to count each priority level
	let highPriorityCount;
	let mediumPriorityCount;
	let lowPriorityCount;

	// TODO: Create reactive statements for all the above calculations
	// Hint: Use $: syntax to make them reactive to tasks changes
	$: {
		// Your calculations here
		totalTasks = 0;
		completedTasks = 0;
		completionPercentage = 0;
		highPriorityCount = 0;
		mediumPriorityCount = 0;
		lowPriorityCount = 0;
	}
</script>

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
			<p class="stat-value">{completionPercentage.toFixed(0)}%</p>
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
