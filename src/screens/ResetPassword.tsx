// ========== ResetPassword
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
	resetCode: string;
	newPassword: string;
	confirmPassword: string;
}

const window = Dimensions.get('window');

class ResetPassword extends Component<IAuthProps, IStates> {
	constructor(props: any) {
		super(props);
		this.state = {
			resetCode: '',
			newPassword: '',
			confirmPassword: '',
		};

		this.goTo = this.goTo.bind(this);
		this.handleOnChangeNewPassword = this.handleOnChangeNewPassword.bind(this);
		this.handleOnChangeConfirmPassword =
			this.handleOnChangeConfirmPassword.bind(this);
		this.handleOnChangeResetCode = this.handleOnChangeResetCode.bind(this);
	}

	public goTo(screen: string): void {
		this.props.navigation.navigate(screen);
	}

	public handleOnChangeResetCode(value: string): void {
		this.setState(() => ({
			resetCode: value,
		}));
	}

	public handleOnChangeNewPassword(value: string): void {
		this.setState(() => ({
			newPassword: value,
		}));
	}

	public handleOnChangeConfirmPassword(value: string): void {
		this.setState(() => ({
			confirmPassword: value,
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
								<Text style={styles.title}>Reset Password</Text>
								<Text style={styles.subtitle}>
									Reset code was sent to your email. Please enter the code and
									creae new password
								</Text>
							</View>
							<View style={styles.form}>
								<View style={styles.control}>
									<Text style={styles.label}>Reset Code</Text>
									<View style={styles.field}>
										<TextField
											placeholder="Enter your full name"
											secureTextEntry={false}
											keyboardType="default"
											value={this.state.resetCode}
											onChangeText={(value: string) =>
												this.handleOnChangeResetCode(value)
											}
										/>
									</View>
								</View>
								<View style={styles.control}>
									<Text style={styles.label}>New Password</Text>
									<View style={styles.field}>
										<TextField
											placeholder="Enter your new password"
											secureTextEntry={false}
											keyboardType="default"
											value={this.state.newPassword}
											onChangeText={(value: string) =>
												this.handleOnChangeNewPassword(value)
											}
										/>
									</View>
								</View>
								<View style={styles.control}>
									<Text style={styles.label}>Confirm Password</Text>
									<View style={styles.field}>
										<TextField
											placeholder="Enter your confirm password"
											secureTextEntry={true}
											keyboardType="default"
											value={this.state.confirmPassword}
											onChangeText={(value: string) =>
												this.handleOnChangeConfirmPassword(value)
											}
										/>
									</View>
								</View>
								<View style={[styles.control, styles.lastControl]}>
									<Buttton variant="primary" fluid>
										Change Password
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

export default connect(null, null)(ResetPassword);

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
		height:
			Platform.OS === 'ios'
				? (20 / 100) * window.height
				: (18 / 100) * window.height,
		alignItems: 'flex-start',
		justifyContent: 'center',
		backgroundColor: Colors.white,
	},
	form: {
		paddingTop: 20,
		height:
			Platform.OS === 'ios'
				? (80 / 100) * window.height
				: (82 / 100) * window.height,
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
		marginTop: 5,
	},
});
