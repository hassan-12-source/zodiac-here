import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader';
import './Loading.css';

function Loading() {
    return (
        <div className='loeading-container'>
            <ClipLoader color="#dab55d" size={75} />
        </div>
    )
}

export default Loading