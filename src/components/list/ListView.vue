<template>
	<Sidebar/>
	<AddNote v-if="noteStore.showAdd" />
	<UpdateNote v-if="noteStore.showEdit" />
	<ViewNote v-if="noteStore.showNote" />
</template>

<script setup>
import Sidebar from '@/components/list/Sidebar.vue';
import AddNote from '@/components/common/AddNote.vue';
import UpdateNote from '@/components/common/UpdateNote.vue';
import ViewNote from '@/components/common/ViewNote.vue';

import { useNoteStore } from '@/stores/NoteStore';

const noteStore = useNoteStore();
</script>
