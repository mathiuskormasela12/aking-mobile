// ========== TextField
// import all modules
import React, {Fragment} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {IFunctionalComponentProps} from '../config';
import {Colors} from '../themes';

interface ITextFieldProps extends IFunctionalComponentProps {
	placeholder: string;
	secureTextEntry?: boolean;
	value: string;
	keyboardType: any;
	onChangeText?(value: string): void;
}

export function TextField<T extends ITextFieldProps>(props: T) {
	const {
		keyboardType = 'default',
		placeholder,
		value,
		secureTextEntry = false,
		onChangeText,
	} = props;

	return (
		<Fragment>
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
				value={value}
				keyboardType={keyboardType}
				onChangeText={onChangeText}
				placeholderTextColor={Colors.lightGray}
			/>
		</Fragment>
	);
}

const styles = StyleSheet.create({
	input: {
		borderBottomWidth: 1,
		borderBottomColor: Colors.youngGray,
		borderStyle: 'solid',
		paddingVertical: 12,
		fontSize: 16,
		color: Colors.dark,
	},
});
