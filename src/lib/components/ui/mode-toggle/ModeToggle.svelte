<script lang="ts">
	import { Button } from '$components/ui/button';
	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger,
	} from '$components/ui/tooltip';
	import { Moon, Sun } from 'lucide-svelte/icons';
	import { mode, toggleMode } from 'mode-watcher';

	const Icon = $derived($mode === 'light' ? Sun : Moon);
	const currentMode = $derived(
		$mode === 'light'
			? 'Change the theme to dark mode'
			: 'Change the theme to light mode',
	);
</script>

<TooltipProvider>
	<Tooltip>
		<TooltipTrigger onclick={toggleMode}>
			{#snippet child(props)}
				<Button
					variant="outline"
					size="icon"
					aria-label={currentMode}
					{...props}
				>
					<Icon
						aria-hidden
						class="size-5 transition-all dark:-rotate-90"
					/>
				</Button>
			{/snippet}
		</TooltipTrigger>
		<TooltipContent>
			<p>{currentMode}</p>
		</TooltipContent>
	</Tooltip>
</TooltipProvider>
