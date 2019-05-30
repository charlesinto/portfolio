import { TOGGLE_MODAL, ACTIVE_LINK } from "../Actions/type";

const INITIAL_STATE = {
    modal: false,
    link: 'Home'
}

export default (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case TOGGLE_MODAL:
            return { ...state, modal: !state.modal }
        case ACTIVE_LINK:
            return { ...state, link: actions.payload }
        default:
            return { ...state }
    }
}