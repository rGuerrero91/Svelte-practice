<script>
	import { taskStore } from '$lib/stores/tasks.js';

	let title = '';
	let description = '';
	let priority = 'medium';
	let status = 'todo';
	let errors = {};

	// TODO: Implement form validation
	// Should check:
	// - title is not empty and at least 3 characters
	// - description is not empty
	// Return true if valid, false otherwise
	function validateForm() {
		errors = {};
		// Your validation logic here

		return true; // This should return the actual validation result
	}

	// TODO: Implement the handleSubmit function
	// Should:
	// 1. Validate the form
	// 2. If valid, create a task object with the form data
	// 3. Call taskStore.addTask() with the new task
	// 4. Reset the form fields
	// 5. If invalid, keep the errors object populated
	function handleSubmit() {
		// Your code here
	}

	function resetForm() {
		title = '';
		description = '';
		priority = 'medium';
		status = 'todo';
		errors = {};
	}
</script>

<div class="form-container card">
	<form on:submit|preventDefault={handleSubmit}>
		<div class="form-group">
			<label for="title">
				Task Title *
				{#if errors.title}
					<span class="error-text">{errors.title}</span>
				{/if}
			</label>
			<input
				id="title"
				type="text"
				bind:value={title}
				placeholder="Enter task title"
				class:error={errors.title}
			/>
		</div>

		<div class="form-group">
			<label for="description">
				Description *
				{#if errors.description}
					<span class="error-text">{errors.description}</span>
				{/if}
			</label>
			<textarea
				id="description"
				bind:value={description}
				placeholder="Describe the task"
				rows="3"
				class:error={errors.description}
			/>
		</div>

		<div class="form-row">
			<div class="form-group">
				<label for="priority">Priority</label>
				<select id="priority" bind:value={priority}>
					<option value="low">Low</option>
					<option value="medium">Medium</option>
					<option value="high">High</option>
				</select>
			</div>

			<div class="form-group">
				<label for="status">Status</label>
				<select id="status" bind:value={status}>
					<option value="todo">To Do</option>
					<option value="in-progress">In Progress</option>
					<option value="done">Done</option>
				</select>
			</div>
		</div>

		<div class="form-actions">
			<button type="submit" class="btn btn-primary">
				Add Task
			</button>
			<button type="button" class="btn btn-secondary" on:click={resetForm}>
				Reset
			</button>
		</div>
	</form>
</div>

<style>
	.form-container {
		margin-bottom: 2rem;
	}

	.form-group {
		margin-bottom: 1rem;
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.error-text {
		color: var(--danger);
		font-size: 0.75rem;
		margin-left: 0.5rem;
	}

	input.error,
	textarea.error {
		border-color: var(--danger);
	}

	.form-actions {
		display: flex;
		gap: 0.75rem;
		margin-top: 1.5rem;
	}

	textarea {
		resize: vertical;
		min-height: 80px;
	}
</style>
