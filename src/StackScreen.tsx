// ========== StackScreen
// import all modules
import React, {Fragment} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';

// import all screens
import FirstWelcome from './screens/FirstWelcome';
import SecondWelcome from './screens/SecondWelcome';
import ThirdWelcome from './screens/ThirdWelcome';
import Register from './screens/Register';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

function StackScreen() {
	return (
		<Fragment>
			<NavigationContainer onReady={() => RNBootSplash.hide()}>
				<Stack.Navigator>
					<Stack.Screen
						name="FirstWelcome"
						component={FirstWelcome}
						options={{headerShown: false}}
					/>
					<Stack.Screen
						name="SecondWelcome"
						component={SecondWelcome}
						options={{headerShown: false}}
					/>
					<Stack.Screen
						name="ThirdWelcome"
						component={ThirdWelcome}
						options={{headerShown: false}}
					/>
					<Stack.Screen
						name="Login"
						component={Login}
						options={{headerShown: false}}
					/>
					<Stack.Screen
						name="Register"
						component={Register}
						options={{headerShown: false}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Fragment>
	);
}

export default StackScreen;
