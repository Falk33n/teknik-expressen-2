<script lang="ts">
	import { Topbar } from '$components/layout';
	import '$src/app.css';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<ModeWatcher />

<Topbar />

{@render children()}
