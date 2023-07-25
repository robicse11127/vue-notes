<template>
	<!-- List View Items -->
	<h4 className="rs__sidebar-title" v-if="'list' === type">
		<span className="rs__sidebar-title-note-icon material-symbols-sharp">{{ icon }}</span>
		{{ title }}
	</h4>
	<ul className="rs__note-list rs__pinned-note-list" v-if="'list' === type">
		<li v-for="note in notes" :key="note.id">
			<p @click="noteStore.viewSelectedNote( note.id )">{{ note.title.substring( 0, wordLimit ) }} {{ note.title.length > wordLimit ? "..." : "" }} </p>
			<span v-if="note.pinned" @click="noteStore.markedAsUnPinned( note.id )"  className="rs__note-list-icon material-symbols-sharp">do_not_disturb_on</span>
			<span v-if="!note.pinned" @click="noteStore.markedAsPinned( note.id )" className="rs__note-list-icon material-symbols-sharp">push_pin</span>
		</li>
		<li
			v-if="1 > notes"
			className="rs__note-list-nothing-found"><span>{{ noteStore.notice.noNotesFound }}</span></li>
	</ul>
	<!-- Grid View Items -->
	<h4 className="rs__notes-content-grid-title" v-if="'grid' === type">
		<span className="rs__notes-content-grid-title-icon material-symbols-sharp">{{ icon }}</span>
		{{ title }}
	</h4>
	<div className="rs__notes-contet-grid-card-wrapper" v-if="'grid' === type">
		<div className="rs__note-card" v-for="note in notes" :key="note.id">
			<h4 @click="noteStore.viewSelectedNote( note.id )" className="rs__note-card-title">{{ note.title.substring(0, wordLimit) }} {{ note.title.length > wordLimit ? "..." : "" }}</h4>
			<span v-if="note.pinned" @click="noteStore.markedAsUnPinned( note.id )"  className="rs__note-grid-icon material-symbols-sharp">do_not_disturb_on</span>
			<span v-if="!note.pinned" @click="noteStore.markedAsPinned( note.id )" className="rs__note-grid-icon material-symbols-sharp">push_pin</span>
			<p>{{ note.content.substring(0, wordLimit) }} {{ note.content.length > wordLimit ? "..." : "" }}</p>
		</div>
	</div>
	<div
		v-if="1 > notes && 'grid' === type"
		className="rs__note-grid-nothing-found"><span>{{ noteStore.notice.noNotesFound }}</span></div>
</template>

<script setup>
import { useNoteStore } from '@/stores/NoteStore';
const noteStore = useNoteStore();

const props = defineProps( [ 'notes', 'title', 'icon', 'type' ] );
const wordLimit = 20;
</script>