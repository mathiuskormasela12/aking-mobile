// ========== Buttton
// import all modules
import React from 'react';
import {TouchableOpacity, Text, Dimensions, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../themes';
import {IFunctionalComponentProps} from '../config';

const height = Dimensions.get('screen').height;

interface IOptionalProps extends IFunctionalComponentProps {
	fluid?: boolean;
	variant: string;
	onPress?(): void;
}

export function Buttton<T extends IOptionalProps>(props: T) {
	if (props.variant === 'no-border') {
		return (
			<TouchableOpacity
				style={[styles.btn, props.fluid && styles.btnFluid, styles.noBorder]}
				onPress={props.onPress && props.onPress}>
				<Text style={[styles.textNoBorder]}>{props.children}</Text>
			</TouchableOpacity>
		);
	}

	return (
		<TouchableOpacity
			style={[
				styles.btn,
				props.fluid && styles.btnFluid,
				styles[`btn-${props.variant}`],
			]}
			onPress={props.onPress && props.onPress}>
			<Text style={[styles.text, styles[`text-${props.variant}`]]}>
				{props.children}
			</Text>
		</TouchableOpacity>
	);
}

const styles: any = StyleSheet.create({
	btn: {
		height: (6 / 100) * height,
		borderRadius: 6,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	noBorder: {
		backgroundColor: 'transparent',
	},
	textNoBorder: {
		fontFamily: Fonts.regular,
		fontWeight: 'bold',
		color: Colors.white,
		fontSize: 16,
	},
	btnFluid: {
		width: '100%',
	},
	text: {
		fontSize: 16,
		fontFamily: Fonts.regular,
		fontWeight: 'bold',
	},
	'btn-primary': {
		backgroundColor: Colors.primary,
	},
	'btn-secondary': {
		backgroundColor: Colors.secondary,
	},
	'btn-dark': {
		backgroundColor: Colors.dark,
	},
	'btn-light': {
		backgroundColor: Colors.white,
	},
	'text-primary': {
		color: Colors.white,
	},
	'text-secondary': {
		color: Colors.white,
	},
	'text-dark': {
		color: Colors.white,
	},
	'text-light': {
		color: Colors.dark,
	},
});
