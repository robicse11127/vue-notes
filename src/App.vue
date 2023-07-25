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
import Toolbar from '@/components/common/Toolbar.vue';
import ListView from '@/components/list/ListView.vue';
import GridView from '@/components/grid/GridView.vue';

import { useNoteStore } from '@/stores/NoteStore';

const noteStore = useNoteStore();
</script>