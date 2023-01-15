import React from 'react';

function Loading({ isLoading }) {
    return isLoading ? (
        <div>
            <div style={backdropStyles}></div>
            <div style={labelStyles}>Loading...</div>
        </div>
    ) : null;
}

export default Loading;

const backdropStyles = {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.8,
};

const labelStyles = {
    fontSize: '30px',
    position: 'absolute',
    top: 50,
    left: '50%',
};
