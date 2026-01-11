<script>
	import { onMount } from 'svelte';
	import { taskStore } from '$lib/stores/tasks.js';
	import { loadTasks } from '$lib/utils/api.js';
	import TaskList from '$lib/components/TaskList.svelte';
	import StatsCard from '$lib/components/StatsCard.svelte';
	import AddTaskForm from '$lib/components/AddTaskForm.svelte';
	// NEW: Import transitions for section animations
	import { fade } from 'svelte/transition';
	// NEW: Import Modal component to demonstrate named slots
	import Modal from '$lib/components/Modal.svelte';

	let tasks = [];
	let currentFilter = 'all';
	let filteredTasks = [];

	// NEW: Modal state for demonstrating slots
	let showInfoModal = false;

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

	// NEW: Event handlers for custom events from TaskList component
	// These connect the component events to the task store

	// TODO: Implement handleTaskToggle to update the store when a task is toggled
	// Hint: Use event.detail.id to get the task ID
	// Call: taskStore.toggleComplete(event.detail.id)
	function handleTaskToggle(event) {
		// Your code here
	}

	// TODO: Implement handleTaskDelete to update the store when a task is deleted
	// Hint: Similar pattern to handleTaskToggle
	// Call: taskStore.deleteTask(event.detail.id)
	function handleTaskDelete(event) {
		// Your code here
	}

	// BONUS TODO: Implement handleTaskEdit for future editing functionality
	// This can log to console for now
	// Hint: console.log('Edit task:', event.detail.task);
</script>

<div class="container">
	<!-- Statistics Section -->
	<!-- NEW: Added fade transition for smooth appearance -->
	<div class="stats-grid" transition:fade>
		<StatsCard tasks={tasks} />
	</div>

	<!-- Add Task Form -->
	<!-- TODO: Add separate in and out transitions! -->
	<!-- Try: in:fade={{ duration: 300 }} out:fade={{ duration: 150 }} -->
	<div class="section">
		<h2>Add New Task</h2>
		<AddTaskForm />
	</div>

	<!-- Filter Controls -->
	<!-- TODO: Add a fade transition with custom parameters -->
	<!-- Experiment with different durations and delays! -->
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
	<!-- NEW: Added event listeners to handle custom events from TaskList -->
	<!-- TODO: Add on:delete={handleTaskDelete} event listener -->
	<!-- BONUS TODO: Add on:edit={handleTaskEdit} for future editing feature -->
	<TaskList tasks={filteredTasks} on:toggle={handleTaskToggle} />

	<!-- NEW: Info button to demonstrate Modal with slots -->
	<!-- TODO: Style this button to match your design -->
	<div class="info-section">
		<button class="btn btn-secondary" on:click={() => showInfoModal = true}>
			ℹ️ About This App
		</button>
	</div>
</div>

<!-- NEW: Modal demonstrating named slots -->
<!-- This modal shows how to use default and named slots for flexible content -->
<Modal isOpen={showInfoModal} on:close={() => showInfoModal = false}>
	<!-- TODO: Add custom header content using the "header" named slot -->
	<!-- Hint: <div slot="header"><h2>Custom Header</h2></div> -->
	<!-- If you don't add a header slot, it will use the title prop -->

	<!-- Default slot content (main body) -->
	<!-- TODO: Add your own content here to describe the app -->
	<div class="modal-content-text">
		<h3>Welcome to the Svelte Task Dashboard!</h3>
		<p>This is a learning project built with SvelteKit. Key features:</p>
		<ul>
			<li>✨ Smooth transitions and animations</li>
			<li>🎯 Custom events for component communication</li>
			<li>📊 Derived stores for computed values</li>
			<li>🎨 Reusable components with slots</li>
		</ul>
		<p>Complete the TODOs in the code to learn Svelte essentials!</p>
	</div>

	<!-- TODO: Add custom footer with action buttons using the "footer" named slot -->
	<!-- Hint: <div slot="footer"><button>Got it!</button></div> -->
	<!-- If you don't add a footer slot, the modal won't have a footer section -->
</Modal>

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

	.info-section {
		margin-top: 2rem;
		text-align: center;
	}

	:global(.modal-content-text) {
		line-height: 1.6;
	}

	:global(.modal-content-text h3) {
		margin-top: 0;
		color: var(--text-primary);
	}

	:global(.modal-content-text ul) {
		margin: 1rem 0;
		padding-left: 1.5rem;
	}

	:global(.modal-content-text li) {
		margin: 0.5rem 0;
		color: var(--text-secondary);
	}
</style>
