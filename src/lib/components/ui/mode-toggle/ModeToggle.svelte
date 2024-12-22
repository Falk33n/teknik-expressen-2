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

	const checked = $derived($mode === 'dark');
	const currentMode = $derived(
		$mode === 'light'
			? 'Change the theme to dark mode'
			: 'Change the theme to light mode',
	);

	function handleKeyboardEvent(
		e: KeyboardEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		},
	) {
		if (e.key !== 'Enter' && e.key !== ' ') return;
		toggleMode();
	}
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
							checked && 'opacity-60',
						)}
					/>

					<Switch
						{checked}
						controlledChecked
						onkeydown={(e) => handleKeyboardEvent(e)}
						aria-label={currentMode}
						class="w-8"
						{...props}
					/>

					<Moon
						aria-hidden
						onclick={toggleMode}
						class={cn(
							'size-4 cursor-pointer text-white transition-opacity',
							!checked && 'opacity-60',
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
