import React, { useEffect, useReducer } from "react";
import { getNotes } from "../http";
import { Header } from "../components/Header";
import { useAuth } from "../shared/context/auth-context";
import { TagList } from "../components/TagList";
import { Loader } from "../components/Loader";
import { NoteList } from "../components/NoteList";

// Notes Reducer
// -------------
// Definiremos acciones que controlaran nuestra interfaz
// El estado será el siguiente
// {
//   notes: [],
//   isFetching: false,
//   selectedTag: null,
//   selectedNote: null,
//   isMenuOpened: false,
//   isNoteOpened: false,
//   error: null
// }
function notesReducer(state, action) {
  switch (action.type) {
    case "GET_NOTES_SUCCESS":
      return { ...state, notes: action.initialNotes };
    case "SELECT_TAG":
      return { ...state, selectedTag: action.index };
    case "SELECT_NOTE":
      return { ...state, selectedNote: action.index };
    case "TOGGLE_MENU":
      return {
        ...state,
        isMenuOpened: !state.isMenuOpened,
        isNoteOpened: false
      };
    default:
      return state;
  }
}

function Dashboard() {
  const { user } = useAuth();

  const [state, dispatch] = useReducer(notesReducer, {
    notes: [],
    selectedTag: null,
    selectedNote: null,
    isMenuOpened: false,
    isNoteOpened: false
  });

  useEffect(() => {
    getNotes().then(response =>
      dispatch({ type: "GET_NOTES_SUCCESS", initialNotes: response.data.rows })
    );
  }, []);

  // Cada vez que se hace un render se calcula la lista de tags
  const tags = state.notes.reduce((acc, current) => {
    current.tags.forEach(tag => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });
    return acc;
  }, []);

  // LOGICA
  // ------
  // - selectTag - Función para seleccionar un Tag a través del reducer (El index) - selectedTag
  const selectTag = selectedIndex =>
    dispatch({ type: "SELECT_TAG", index: selectedIndex });

  // - selectNote - Función para seleccionar una nota a través del reducer (El index) - selectedNote
  const selectNote = selectedIndex =>
    dispatch({ type: "SELECT_NOTE", index: selectedIndex });

  // - filteredNotes - Función para calcular las notas que se han de mostrar en función del
  //   tag seleccionado y del texto seleccionado. Hace el cálculo a partir de notes
  const filteredNotes = state.notes.filter(
    note =>
      state.selectedTag === null || note.tags.includes(tags[state.selectedTag])
  );

  // RESPONSIVE UI
  // -------------
  // - isMenuOpened y isNoteOpened
  // En base a sus estados true o false abrir o cerrar el menu cambiando las
  // clases menu-opened y notes-opened

  // COMUNICACION HTTP (https://docs.yagopv.now.sh)
  // -----------------
  // - createNote - Permite crear una nota. Un POST al servidor
  // - saveNote - Permite modificar una nota. Un  PUT al servidor
  // - deleteNote - Permite borrar una nota

  return (
    <React.Fragment>
      <Header
        title="My Notes"
        user={user}
        onToggleMenu={() => {
          dispatch({ type: "TOGGLE_MENU" });
        }}
        onLogout={() => {}}
      />
      <main id="dashboard">
        {/* class menu-opened abre el menu */}
        {/* class notes-opened abre las notas */}
        <div
          className={`grid ${state.isMenuOpened &&
            "menu-opened"} ${state.isNoteOpened && "notes-opened"}`}
        >
          {/* <TagList tags selectedIndex onSelectTag> - INICIO */}

          <TagList
            tags={tags}
            selectedIndex={state.selectedTag}
            onSelectTag={i => {
              selectTag(i);
              dispatch({ type: "TOGGLE_MENU" });
            }}
          />

          {/* </TagList> - FIN */}

          <div class="note-list">
            {/* <Search onSearchTextChanged onAddNote> INICIO - Modifica el filtrado */}

            <div class="flex">
              <input class="search" type="search" />
              <button class="icon-button add-note" />
            </div>

            {/* </ Search> FIN */}

            {/* <NoteList notes selectedIndex onSelectNote> INICIO - Muestra la lista de notas */}

            <NoteList
              notes={filteredNotes}
              selectedIndex={state.selectedNote}
              onNoteSelected={selectNote}
            />

            {/* </ NoteList> FIN */}
          </div>

          {/* <NoContent text> INICIO - Mostrar si no hay nota seleccionada */}
          {/* <h3 class="no-note-selected">
            Select a note to start previewing and editing
          </h3> */}
          {/* </ NoContent> FIN */}

          {/* <Note initialNote onSaveNote onDeleteNote> INICIO - Mostrar cuando hay una nota seleccionada */}

          <div class="note">
            <textarea id="title" class="title" placeholder="Untitled Note" />

            {/* <TagsInput value onChange> INICIO - Permitir entrar tags */}

            <div class="tags-container">
              <ul>
                <li>
                  Un tag<button>x</button>
                </li>
                <div class="tags-input-container">
                  <input type="text" placeholder="Enter tag" />
                </div>
              </ul>
            </div>

            {/* </ TagsInput> FIN */}

            <div class="note-container">
              <a href="/">
                Remove
                <button class="icon-button remove" />
              </a>
            </div>

            {/* Mostrar texto en modo lectura */}
            <div class="markdown">
              <p>Read move</p>
            </div>

            {/* Mostrar textarea en modo edición */}
            <textarea id="content" class="content">
              Write mode
            </textarea>
          </div>

          {/* </Note> FIN */}
        </div>

        {/* Show / Hide loader si alguna peticion en curso*/}
        {/* <div className="loader">
          <Loader />
        </div> */}
        {/*  */}
      </main>
    </React.Fragment>
  );
}

export { Dashboard };
