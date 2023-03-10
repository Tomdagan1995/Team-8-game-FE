import React from 'react';

import Preview from './Preview';

const Previews = ({ tetrominoes }) => {
    const previewTetrominoes = tetrominoes
    .slice(1 - tetrominoes)
    .reverse();

    return (
        <>
        {previewTetrominoes.map((tetromino, index) => (
            <Preview tetromino={tetromino} index={index} key={index} />
        ))}
        </>
    )
}

export default Previews;