import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useNoteStore = defineStore( 'noteStore', {
	state: () => ({
		notes: [
			{ id: Date.now(), title: 'A breif story of time', content: '', timestamp: Date.now(), pinned: true, lastOpened: true },
			{ id: Date.now(), title: 'Some important links', content: '', timestamp: Date.now(), pinned: false, lastOpened: false },
			{ id: Date.now(), title: 'A list of tutorials to learn', content: '', timestamp: Date.now(), pinned: false, lastOpened: false },
		],
		lastNoteID: ''
	}),
	getters: {
		pinnedNotes: ( state  ) => {
			return state.notes.filter( note => note.pinned )
		},

		allNotes: ( state ) => {
			return state.notes;
		},

		currentNote: ( state ) => {
			return state.notes.filter( note => note.id === state.lastNoteID );
		}
	},
	actions: {
		addNote( note ) {
			const newNotesArr = [ note, ...this.notes ];
			this.notes = newNotesArr;
			this.lastNoteID = note.id;
		}
	}
})
