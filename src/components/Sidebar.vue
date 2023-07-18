<template>
	<div className="rs__notes-sidebar">
		<div v-if="0 < noteStore.searchNote.length">
			<h4 className="rs__sidebar-title">
				<span className="rs__sidebar-title-note-icon material-symbols-sharp">manage_search</span>
				Serach Result
			</h4>
			<ul className="rs__note-list rs__pinned-note-list">
				<li v-for="search in noteStore.searchNote" :key="search.id">
					<p :id="search.id" @click="viewNote">{{ search.title.substring( 0, 20 ) }} {{ search.title.length > 20 ? "..." : "" }} </p>
				</li>
			</ul>
		</div>
		<div v-if="0 < noteStore.pinnedNotes.length">
			<h4 className="rs__sidebar-title">
				<span className="rs__sidebar-title-pinned-icon material-symbols-sharp">push_pin</span>
				Pinned Notes
			</h4>
			<ul className="rs__note-list rs__pinned-note-list">
				<li v-for="pinned in noteStore.pinnedNotes" :key="pinned.id">
					<p :id="pinned.id" @click="viewNote">{{ pinned.title.substring( 0, 20 ) }} {{ pinned.title.length > 20 ? "..." : "" }} </p>
					<span :id="pinned.id" @click="markAsUnPinned"  className="rs__note-list-icon material-symbols-sharp">do_not_disturb_on</span>
				</li>
			</ul>
		</div>
		<h4 className="rs__sidebar-title">
			<span className="rs__sidebar-title-note-icon material-symbols-sharp">notes</span>
			All Notes
		</h4>
		<ul className="rs__note-list">
			<li v-for="note in noteStore.allNotes" :key="note.id">
				<p :id="note.id" @click="viewNote">{{ note.title.substring( 0, 20 ) }} {{ note.title.length > 20 ? "..." : "" }} </p>
				<span :id="note.id" @click="markAsPinned" className="rs__note-list-icon material-symbols-sharp">push_pin</span>
			</li>
			<li
				v-if="1 > noteStore.allNotes.length"
			  	className="rs__note-list-nothing-found"><span>No notes added yet!</span></li>
		</ul>
	</div>
</template>

<script setup>
import { useNoteStore } from '../stores/NoteStore'
const noteStore = useNoteStore();

const markAsPinned = (e) => {
	noteStore.markedAsPinned( e.target.id );
}

const markAsUnPinned = (e) => {
	noteStore.markedAsUnPinned( e.target.id );
}

const viewNote = (e) => {
	noteStore.viewSelectedNote( e.target.id );
}

</script>
