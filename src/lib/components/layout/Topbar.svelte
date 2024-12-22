<script lang="ts">
	import { TopbarText } from '$components/layout';
	import { ModeToggle } from '$components/ui/mode-toggle';
</script>

<div class="w-full bg-black px-4">
	<div
		class="flex items-center justify-between bg-black md:flex-row-reverse xl:pl-60 2xl:mx-auto 2xl:max-w-[1300px] 2xl:pl-4"
	>
		<ModeToggle />

		<div class="flex items-center gap-x-2.5">
			<TopbarText>Fri frakt</TopbarText>
			<TopbarText class="max-sm:hidden">Order skickas inom två dagar</TopbarText
			>
			<TopbarText class="max-md:hidden">Fria returer</TopbarText>
			<TopbarText class="max-md:hidden">Öppet köp i 14 dagar</TopbarText>
		</div>
	</div>
</div>
