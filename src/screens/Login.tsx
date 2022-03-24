// ========== Login
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
	password: string;
}

const window = Dimensions.get('window');

class Login extends Component<IAuthProps, IStates> {
	constructor(props: any) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};

		this.goTo = this.goTo.bind(this);
		this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
		this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
	}

	public goTo(screen: string): void {
		this.props.navigation.navigate(screen);
	}

	public handleOnChangeEmail(value: string): void {
		this.setState(() => ({
			username: value,
		}));
	}

	public handleOnChangePassword(value: string): void {
		this.setState(() => ({
			password: value,
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
								<Text style={styles.title}>Welcome Back</Text>
								<Text style={styles.subtitle}>Sign in to continue</Text>
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
								<View style={styles.control}>
									<Text style={styles.label}>Password</Text>
									<View style={styles.field}>
										<TextField
											placeholder="Enter your password"
											secureTextEntry={true}
											keyboardType="default"
											value={this.state.password}
											onChangeText={(value: string) =>
												this.handleOnChangePassword(value)
											}
										/>
									</View>
								</View>
								<View style={styles.control}>
									<Text
										style={styles.forgot}
										onPress={() => this.goTo('ForgotPassword')}>
										Forgot Password
									</Text>
								</View>
								<View style={[styles.control, styles.lastControl]}>
									<Buttton variant="primary" fluid>
										Log In
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

export default connect(null, null)(Login);

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
	forgot: {
		textAlign: 'right',
		color: Colors.dark,
		fontFamily: Fonts.regular,
		fontWeight: 'bold',
		fontSize: 16,
		marginTop: -10,
	},
	lastControl: {
		marginTop: 35,
	},
});
