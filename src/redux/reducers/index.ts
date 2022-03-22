// ========== Root Reducer
// import all modules
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';

// import all reducers
import authReducer from './auth';

const rootPersistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: [],
};

const authPersistConfig = {
	key: 'auth',
	storage: AsyncStorage,
	stateReconciler: hardSet,
};

const rootReducer = combineReducers({
	auth: persistReducer(authPersistConfig, authReducer),
});

export default persistReducer(rootPersistConfig, rootReducer);
