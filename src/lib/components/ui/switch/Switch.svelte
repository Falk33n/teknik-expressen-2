<script lang="ts">
	import { cn } from '$utils';
	import {
		Switch,
		type SwitchRootProps,
		type WithoutChildrenOrChild,
	} from 'bits-ui';

	let {
		ref = $bindable(null),
		checked = $bindable(false),
		class: className,
		...restProps
	}: WithoutChildrenOrChild<SwitchRootProps> = $props();
</script>

<Switch.Root
	bind:ref
	bind:checked
	class={cn(
		'peer inline-flex h-4 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-neutral-400 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50',
		className,
	)}
	{...restProps}
>
	<Switch.Thumb
		class={cn(
			'pointer-events-none block h-3.5 w-3 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
		)}
	/>
</Switch.Root>
