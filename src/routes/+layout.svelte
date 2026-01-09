<script>
	import '../app.css';
</script>

<header>
	<div class="container">
		<h1 style="color: var(--primary); margin-bottom: 0.5rem;">Task Dashboard</h1>
		<p style="color: var(--text-secondary); font-size: 0.875rem;">
			Manage your tasks efficiently
		</p>
	</div>
</header>

<main>
	<slot />
</main>

<style>
	header {
		background: var(--bg-secondary);
		border-bottom: 1px solid var(--border);
		padding: 2rem 0;
		margin-bottom: 2rem;
	}

	h1 {
		font-size: 2rem;
		font-weight: 700;
	}
</style>
