export default {
	get: id => {
		var notes = [];
		var json = localStorage.getItem("notes") || "";
		if (json.length) {
			// existe
			notes = JSON.parse(json);
		}

		return notes.find(x => x.id == id) || null;
	},

	set: note => {
		var notes = [];
		var json = localStorage.getItem("notes") || "";
		if (json.length) {
			// existe
			notes = JSON.parse(json);
		}

		note.id = note.id || new Date().getTime();
		note.time = note.id;
		var index = notes.findIndex(x => x.id == note.id);
		if (index != -1) {
			notes[index] = note;
		} else {
			notes.push(note);
		}

		var json = JSON.stringify(notes);
		localStorage.setItem("notes", json);

		return note;
	},

	del: id => {
		var notes = [];
		var json = localStorage.getItem("notes") || "";
		if (json.length) {
			// existe
			notes = JSON.parse(json);
		}

		notes = notes.filter(x => x.id != id);

		json = JSON.stringify(notes);
		localStorage.setItem("notes", json);

		return { mssg: "Note deleted!!" };
	},

	getAll: () => {
		var notes = [];
		var json = localStorage.getItem("notes") || "";
		if (json.length) {
			// existe
			notes = JSON.parse(json);
		}

		return notes;
	}
};
