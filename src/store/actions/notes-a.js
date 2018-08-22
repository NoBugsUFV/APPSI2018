import axios from "axios";
import notesDB from "../../notesDB";

const actions = {
	GET_NOTES: context => context.commit("getNotes", notesDB.getAll()),
	CREATE_NOTE: (context, payload) => context.commit("createNote", payload),
	DELETE_NOTE: (context, payload) => context.commit("deleteNote", payload),
	EDIT_NOTE: (context, payload) => context.commit("editNote", payload)
};

export default actions;
