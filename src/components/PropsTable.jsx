import React from 'react';

/**
 * Generic table for displaying props or similar data.
 * @param {Array} columns - Array of column definitions: { key, label, render? }
 * @param {Array} data - Array of row objects
 * @param {string} [title] - Optional table title
 * @param {string} [className] - Optional CSS class
 */
function PropsTable({ columns, data, title, className = '' }) {
  return (
    <div className={className}>
      {title && <h3>{title}</h3>}
      <table>
        <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
        </tr>
        </thead>
        <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {columns.map((col) => (
              <td key={col.key}>
                {col.render ? col.render(row[col.key], row) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
export default PropsTable;