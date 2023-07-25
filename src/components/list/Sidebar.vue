<template>
	<div className="rs__notes-sidebar">
		<div v-if="0 < noteStore.searchNote.length">
			<h4 className="rs__sidebar-title">
				<span className="rs__sidebar-title-note-icon material-symbols-sharp">manage_search</span>
				Serach Result
			</h4>
			<ul className="rs__note-list rs__pinned-note-list">
				<li v-for="note in noteStore.searchNote" :key="note.id">
					<p @click="noteStore.viewSelectedNote( note.id )">{{ note.title.substring( 0, 20 ) }} {{ note.title.length > 20 ? "..." : "" }} </p>
					<span v-if="note.pinned" @click="noteStore.markedAsUnPinned( note.id )"  className="rs__note-list-icon material-symbols-sharp">do_not_disturb_on</span>
					<span v-if="!note.pinned" @click="noteStore.markedAsPinned( note.id )" className="rs__note-list-icon material-symbols-sharp">push_pin</span>
				</li>
			</ul>
		</div>
		<div v-if="0 < noteStore.pinnedNotes.length">
			<h4 className="rs__sidebar-title">
				<span className="rs__sidebar-title-pinned-icon material-symbols-sharp">push_pin</span>
				Pinned Notes
			</h4>
			<ul className="rs__note-list rs__pinned-note-list">
				<li v-for="note in noteStore.pinnedNotes" :key="note.id">
					<p :id="note.id" @click="noteStore.viewSelectedNote( note.id )">{{ note.title.substring( 0, 20 ) }} {{ note.title.length > 20 ? "..." : "" }} </p>
					<span @click="noteStore.markedAsUnPinned( note.id )" className="rs__note-list-icon material-symbols-sharp">do_not_disturb_on</span>
				</li>
			</ul>
		</div>
		<h4 className="rs__sidebar-title">
			<span className="rs__sidebar-title-note-icon material-symbols-sharp">notes</span>
			All Notes
		</h4>
		<ul className="rs__note-list">
			<li v-for="note in noteStore.allNotes" :key="note.id">
				<p :id="note.id" @click="noteStore.viewSelectedNote( note.id )">{{ note.title.substring( 0, 20 ) }} {{ note.title.length > 20 ? "..." : "" }} </p>
				<span v-if="note.pinned" @click="noteStore.markedAsUnPinned( note.id )"  className="rs__note-list-icon material-symbols-sharp">do_not_disturb_on</span>
				<span v-if="!note.pinned" @click="noteStore.markedAsPinned( note.id )" className="rs__note-list-icon material-symbols-sharp">push_pin</span>
			</li>
			<li
				v-if="1 > noteStore.allNotes.length"
			  	className="rs__note-list-nothing-found"><span>No notes added yet!</span></li>
		</ul>
	</div>
</template>

<script setup>
import { useNoteStore } from '@/stores/NoteStore'
const noteStore = useNoteStore();
</script>
