import React from 'react';
import ReactivationButton from './ReactivationButton';
import ArchiveButton from './ArchiveButton';

function StatusButton({ id, onArchive, status }) {
  if (status !== false) {
    return <ReactivationButton id={id} onArchive={onArchive} />;
  }
  return <ArchiveButton id={id} onArchive={onArchive} />;
}

export default StatusButton;
