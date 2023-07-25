import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useNoteStore = defineStore( 'noteStore', {
	state: () => ({
		notes: [],
		lastNoteID: '',
		currentNote: ref(''),
		showEdit: ref(false),
		showNote: ref(false),
		showAdd: ref(true),
		searchNoteTitle: ref(''),
		listView: ref(true),
		gridView: ref(false),
		notice: {
			'blankTitleNotAllowed': 'Title can not be blank',
			'noNotesFound': 'No notes added yet!'
		}
	}),
	getters: {
		pinnedNotes: ( state  ) => {
			return state.notes.filter( note => note.pinned )
		},

		allNotes: ( state ) => {
			return state.notes;
		},

		searchNote: ( state ) => {
			if ( '' === state.searchNoteTitle ) return [];
			return state.notes.filter( note => note.title.toLowerCase().includes( state.searchNoteTitle.toLowerCase() ) );
		}

	},
	actions: {
		addNote( note ) {
			const newNotesArr = [ note, ...this.notes ];
			this.notes = newNotesArr;
		},

		updateNote( note ) {
			const updateNote = this.notes.map( item => {
				if ( item.id === this.lastNoteID ) {
					item.title = note.title;
					item.content = note.content;
				}
				return item;
			} );
			this.notes = updateNote;
		},

		deleteNote( id ) {
			const isConfirmed = confirm( 'Are you sure?' );
			if ( isConfirmed ) {
				const filteredNotes = this.notes.filter( item => item.id !== id );
				this.notes = filteredNotes;
				this.lastNoteID = '';
				this.showAddForm();
			}
		},

		viewSelectedNote( id ) {
			this.updateCurrentNote(id);
			this.lastNoteID = id;
			this.showNoteDetails();
		},

		showUpdateForm( id ) {
			this.updateCurrentNote(id);
			this.lastNoteID = id;
			this.showEditForm();
		},

		resetLastNoteID() {
			this.lastNoteID = '';
		},

		updateCurrentNote(id) {
			const currentNote = this.notes.filter( note => note.id == id );
			this.currentNote = currentNote;
		},

		markedAsPinned( id ) {
			const updatedNotes = this.notes.map( item => {
				if ( id === item.id ) {
					item.pinned = true;
					return item;
				}
				return item;
			} );

			this.notes = updatedNotes;
		},

		markedAsUnPinned( id ) {
			const updatedNotes = this.notes.map( item => {
				if ( id === item.id ) {
					item.pinned = false;
					return item;
				}
				return item;
			} );

			this.notes = updatedNotes;
		},

		showAddForm() {
			this.showAdd = true;
    		this.showEdit = false;
    		this.showNote = false;
		},

		showEditForm() {
			this.showAdd = false;
    		this.showEdit = true;
    		this.showNote = false;
		},

		showNoteDetails() {
			this.showAdd = false;
    		this.showEdit = false;
    		this.showNote = true;
		},

		showListView() {
			this.listView = true;
			this.gridView = false;
			this.showAdd = true;
			this.showEdit = false;
			this.showNote = false;
			this.lastNoteID = '';
		},

		showGridView() {
			this.listView = false;
			this.gridView = true;
			this.showAdd = false;
			this.showEdit = false;
			this.showNote = false;
			this.lastNoteID = '';
		}
	}
})
