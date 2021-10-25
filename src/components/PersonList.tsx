import React from 'react';
import Api from '../control/api';
import ListItem from './ListItem';

const PersonList = () => {



	return <ul>
        {Api.getPersons().map(person => {return <ListItem text={person.authorizedName.familyName}/>)}    
    </ul>;
};

export default PersonList;
