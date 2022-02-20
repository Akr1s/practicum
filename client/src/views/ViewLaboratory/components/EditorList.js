import React from 'react';

function EditorList({ data }) {
    const { style, items } = data;
    if (style === 'ordered')
        return (
            <ol>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        );
    if (style === 'unordered')
        return (
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        );

    return <p>Error getting list</p>;
}

export default EditorList;
