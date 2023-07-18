<template>
    <div class="rs__top-toolbar">
        <div class="rs__toolbar-title">
            RS Notes
            <span @click="showAddNoteForm" class="rs__action-icon material-symbols-sharp" id="rs__action-icon-add-note">edit_note</span>
        </div>
        <div class="rs__action-icons">
            <span v-if="'' !== noteStore.lastNoteID" @click="deleteNote" class="rs__action-icon material-symbols-sharp" id="rs__action-icon-delete">delete</span>
        </div>
        <div class="rs__action-icons rs__justify-end">
            <span class="rs__action-icon material-symbols-sharp" id="rs__action-icon-list">format_list_bulleted</span>
            <span class="rs__action-icon material-symbols-sharp" id="rs__action-icon-grid">grid_view</span>

            <span class="rs__action-icon material-symbols-sharp" id="rs__action-icon-search">search</span>
        </div>
    </div>
</template>

<script setup>
import { useNoteStore } from '@/stores/NoteStore';
const noteStore = useNoteStore();

const showAddNoteForm = () => {
    noteStore.resetLastNoteID();
    noteStore.showAddForm();
}

const deleteNote = () => {
    noteStore.deleteNote( noteStore.lastNoteID );
}
</script>