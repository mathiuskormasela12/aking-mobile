// ========== SecondWelcome
// import all modules
import React, {Component, Fragment} from 'react';
import {
	SafeAreaView,
	Platform,
	View,
	Text,
	Image,
	ImageBackground,
	Dimensions,
	StatusBar,
	StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {Colors} from '../themes';
import {IWelcomeProps} from '../config';
import {Fonts} from '../themes';

// import all components
import {Container, Buttton} from '../components';

const size = Dimensions.get('window');

class SecondWelcome extends Component<IWelcomeProps> {
	constructor(props: any) {
		super(props);

		this.goTo = this.goTo.bind(this);
	}

	public goTo(screen: string): void {
		this.props.navigation.navigate(screen);
	}

	render() {
		return (
			<Fragment>
				{Platform.OS === 'ios' && <SafeAreaView style={styles.topBar} />}
				<SafeAreaView style={styles.fragment}>
					<StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
					<View style={styles.hero}>
						<Container fluid>
							<View style={styles.row}>
								<View style={[styles.col, styles.firstCol]}>
									<Container center>
										<Image
											source={require('../assets/img/second-welcome-img.png')}
											style={styles.img}
										/>
									</Container>
								</View>
								<View style={[styles.col, styles.secondCol]}>
									<Text style={styles.title}>Work happens</Text>
									<Text style={styles.subtitle}>
										Get notified when work happens.
									</Text>
									<View style={styles.slidesTile}>
										<View style={styles.tiles} />
										<View style={[styles.tiles, styles.activeTiles]} />
										<View style={styles.tiles} />
									</View>
								</View>
								<View style={[styles.col, styles.thirdCol]}>
									<ImageBackground
										source={require('../assets/img/secondary-wave.png')}
										style={styles.wave}>
										<Container centerX centerY>
											<View style={styles.btnRow}>
												<View style={styles.btnCol}>
													<Buttton
														variant="light"
														fluid
														onPress={() => this.goTo('ThirdWelcome')}>
														Next
													</Buttton>
												</View>
												<View style={[styles.btnCol, styles.removeMargin]}>
													<Buttton
														variant="no-border"
														fluid
														onPress={() => this.goTo('FirstWelcome')}>
														Previous
													</Buttton>
												</View>
											</View>
										</Container>
									</ImageBackground>
								</View>
							</View>
						</Container>
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default connect(null, null)(SecondWelcome);

const styles: any = StyleSheet.create({
	fragment: {
		flex: 1,
		backgroundColor: Colors.secondary,
	},
	topBar: {
		flex: 0,
		backgroundColor: Colors.white,
	},
	hero: {
		flex: 1,
	},
	row: {
		flex: 1,
	},
	col: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	firstCol: {
		backgroundColor: Colors.white,
		flex: 1.4,
	},
	secondCol: {
		flex: 0.6,
		justifyContent: 'flex-start',
		backgroundColor: Colors.white,
	},
	thirdCol: {
		flex: 1.2,
		backgroundColor: Colors.white,
	},
	title: {
		color: Colors.dark,
		fontWeight: 'bold',
		fontFamily: Fonts.regular,
		fontSize: 22,
		marginBottom: 6,
	},
	subtitle: {
		color: Colors.dark,
		fontWeight: 'normal',
		fontFamily: Fonts.regular,
		fontSize: 16,
	},
	img: {
		resizeMode: 'contain',
		width: (80 / 100) * size.width,
		flex: 1,
	},
	wave: {
		flex: 1,
		width: size.width,
		resizeMode: 'cover',
	},
	slidesTile: {
		flexDirection: 'row',
		marginTop: 30,
	},
	tiles: {
		width: (1.7 / 100) * size.width,
		height: (1.7 / 100) * size.width,
		backgroundColor: Colors.gray,
		borderRadius: (1.7 / 100) * size.width,
		marginRight: 6,
	},
	activeTiles: {
		backgroundColor: Colors.black,
	},
	btnRow: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		paddingTop: 50,
	},
	btnCol: {
		marginBottom: 15,
	},
	removeMargin: {
		marginBottom: 0,
	},
});
