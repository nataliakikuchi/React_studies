export default class ArrayNotes {
    constructor() {
        this.notes = [];
    }

    createNote(title, text, category) {
        const newNote = new Note(title, text, category);
        this.notes.push(newNote);
    }

    deleteNote(index) {
        this.notes.splice(index, 1);
    }
}

class Note {
    constructor(title, text, category) {
        this.title = title;
        this. text = text;
        this.category = category;
    }
}