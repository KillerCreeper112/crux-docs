import React from 'react';
import PropsTable from './PropsTable';

/**
 * Simple wrapper for displaying function arguments
 */
function ArgumentsTable({ args, title = 'Arguments', className = '' }) {
  const columns = [
    { key: 'name', label: 'Argument', render: (val) => <code>{val}</code> },
    { key: 'type', label: 'Type' },
    { key: 'description', label: 'Description' },
  ];

  return <PropsTable columns={columns} data={args} title={title} className={className} />;
}

export default ArgumentsTable;