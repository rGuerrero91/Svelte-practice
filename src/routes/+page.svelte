<script>
	import { onMount } from 'svelte';
	import { taskStore } from '$lib/stores/tasks.js';
	import { loadTasks } from '$lib/utils/api.js';
	import TaskList from '$lib/components/TaskList.svelte';
	import StatsCard from '$lib/components/StatsCard.svelte';
	import AddTaskForm from '$lib/components/AddTaskForm.svelte';

	let tasks = [];
	let currentFilter = 'all';
	let filteredTasks = [];

	// Subscribe to the task store
	taskStore.subscribe(value => {
		tasks = value;
	});

	// TODO: Implement onMount to load tasks from the API
	// Hint: Use the loadTasks function and update the store
	onMount(async () => {
		// Your code here
	});

	// TODO: Create a reactive statement to filter tasks based on currentFilter
	// Hint: Use $: syntax to make this reactive
	// Filter should work with: 'all', 'todo', 'in-progress', 'done'
	$: {
		// Your filtering logic here
		// For now, just showing all tasks (incomplete!)
		filteredTasks = tasks;
	}

	function handleFilterChange(event) {
		// TODO: Update the currentFilter variable
		// Hint: Get the value from event.target.value
	}
</script>

<div class="container">
	<!-- Statistics Section -->
	<div class="stats-grid">
		<StatsCard tasks={tasks} />
	</div>

	<!-- Add Task Form -->
	<div class="section">
		<h2>Add New Task</h2>
		<AddTaskForm />
	</div>

	<!-- Filter Controls -->
	<div class="section">
		<h2>Tasks</h2>
		<div class="filter-bar">
			<label for="filter">Filter by status:</label>
			<select id="filter" on:change={handleFilterChange} bind:value={currentFilter}>
				<option value="all">All Tasks</option>
				<option value="todo">To Do</option>
				<option value="in-progress">In Progress</option>
				<option value="done">Done</option>
			</select>
		</div>
	</div>

	<!-- Task List -->
	<TaskList tasks={filteredTasks} />
</div>

<style>
	.stats-grid {
		margin-bottom: 2rem;
	}

	.section {
		margin-bottom: 2rem;
	}

	h2 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: var(--text-primary);
	}

	.filter-bar {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.filter-bar label {
		margin: 0;
		font-weight: 500;
	}

	.filter-bar select {
		width: auto;
		min-width: 200px;
	}
</style>
