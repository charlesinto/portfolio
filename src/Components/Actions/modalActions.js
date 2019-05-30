import { TOGGLE_MODAL, ACTIVE_LINK } from "./type";

const toggleModal = () => {
    return {
        type: TOGGLE_MODAL,
        payload: ''
    }
}

const onLinkCLick = (link = 'Home') => {
    return {
        type: ACTIVE_LINK,
        payload: link
    }
}

export {
    toggleModal,
    onLinkCLick
}