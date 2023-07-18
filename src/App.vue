<template>
	<div class="rs__notes-wrapper">
		<Toolbar />
		<div class="rs__content-wrapper">
			<Sidebar/>
			<AddNote v-if="noteStore.showAdd" />
			<UpdateNote v-if="noteStore.showEdit" />
			<ViewNote v-if="noteStore.showNote" />
		</div>
	</div>
	{{noteStore.notes}}
</template>

<script setup>
import Toolbar from '@/components/Toolbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import AddNote from '@/components/AddNote.vue';
import UpdateNote from '@/components/UpdateNote.vue';
import ViewNote from '@/components/ViewNote.vue';

import { useNoteStore } from '@/stores/NoteStore';

const noteStore = useNoteStore();
</script>