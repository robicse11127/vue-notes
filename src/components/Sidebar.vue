<template>
	<div class="rs__notes-sidebar">
		<h4 class="rs__sidebar-title">
			<span class="rs__sidebar-title-pinned-icon material-symbols-sharp">push_pin</span>
			Pinned Notes
		</h4>
		<ul class="rs__note-list rs__pinned-note-list">
			<li v-for="pinned in noteStore.pinnedNotes" :key="pinned.id">
				<p>{{ pinned.title }}</p>
			</li>
		</ul>
		<h4 class="rs__sidebar-title">
			<span class="rs__sidebar-title-note-icon material-symbols-sharp">notes</span>
			All Notes
		</h4>
		<ul class="rs__note-list">
			<li v-for="note in noteStore.allNotes" :key="note.id">
				<p :id="note.id" @click="viewNote">{{ note.title.substring( 0, 20 ) }} {{ note.title.length > 20 ? "..." : "" }} </p> <span @click="markAsPinned" class="rs__note-list-icon material-symbols-sharp">push_pin</span>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { useNoteStore } from '../stores/NoteStore'
const noteStore = useNoteStore();

const markAsPinned = (e) => {
	console.log('pinned');
}

const viewNote = (e) => {
	noteStore.viewSelectedNote( e.target.id );
}

</script>
