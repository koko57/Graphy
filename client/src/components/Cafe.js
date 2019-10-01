import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SCafe = styled.div`
    height: 120px;
    width: 300px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    color: darkgrey;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 10px auto;
    padding: 10px;
`;

export const Cafe = props => {
    const { name, city, address } = props;
    return (
        <SCafe>
            <span>{name}</span>
            <span>{city}</span>
            <span>{address}</span>
        </SCafe>
    );
};

Cafe.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
};
