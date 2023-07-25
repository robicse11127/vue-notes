<template>
	<div className="rs__notes-content-grid">
		<div className="rs__notes-content-all-notes" v-if="! noteStore.showAdd && ! noteStore.showNote && ! noteStore.showEdit && 0 < noteStore.searchNote.length">
			<h4 className="rs__notes-content-grid-title">
				<span className="rs__notes-content-grid-title-icon material-symbols-sharp">manage_search</span>
				Search Result
			</h4>
			<div className="rs__notes-contet-grid-card-wrapper">
				<div className="rs__note-card" v-for="note in noteStore.searchNote" :key="note.id">
					<h4 @click="noteStore.viewSelectedNote( note.id )" className="rs__note-card-title">{{ note.title.substring(0, wordLimit) }} {{ note.title.length > wordLimit ? "..." : "" }}</h4>
					<span v-if="note.pinned" @click="noteStore.markedAsUnPinned( note.id )"  className="rs__note-grid-icon material-symbols-sharp">do_not_disturb_on</span>
					<span v-if="!note.pinned" @click="noteStore.markedAsPinned( note.id )" className="rs__note-grid-icon material-symbols-sharp">push_pin</span>
					<p>{{ note.content.substring(0, wordLimit) }} {{ note.content.length > wordLimit ? "..." : "" }}</p>
				</div>
			</div>
		</div>
		<div className="rs__notes-content-all-notes" v-if="! noteStore.showAdd && ! noteStore.showNote && ! noteStore.showEdit && 0 < noteStore.pinnedNotes.length">
			<h4 className="rs__notes-content-grid-title">
				<span className="rs__notes-content-grid-title-icon material-symbols-sharp">push_pin</span>
				Pinned Notes
			</h4>
			<div className="rs__notes-contet-grid-card-wrapper">
				<div className="rs__note-card" v-for="note in noteStore.pinnedNotes" :key="note.id">
					<span @click="noteStore.markedAsUnPinned( note.id )" className="rs__note-grid-icon material-symbols-sharp">do_not_disturb_on</span>
					<h4 @click="noteStore.viewSelectedNote( note.id )" className="rs__note-card-title">{{ note.title.substring(0, wordLimit) }} {{ note.title.length > wordLimit ? "..." : "" }}</h4>
					<p>{{ note.content.substring(0, wordLimit) }} {{ note.content.length > wordLimit ? "..." : "" }}</p>
				</div>
			</div>
		</div>
		<div className="rs__notes-content-all-notes" v-if="! noteStore.showAdd && ! noteStore.showNote && ! noteStore.showEdit ">
			<h4 className="rs__notes-content-grid-title">
				<span className="rs__notes-content-grid-title-icon material-symbols-sharp">notes</span>
				All Notes
			</h4>
			<div className="rs__notes-contet-grid-card-wrapper">
				<div className="rs__note-card" v-for="note in noteStore.allNotes" :key="note.id">
					<span v-if="note.pinned" @click="noteStore.markedAsUnPinned( note.id )"  className="rs__note-grid-icon material-symbols-sharp">do_not_disturb_on</span>
				<span v-if="!note.pinned" @click="noteStore.markedAsPinned( note.id )" className="rs__note-grid-icon material-symbols-sharp">push_pin</span>
					<h4 @click="noteStore.viewSelectedNote( note.id )" className="rs__note-card-title">{{ note.title.substring(0, wordLimit) }} {{ note.title.length > wordLimit ? "..." : "" }}</h4>
					<p>{{ note.content.substring(0, wordLimit) }} {{ note.content.length > wordLimit ? "..." : "" }}</p>
				</div>
			</div>
			<div
				v-if="1 > noteStore.allNotes.length"
			  	className="rs__note-grid-nothing-found"><span>No notes added yet!</span></div>
		</div>
		<AddNote v-if="noteStore.showAdd" />
		<UpdateNote v-if="noteStore.showEdit" />
		<ViewNote v-if="noteStore.showNote" />
	</div>
</template>

<script setup>
import AddNote from '@/components/AddNote.vue';
import UpdateNote from '@/components/UpdateNote.vue';
import ViewNote from '@/components/ViewNote.vue';
import { useNoteStore } from '@/stores/NoteStore';

const noteStore = useNoteStore();
const wordLimit = 20;
</script>
