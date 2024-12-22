<script lang="ts">
	import { cn } from '$utils';
	import { Check } from 'lucide-svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLParagraphElement> & {
		ref?: HTMLParagraphElement | null;
	};

	let { ref, class: className, children, ...restProps }: Props = $props();
</script>

<p
	class={cn('flex items-center gap-x-0.5 text-xs text-white', className)}
	bind:this={ref}
	{...restProps}
>
	<Check
		aria-hidden
		class="size-5 text-green-600 dark:text-green-500"
	/>

	{@render children?.()}
</p>
