<template>
	<div className="rs__notes-content-grid">
		<div className="rs__notes-content-all-notes" v-if="! noteStore.showAdd && ! noteStore.showNote && ! noteStore.showEdit && 0 < noteStore.searchNote.length">
			<ListItem
			  :notes="noteStore.searchNote"
			  :title="`Search Results`"
			  :icon="`manage_search`"
			  :type="`grid`"/>
		</div>
		<div className="rs__notes-content-all-notes" v-if="! noteStore.showAdd && ! noteStore.showNote && ! noteStore.showEdit && 0 < noteStore.pinnedNotes.length">
			<ListItem
			  :notes="noteStore.pinnedNotes"
			  :title="`Pinned Notes`"
			  :icon="`push_pin`"
			  :type="`grid`"/>
		</div>
		<div className="rs__notes-content-all-notes" v-if="! noteStore.showAdd && ! noteStore.showNote && ! noteStore.showEdit">
			<ListItem
				:notes="noteStore.allNotes"
				:title="`All Notes`"
				:icon="`notes`"
				:type="`grid`"/>
		</div>
		<AddNote v-if="noteStore.showAdd" />
		<UpdateNote v-if="noteStore.showEdit" />
		<ViewNote v-if="noteStore.showNote" />
	</div>
</template>

<script setup>
import AddNote from '@/components/common/AddNote.vue';
import UpdateNote from '@/components/common/UpdateNote.vue';
import ViewNote from '@/components/common/ViewNote.vue';
import ListItem from '../partials/ListItem.vue';
import { useNoteStore } from '@/stores/NoteStore';

const noteStore = useNoteStore();

</script>
