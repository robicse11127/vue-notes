<template>
	<div class="rs__notes-content">
		<form @submit.prevent="handleUpdateForm">
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
				:no-nl="false"
				:no-html="true"
			/>
			<button
			  type="submit"
			  class="rs__form-save-btn"><span
			  class="material-symbols-sharp">save</span></button>
		</form>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import contenteditable from 'vue-contenteditable';
import { useNoteStore } from '@/stores/NoteStore';

const noteStore = useNoteStore();
const title = ref('');
const content = ref('');

// Update form with latest values.
noteStore.currentNote.map( note => {
    title.value = note.title;
    content.value = note.content;
} )


const handleUpdateForm = (e) => {
	let insertId = noteStore.lastNoteID;

	if ( 0 < title.value.length  ) {
		noteStore.updateNote({
			id: insertId,
			title: title.value,
			content: content.value,
			timestamp: Date.now(),
		});
	} else {
		alert( noteStore.notice.blankTitleNotAllowed );
	}
}
</script>