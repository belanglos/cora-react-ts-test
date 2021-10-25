import React, { useState } from 'react';
import api from './control/api';

const OrganisationSearch = () => {
    const [inputText, setInputText] = useState('');
    const [organisationName, setOrganisationName] = useState('');

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleSend = () => {
        setInputText('');
        setOrganisationName(api.getOrganisation());
    };

    //	function getOrganisation() {
    //	    const orgName: string = 'SomeOrg';
    //	    return orgName;
    //	}

    return (
        <div>
            <h1>Organisation Search</h1>
            <input
                type="text"
                data-testid="organisationSearchInput"
                value={inputText}
                onChange={handleTextChange}
            />
            <button data-testid="sendButton" onClick={handleSend}>
                Send
            </button>

            <div data-testid="organisationName">{organisationName}</div>
        </div>
    );
};

export default OrganisationSearch;
