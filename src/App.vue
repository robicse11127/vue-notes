<template>
	<div class="rs__notes-wrapper">
		<Toolbar />
		<div class="rs__content-wrapper">
			<ListView v-if="noteStore.listView"/>
			<GridView v-if="noteStore.gridView"/>
		</div>
	</div>
</template>

<script setup>
import Toolbar from '@/components/Toolbar.vue';
import ListView from '@/components/ListView.vue';
import GridView from '@/components/GridView.vue';

import { useNoteStore } from '@/stores/NoteStore';

const noteStore = useNoteStore();
</script>