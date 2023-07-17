<template>
	<div class="rs__notes-content">
		<form @submit.prevent="handleForm">
			<input
				type="text"
				class="rs__input-title"
				placeholder="What is the note about..."
				v-model="title"
			/>
			<contenteditable
				tag="div"
				className="rs__content-editable"
				:contenteditable="true"
				v-model="content"
				:no-nl="true"
				:no-html="true"
			/>
			<button type="submit" class="rs__form-save-btn">Save Now!</button>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import contenteditable from 'vue-contenteditable';
import { useNoteStore } from '@/stores/NoteStore';

const noteStore = useNoteStore();
const title = ref('');
const content = ref('');

const handleForm = (e) => {
	let insertId = noteStore.lastNoteID;
	console.log(insertId);
	// Insert New
	if ( 0 < title.value.length && '' === insertId ) {
		insertId = Date.now();
		noteStore.addNote({
			id: insertId,
			title: title.value,
			content: content.value,
			timestamp: Date.now(),
			pinned: false,
			lastOpened: true
		});

		// Update form with latest values.
		noteStore.currentNote.map( note => {
			title.value = note.title;
			content.value = note.content;
		} )
	}


}

</script>