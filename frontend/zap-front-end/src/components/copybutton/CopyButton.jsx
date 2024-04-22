import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopy, faCheck} from '@fortawesome/free-solid-svg-icons'
const CopyButton = ({ url }) => {
    const [buttonText, setButtonText] = useState('Copy URL');
    const copyToClipboard = () => {
        navigator.clipboard.writeText(url)
        .then(() => {
            setButtonText("Copied!");
            setTimeout(() => {
            setButtonText("Copy URL");
            }, 2000); 
        })
        .catch(err => {
            console.error('Failed to copy URL: ', err);
            alert("Failed to copy URL.");
        });
    };

  return (
    <button 
    onClick={copyToClipboard}
    style={buttonText === 'Copied!' ? {background:'#E0AC1E', fontWeight:'bold'} : null}

    >
        <FontAwesomeIcon icon={buttonText === 'Copied!' ? faCheck : faCopy}/>  {buttonText}
    </button>
  );
};

export default CopyButton;