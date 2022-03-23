// ========== Register
// import all modules
import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Colors} from '../themes';
import {IAuthProps} from '../config';
import {Fonts} from '../themes';

class Register extends Component<IAuthProps> {
	constructor(props: any) {
		super(props);

		this.goTo = this.goTo.bind(this);
	}

	public goTo(screen: string): void {
		this.props.navigation.navigate(screen);
	}

	render() {
		return (
			<SafeAreaView style={styles.fragment}>
				<View style={styles.hero}>
					<Text style={styles.title}>Register</Text>
				</View>
			</SafeAreaView>
		);
	}
}

export default connect(null, null)(Register);

const styles: any = StyleSheet.create({
	fragment: {
		flex: 1,
	},
	hero: {
		flex: 1,
		backgroundColor: Colors.white,
	},
	title: {
		fontFamily: Fonts.regular,
		fontWeight: 'bold',
		color: Colors.dark,
		fontSize: 16,
	},
});
