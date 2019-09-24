<script>
	import Header from './components/Header.svelte';
	import AddTask from './components/AddTask.svelte';
	import TaskList from './components/TaskList.svelte';
	import Footer from './components/Footer.svelte';

	export let title;
</script>

<style lang="scss">
	@import './styles/global.scss';

	.app-container {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		height: 100%;
	}
</style>

<!-- HTML component -->
<div class="app-container">
	<Header title="{ title }" />
	<AddTask />
	<hr style="width: 100%;margin: .1em;">
	<hr style="width: 100%;margin: .1em;">
	<hr style="width: 100%;margin: .1em;">
	<TaskList />
	<Footer />
</div>
