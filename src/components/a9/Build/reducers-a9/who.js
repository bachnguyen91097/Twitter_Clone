const who = (state = [], action) => {
    switch (action.type) {
        case 'fetch-all-who':
            return action.who
            break;
        default:
            return (state);
    }
}

export default who;