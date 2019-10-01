import React, {useState} from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const saveCafe = gql`
    mutation SaveCafe($name: String!, $city: String!, $address: String!) {
        createCafe(name: $name, city: $city, address: $address) {
            id
            name
        }
    }
`;

export const CafeForm = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');

    const [createCafe, { data }] = useMutation(saveCafe);

    const cafeToSave = { name, city, address };

    const onSubmit = () => createCafe({variables: {...cafeToSave}});

    return (
        <form>
            <input type="text" placeholder="Cafe name" value={name} onChange={e => setName(e.target.value)}/>
            <input type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
            <input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
            <button onClick={() => onSubmit()}>Add!</button>
        </form>
    );
};
