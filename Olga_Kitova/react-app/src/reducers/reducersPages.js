import { PAGES_GET_PENDING, PAGES_GET_SUCCESS, PAGES_GET_ERROR,
     PAGES_ADD_SUCCESS, PAGES_ADD_ERROR, PAGES_EDIT_ID_RESET,
    PAGES_EDIT_ID_SUCCESS,  PAGES_EDIT_SUCCESS, PAGES_EDIT_ERROR,
    PAGES_DELETE_SUCCESS, PAGES_DELETE_ERROR, PAGE_GET_PENDING,
    PAGE_GET_ERROR, PAGE_GET_SUCCESS,} from 'constants/constantsPages'

const initialState = {
    data: [],
    loading: false,
    error: null,
    currentId: null,
    currentPage: null,
    headerPages: []
}

export const pagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case PAGES_GET_PENDING:
                return {...state, loading: true};
        case PAGES_GET_SUCCESS:
                return {...state, loading: false, data: action.payload,
                     headerPages: [...action.payload.map(obj => ({title: obj.title, url: obj.url}))]};
        case PAGES_GET_ERROR:
                return {...state, loading: false, error: action.payload};
        case PAGE_GET_PENDING:
                return {...state, loading: true, currentPage: null};
        case PAGE_GET_SUCCESS:
                let receivedPage = action.payload.reduce((acc, current, i) => {
                    return current},{})
                return {...state, 
                        loading: false,
                        currentPage: receivedPage
                }
        case PAGE_GET_ERROR:
                return {...state, loading: false, error: action.payload};
        case PAGES_ADD_SUCCESS:
            return {...state, data: [...state.data, action.payload]};   
        case PAGES_ADD_ERROR:
            return {...state, error: action.payload};
        case PAGES_DELETE_SUCCESS:
            return state;   
        case PAGES_DELETE_ERROR:
            return {...state, error: action.payload};
        case PAGES_EDIT_ID_SUCCESS:
            return {...state, currentId: action.payload};
        case PAGES_EDIT_ID_RESET:
            return {...state, currentId: null};
        case PAGES_EDIT_SUCCESS:
            return {...state,  currentId: null};   
        case PAGES_EDIT_ERROR:
            return {...state, error: action.payload};
        default:
            return state
    }
}
