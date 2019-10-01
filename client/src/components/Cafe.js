import React from 'react';
import PropTypes from 'prop-types';

export const Cafe = props => {
    const {name, city, address} = props;
    return (
        <div>
            <span>{name}</span>
            <span>{city}</span>
            <span>{address}</span>
        </div>
    );
};

Cafe.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
};
