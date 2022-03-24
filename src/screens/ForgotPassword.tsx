// ========== ForgotPassword
// import all modules
import React, {Component, Fragment} from 'react';
import {
	SafeAreaView,
	View,
	Text,
	StatusBar,
	Platform,
	Dimensions,
	StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Colors} from '../themes';
import {IAuthProps} from '../config';
import {Fonts} from '../themes';

// import all components
import {Container, TextField, Buttton} from '../components';

interface IStates {
	username: string;
}

const window = Dimensions.get('window');

class ForgotPassword extends Component<IAuthProps, IStates> {
	constructor(props: any) {
		super(props);
		this.state = {
			username: '',
		};

		this.goTo = this.goTo.bind(this);
		this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
	}

	public goTo(screen: string): void {
		this.props.navigation.navigate(screen);
	}

	public handleOnChangeEmail(value: string): void {
		this.setState(() => ({
			username: value,
		}));
	}

	public render() {
		return (
			<Fragment>
				{Platform.OS === 'ios' && <SafeAreaView style={styles.topBar} />}
				<SafeAreaView style={styles.fragment}>
					<StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
					<KeyboardAwareScrollView style={styles.hero} enableOnAndroid>
						<Container containerWidth={85}>
							<View style={styles.header}>
								<Text style={styles.title}>Forgot Password</Text>
								<Text style={styles.subtitle}>
									Please enter your email below to recevie your password reset
									instructions
								</Text>
							</View>
							<View style={styles.form}>
								<View style={styles.control}>
									<Text style={styles.label}>Username</Text>
									<View style={styles.field}>
										<TextField
											placeholder="Enter your username"
											secureTextEntry={false}
											keyboardType="email-address"
											value={this.state.username}
											onChangeText={(value: string) =>
												this.handleOnChangeEmail(value)
											}
										/>
									</View>
								</View>
								<View style={[styles.control, styles.lastControl]}>
									<Buttton
										variant="primary"
										fluid
										onPress={() => this.goTo('ResetPassword')}>
										Send Request
									</Buttton>
								</View>
							</View>
						</Container>
					</KeyboardAwareScrollView>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default connect(null, null)(ForgotPassword);

const styles: any = StyleSheet.create({
	topBar: {
		flex: 0,
		backgroundColor: 'red',
	},
	fragment: {
		height: window.height,
		backgroundColor: Colors.white,
	},
	header: {
		height: (20 / 100) * window.height,
		alignItems: 'flex-start',
		justifyContent: 'center',
		backgroundColor: Colors.white,
	},
	form: {
		height: (80 / 100) * window.height,
		backgroundColor: Colors.white,
	},
	hero: {
		height: window.height,
		backgroundColor: Colors.white,
	},
	title: {
		fontFamily: Fonts.regular,
		fontWeight: 'bold',
		color: Colors.dark,
		fontSize: 28,
		marginBottom: 12,
	},
	subtitle: {
		fontFamily: Fonts.regular,
		fontWeight: 'normal',
		color: Colors.darkGray,
		fontSize: 18,
	},
	control: {
		marginBottom: 35,
	},
	field: {
		marginTop: 10,
	},
	label: {
		color: Colors.dark,
		fontWeight: 'bold',
		fontSize: 18,
		fontFamily: Fonts.bold,
	},
	lastControl: {
		marginTop: 0,
	},
});
