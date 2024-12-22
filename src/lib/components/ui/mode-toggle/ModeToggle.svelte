<script lang="ts">
	import { Switch } from '$components/ui/switch';
	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger,
	} from '$components/ui/tooltip';
	import { cn } from '$utils';
	import { Moon, Sun } from 'lucide-svelte/icons';
	import { mode, toggleMode } from 'mode-watcher';

	const currentMode = $derived(
		$mode === 'light'
			? 'Change the theme to dark mode'
			: 'Change the theme to light mode',
	);
</script>

<TooltipProvider>
	<Tooltip>
		<TooltipTrigger onclick={toggleMode}>
			{#snippet child({ props })}
				<span class="inline-flex h-8 w-fit items-center space-x-2">
					<Sun
						aria-hidden
						onclick={toggleMode}
						class={cn(
							'size-4 cursor-pointer text-white transition-opacity',
							$mode === 'dark' && 'opacity-60',
						)}
					/>

					<Switch
						aria-label={currentMode}
						controlledChecked
						checked={$mode === 'dark'}
						class="w-8"
						{...props}
					/>

					<Moon
						aria-hidden
						onclick={toggleMode}
						class={cn(
							'size-4 cursor-pointer text-white transition-opacity',
							$mode === 'light' && 'opacity-60',
						)}
					/>
				</span>
			{/snippet}
		</TooltipTrigger>

		<TooltipContent>
			<p>{currentMode}</p>
		</TooltipContent>
	</Tooltip>
</TooltipProvider>
