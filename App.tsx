// ========== App
// import all modules
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import persistedStore from './src/redux/store';
import StackScreen from './src/StackScreen';

function App() {
	const {store, persistor} = persistedStore();

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<StackScreen />
			</PersistGate>
		</Provider>
	);
}

export default App;
