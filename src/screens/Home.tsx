// ========== Home
// import all modules
import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Colors} from '../themes';
import {IHomeProps} from '../config';
import {Fonts} from '../themes';

// import all actions
import {setAccessToken} from '../redux/actions/auth';

class Home extends Component<IHomeProps> {
	constructor(props: any) {
		super(props);
	}

	render() {
		const {accessToken, handleSetAccessToken} = this.props;

		return (
			<SafeAreaView>
				<View>
					<Text
						style={styles.title}
						onPress={() => handleSetAccessToken('token')}>
						Home
					</Text>
					<Text style={styles.subtitle}>Home</Text>
					{accessToken && <Text>Ada Token</Text>}
				</View>
			</SafeAreaView>
		);
	}
}

const mapStateToProps = (states: any) => ({
	accessToken: states.auth.accessToken,
});

const mapDispatchToProps = {
	handleSetAccessToken: setAccessToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles: any = StyleSheet.create({
	title: {
		color: Colors.primary,
		fontFamily: Fonts.italic,
	},
	subtitle: {
		color: Colors.primary,
	},
});
