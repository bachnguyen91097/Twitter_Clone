//const WHO_API_PUBLIC = 'https://web-dev-node-bb.herokuapp.com/api/who';
const WHO_API = 'http://localhost:4000/api/who';

export const findAllWho = (dispatch) =>
    fetch(WHO_API)
        .then(response => response.json())
        .then(who =>
            dispatch({
                type: 'fetch-all-who',
                who
            }));
