
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { api } from '../config/config'

const _client = () => {
    return new ApolloClient({
        link: new HttpLink({
            uri: `${api}/graphql`,
            headers: {
                'Authorization': `bearer ${localStorage.getItem('token')}`,
                'Origin': '*',
            }
        }),
        cache: new InMemoryCache()
    });
}

const query = async (query) => {
    return await _client().query({ query })
}

export {
    query
}
