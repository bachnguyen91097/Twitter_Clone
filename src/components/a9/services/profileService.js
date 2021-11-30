//const PROFILE_API_PUBLIC = 'https://web-dev-node-bb.herokuapp.com/api/profile';
const PROFILE_API = 'http://localhost:4000/api/profile';

export const findProfileById = (dispatch, id) =>
    fetch(`${PROFILE_API}/${id}`)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'get-current-profile',
                profile
            })
        );

export const updateCurrentProfile = (dispatch, newProfile) =>
    fetch(PROFILE_API,
        {
            method: 'PUT',
            body: JSON.stringify(newProfile),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => dispatch({
            type: 'update-current-profile',
            newProfile
        }));

export default {
    findProfileById
};