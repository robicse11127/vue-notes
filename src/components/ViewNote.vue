<template>
    <div class="rs__notes-content">
        <div className="rs__view-note-details" v-for="note in noteStore.currentNote" :key="note.id">
            <h4 className="rs__view-note-title">{{ note.title }}</h4>
            <contenteditable
				tag="div"
				className="rs__content-editable"
				:contenteditable="false"
				v-model="note.content"
				:no-nl="false"
				:no-html="true"
			/>
            <button
              @click="editNote(note.id)"
              className="rs__form-save-btn"><span
              className="material-symbols-sharp">edit</span></button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useNoteStore } from '@/stores/NoteStore';
import contenteditable from 'vue-contenteditable';

const noteStore = useNoteStore();
const title = ref('');
const content = ref('');

const editNote = (id) => {
    noteStore.showUpdateForm(id);
}
</script>