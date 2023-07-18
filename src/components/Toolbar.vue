<template>
    <div className="rs__top-toolbar">
        <div className="rs__toolbar-title">
            RS Notes
            <span @click="showAddNoteForm" className="rs__action-icon material-symbols-sharp" id="rs__action-icon-add-note">edit_note</span>
        </div>
        <div className="rs__action-icons">
            <span v-if="'' !== noteStore.lastNoteID" @click="deleteNote" className="rs__action-icon material-symbols-sharp" id="rs__action-icon-delete">delete</span>
        </div>
        <div class="rs__action-icons rs__justify-end">
            <input @keyup.enter="searchNote" type="text" className="rs__top-toolbar-search" id="rs__top-toolbar-search">
            <span @click="showSearchInput" className="rs__action-icon material-symbols-sharp" id="rs__action-icon-search">search</span>
            <span className="rs__action-icon material-symbols-sharp" id="rs__action-icon-list">format_list_bulleted</span>
            <span className="rs__action-icon material-symbols-sharp" id="rs__action-icon-grid">grid_view</span>
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

const showSearchInput = (e) => {
    const searchInput = document.getElementById('rs__top-toolbar-search');
    searchInput.classList.toggle( 'rs__top-toolbar-search-show' );
    searchInput.focus();
}

const searchNote = (e) => {
    if ( 0 < e.target.value.length ) {
        noteStore.searchNoteTitle = e.target.value;
        console.log( 'sss' );
    }
}
</script>