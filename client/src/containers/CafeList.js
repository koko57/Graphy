import React from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag';
import {Cafe} from "../components/Cafe";

const cafeQuery = gql`
    {
        cafes {
            name
            city
            address
        }
    }
`;

export const CafeList = () => {
    return (
        <Query query={cafeQuery}>
            {
                ({ loading, error, data }) => {
                    if (loading) return <div>loading...</div>;
                    if (error) return <div>error!</div>;
                    const { cafes } = data;
                    return (
                        <div>
                            { cafes.map(cafe => <Cafe name={cafe.name} city={cafe.city} address={cafe.address}/>)}
                        </div>
                    )
                }
            }
        </Query>
    );
};

CafeList.propTypes = {

};

