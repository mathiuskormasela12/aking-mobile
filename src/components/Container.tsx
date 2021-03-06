// ========== Container
// import all modules
import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {IFunctionalComponentProps} from '../config';

const size = Dimensions.get('window');

interface IOptionalProps extends IFunctionalComponentProps {
	fluid?: boolean;
	centerX?: boolean;
	centerY?: boolean;
	containerWidth?: number;
}

export function Container<T extends IOptionalProps>(props: T) {
	return (
		<View
			style={[
				props.fluid ? styles.fluidContainer : styles.container,
				props.centerX && styles.centerX,
				props.centerY && styles.centerY,
				props.containerWidth && {
					width: (props.containerWidth / 100) * size.width,
				},
			]}>
			{props.children}
		</View>
	);
}

const styles: any = StyleSheet.create({
	container: {
		width: (80 / 100) * size.width,
		marginTop: 0,
		marginBottom: 0,
		marginLeft: 'auto',
		marginRight: 'auto',
		flex: 1,
	},
	fluidContainer: {
		width: (100 / 100) * size.width,
		marginTop: 0,
		marginBottom: 0,
		marginLeft: 'auto',
		marginRight: 'auto',
		flex: 1,
	},
	centerX: {
		alignItems: 'center',
	},
	centerY: {
		justifyContent: 'center',
	},
});
