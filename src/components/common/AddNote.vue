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
import { ref } from 'vue';
import contenteditable from 'vue-contenteditable';
import { v4 as uuidv4 } from 'uuid';
import { useNoteStore } from '@/stores/NoteStore';

const noteStore = useNoteStore();
const title = ref('');
const content = ref('');

const handleForm = (e) => {
	let insertId = noteStore.lastNoteID;

	if ( 0 < title.value.length && '' === insertId ) {
		insertId = uuidv4();
		noteStore.addNote({
			id: insertId,
			title: title.value,
			content: content.value,
			timestamp: Date.now(),
			pinned: false,
			lastOpened: true
		});

		// Reset form.
		title.value = '';
		content.value = '';
	} else {
		alert( noteStore.notice.blankTitleNotAllowed );
	}
}

</script>