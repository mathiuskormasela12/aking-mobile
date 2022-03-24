// ========== Navigation Header
// import all modules
import React from 'react';
import {
	TouchableOpacity,
	SafeAreaView,
	Dimensions,
	StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// import all components
import {Container} from './';

// import assets
import ArrowBack from '../assets/icons/arrow-back.svg';

const width = Dimensions.get('screen').width;

export function NavigationHeader() {
	const navigation = useNavigation();

	const handleGoBack = () => {
		navigation.goBack();
	};

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<Container containerWidth={95}>
				<TouchableOpacity style={styles.header} onPress={handleGoBack}>
					<ArrowBack width={(5 / 100) * width} height={(5 / 100) * width} />
				</TouchableOpacity>
			</Container>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
	},
	header: {
		flex: 1,
	},
});
