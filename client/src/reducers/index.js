import {combineReducers} from 'redux';
import FetchExhibitionsReducer from './fetchExhibitionsReducer';
import FetchFloorReducer from './fetchFloorReducer';
import InputEditFieldsReducer from './inputEditFieldsReducer';
import FetchProgramsReducer from './fetchProgramsReducer';
import AddingProgramRecuder from './addingProgramsReducer';
import EditingProgramReducer from './editingProgramsReducer';
import DeletingProgramReducer from './deletingProgramsReducer';
import FetchArtistConnectReducer from './fetchArtistConnectReducer';
import EditingArtistConnectReducer from './editingArtistConnectReducer';
import AuthReducer from './auth';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    exhibitions: FetchExhibitionsReducer,
    floor: FetchFloorReducer,
    input: InputEditFieldsReducer,
    programs: FetchProgramsReducer,
    addingPrograms: AddingProgramRecuder,
    editingPrograms: EditingProgramReducer,
    deletingPrograms: DeletingProgramReducer,
    artistConnect: FetchArtistConnectReducer,
    editingArtistConnect: EditingArtistConnectReducer,
    auth: AuthReducer,
    form : formReducer
});