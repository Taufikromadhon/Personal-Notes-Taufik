import React from 'react';

function NoteSearch({ title }) {
  return (
    <div className='note-search'>
      <input
        type='text'
        placeholder='Cari catatan ...'
        onChange={(event) => title(event.target.value)}
        maxLength={50}
      />
    </div>
  );
}

export default NoteSearch;
