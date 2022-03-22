// ========== StackScreen
// import all modules
import React, {Fragment} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import all screens
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

function StackScreen() {
	return (
		<Fragment>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={Home} />
				</Stack.Navigator>
			</NavigationContainer>
		</Fragment>
	);
}

export default StackScreen;
