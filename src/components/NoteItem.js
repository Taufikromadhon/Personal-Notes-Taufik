import React from 'react';

import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
import StatusButton from './StatusButton';

function NoteItem({
  title, body, createdAt, id, onDelete, onArchive, archived, 
}) {
  return (
    <div className='note-item'>
      <div className='note-item__content'>
        <NoteItemBody title={title} createdAt={createdAt} body={body} />
      </div>
      <div className='note-item__action'>
        <DeleteButton id={id} onDelete={onDelete} />
        <StatusButton id={id} onArchive={onArchive} status={archived} />
      </div>
    </div>
  );
}

export default NoteItem;
