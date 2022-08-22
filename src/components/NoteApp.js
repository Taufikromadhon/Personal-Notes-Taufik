import React from 'react';

import NoteList from './NoteList';
import { getInitialData } from '../utils/data';
import NoteInput from './NoteInput';
import Footer from './Footer';
import ArchivedNoteList from './ArchivedNoteList';
import NoteSearch from './NoteSearch';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      keyword: '',
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
  }

  onSearchNoteHandler(title) {
    this.setState(() => {
      return { keyword: title };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({
    title, body, archived, createdAt,
  }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          archived,
          createdAt,
        },
      ],
    }));
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      return note.id === id ? { ...note, archived: !note.archived } : note;
    });
    this.setState({ notes });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase()));

    const activeNote = filteredNotes.filter((note) => {
      return note.archived === false;
    });
    const archiveNote = filteredNotes.filter((note) => {
      return note.archived === true;
    });
    return (
      <div id='root' className='note-app'>
        <div className='note-app__header'>
          <h1>Aplikasi Personal Notes</h1>
          <NoteSearch title={this.onSearchNoteHandler} />
        </div>
        <div className='note-app__body'>
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteList
            notes={activeNote}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          <ArchivedNoteList
            notes={archiveNote}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default NoteApp;
