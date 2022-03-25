// ========== Reset Password Success
// import all modules
import React, {Fragment} from 'react';
import {
	View,
	SafeAreaView,
	Text,
	Image,
	Dimensions,
	StatusBar,
	Platform,
	StyleSheet,
} from 'react-native';
import {Colors, Fonts} from '../themes';

// import all components
import {Container} from '../components';

const size = Dimensions.get('window');

function ResetPasswordSuccess() {
	return (
		<Fragment>
			{Platform.OS === 'ios' && <SafeAreaView style={styles.topBar} />}
			<SafeAreaView style={styles.fragment}>
				<StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
				<View style={styles.hero}>
					<View style={styles.container}>
						<Container containerWidth={90}>
							<View style={styles.content}>
								<Image
									source={require('../assets/img/success-img.png')}
									style={styles.img}
								/>
								<Text style={styles.title}>Succesful!</Text>
								<Text style={styles.subtitle}>
									You have succesfully change password. Please use your new
									passwords when logging in.
								</Text>
							</View>
						</Container>
					</View>
				</View>
			</SafeAreaView>
		</Fragment>
	);
}

export default ResetPasswordSuccess;

const styles = StyleSheet.create({
	topBar: {
		flex: 0,
		backgroundColor: Colors.white,
	},
	fragment: {
		flex: 1,
		backgroundColor: Colors.white,
	},
	hero: {
		flex: 1,
		backgroundColor: Colors.white,
	},
	container: {
		flex: 1,
		// backgroundColor: 'red',
	},
	img: {
		resizeMode: 'contain',
		width: (60 / 100) * size.width,
		height: (60 / 100) * size.width,
		marginBottom: 30,
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontFamily: Fonts.bold,
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 15,
		color: Colors.black,
	},
	subtitle: {
		fontFamily: Fonts.regular,
		fontSize: 18,
		fontWeight: 'normal',
		textAlign: 'center',
		color: Colors.black,
		lineHeight: 26,
	},
});
