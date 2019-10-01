import React from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag';
import { Cafe } from '../components/Cafe';

export const CAFE_QUERY = gql`
    {
        cafes {
            name
            city
            address
            id
        }
    }
`;

// using Query component from Apollo

export const CafeList = () => {
    return (
        <Query query={CAFE_QUERY}>
            {
                ({ loading, error, data }) => {
                    if (loading) return <div>loading...</div>;
                    if (error) return <div>error!</div>;
                    const { cafes } = data;
                    return (
                        <div>
                            { cafes.map(cafe => <Cafe name={cafe.name} city={cafe.city} address={cafe.address} id={cafe.id} />)}
                        </div>
                    )
                }
            }
        </Query>
    );
};
