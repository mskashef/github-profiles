import {lightTheme, darkTheme} from '../config/theme/themes' ;

const initialState = {
    theme: lightTheme
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_THEME":
            localStorage.setItem("dark", (state.theme.dark === true ? "0" : "1"));
            return {
                ...state,
                theme: state.theme.dark !== true ? darkTheme : lightTheme
            };
        default:
            return state;
    }
};
export default reducer;
