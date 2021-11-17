import profileJson from './data/profile.json';

const profile = (state = profileJson, action) => {
    switch (action.type) {
        case 'get-current-profile':
            return action.profile;
            break;
        case 'update-current-profile':
            const newState = {
                ...state,
                name: action.newProfile.name,
                bio: action.newProfile.bio,
                location: action.newProfile.location,
                website: action.newProfile.website,
                dateOfBirth: action.newProfile.dateOfBirth,
            }
            return newState;
            break;
        default:
            return (state);
    }
}

export default profile;