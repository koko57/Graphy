import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';

const SAVE_CAFE = gql`
    mutation SaveCafe($name: String!, $city: String!, $address: String!) {
        createCafe(name: $name, city: $city, address: $address) {
            id
            name
        }
    }
`;

const SForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`;

const SInput = styled.input`
    height: 20px;
    width: 180px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    margin: 4px auto;
    padding: 5px;
`;

const SButton = styled.button`
    -webkit-appearance: none;
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 5px auto;
`;

// using new apollo/react-hooks for GraphQL

export const CafeForm = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');

    const [createCafe, { data }] = useMutation(SAVE_CAFE);

    const cafeToSave = { name, city, address };

    const onSubmit = () => {
        if (name && city && address) {
            createCafe({ variables: {...cafeToSave} });
            clearData();
        }
    };

    const clearData = () => {
        setName('');
        setCity('');
        setAddress('');
    };

    return (
        <SForm>
            <SInput type="text" placeholder="Cafe name" value={name} onChange={e => setName(e.target.value)} />
            <SInput type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
            <SInput type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
            <SButton onClick={() => onSubmit()}>Add!</SButton>
        </SForm>
    );
};
