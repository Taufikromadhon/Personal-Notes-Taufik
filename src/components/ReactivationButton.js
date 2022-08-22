import React from 'react';

function ReactivationButton({ id, onArchive }) {
  return (
    <button className='note-item__archive-button' onClick={() => onArchive(id)}>
      Aktifkan
    </button>
  );
}

export default ReactivationButton;
