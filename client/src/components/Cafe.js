import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CAFE_QUERY } from '../containers/CafeList';

const DELETE_CAFE = gql`
    mutation DeleteCafe($id: ID!) {
        deleteCafe(id: $id) {
            name
            id
        }
    }
`;

const SCafe = styled.div`
    height: 120px;
    width: 280px;
    border: 1px dotted lightgrey;
    border-radius: 5px;
    color: darkgrey;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 10px auto;
    padding: 10px;
    position: relative;
`;

const SXButton =  styled.button`
  -webkit-appearance: none;
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  color: firebrick;
  font-size: 20px;
  font-weight: bold;
`;

// using Mutation component from Apollo

export const Cafe = props => {
    const { name, city, address, id } = props;

    const update = (cache) => {
        const existingCafes = cache.readQuery({ query: CAFE_QUERY });
        const newCafes = existingCafes.cafes.filter(cafe => cafe.id !== id);
        cache.writeQuery({
            query: CAFE_QUERY,
            data: { cafes: newCafes }
        });
    };

    return (
        <Mutation mutation={DELETE_CAFE} variables={{ id }} update={update}>
        {deleteMutation => {
            return (
                <SCafe>
                    <span>{name}</span>
                    <span>{city}</span>
                    <span>{address}</span>
                    <SXButton onClick={deleteMutation}>x</SXButton>
                </SCafe>
            )
        }}
        </Mutation>
    );
};

Cafe.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
};
