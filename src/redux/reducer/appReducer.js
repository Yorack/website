const initialAppState = {
    theme: 'LIGHT', //todo des constantes !
}
export const AppReducer = (state = initialAppState, action) => {
    const newState = {...state};

    switch (action.type) {
        case 'TOGGLE_THEME':
            newState.theme = newState.theme === 'LIGHT' ? 'DARK' : 'LIGHT'

            break;
    }

    return newState;
}
