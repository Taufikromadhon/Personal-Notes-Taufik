import React from 'react';
import { showFormattedDate, getInitialData } from '../utils/data';
import NoteItem from './NoteItem';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
  }

  render() {
    if (this.state.notes.length === 0) {
      return (
        <div>
          <h2>Catatan Aktif</h2>
          <p className='notes-list'>Tidak ada catatan ditemukan</p>
        </div>
      );
    }

    return this.props.notes.length > 0 ? (
      <div>
        <h2>Catatan Aktif</h2>
        <div className='notes-list'>
          {this.props.notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              createdAt={showFormattedDate(note.createdAt)}
              body={note.body}
              onDelete={this.props.onDelete}
              onArchive={this.props.onArchive}
              {...note}
            />
          ))}
        </div>
      </div>
    ) : (
      <div>
        <h2>Catatan Aktif</h2>
        <p className='notes-list'>Tidak ada catatan ditemukan</p>
      </div>
    );
  }
}

export default NoteList;
