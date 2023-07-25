<template>
	<div className="rs__notes-sidebar">
		<div v-if="0 < noteStore.searchNote.length">
			<ListItem
			  :notes="noteStore.searchNote"
			  :title="`Search Results`"
			  :icon="`manage_search`"
			  :type="`list`"/>
		</div>
		<div v-if="0 < noteStore.pinnedNotes.length">
			<ListItem
			  :notes="noteStore.pinnedNotes"
			  :title="`Pinned Notes`"
			  :icon="`push_pin`"
			  :type="`list`"/>
		</div>

		<ListItem
		  :notes="noteStore.allNotes"
		  :title="`All Notes`"
		  :icon="`notes`"
		  :type="`list`"/>
	</div>
</template>

<script setup>
import ListItem from '../partials/ListItem.vue';
import { useNoteStore } from '@/stores/NoteStore';
const noteStore = useNoteStore();
</script>
