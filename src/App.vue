<template>
	<div class="rs__notes-wrapper">
		<Toolbar />
		<div class="rs__content-wrapper">
			<Sidebar />
			<AddNote />
		</div>
	</div>
</template>

<script setup>
import Toolbar from '@/components/Toolbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import AddNote from '@/components/AddNote.vue'

</script>