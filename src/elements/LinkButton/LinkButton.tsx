import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text, TouchableOpacity } from 'react-native';
import * as colors from '@util/colors';
import styles from './LinkButton.styles';

interface LinkButtonProps {
	text: string;
	textColor?: string;
	borderColor?: string;
	disabled?: boolean;
	destination?: string;
	onPress?: (any) => void;
}

export default ({
	text,
	destination,
	textColor = colors.NAVY_BLUE,
	borderColor = colors.BANANA_YELLOW,
	disabled = false,
	onPress = () => {},
}: LinkButtonProps) => {
	const { navigate } = useNavigation();
	const buttonFunction = destination
		? () => navigate(destination)
		: onPress && (func => onPress(func));

	return (
		<View style={styles.container}>
			<TouchableOpacity
				disabled={disabled}
				activeOpacity={0.8}
				onPress={buttonFunction}
			>
				<View
					style={[
						styles.textContainer,
						{
							backgroundColor: disabled
								? colors.LIGHT_GRAY
								: borderColor,
						},
					]}
				>
					<Text
						style={[
							styles.text,
							{
								color: disabled
									? colors.LIGHT_GRAY_DISABLED
									: textColor,
							},
						]}
					>
						{text.toUpperCase()}
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};
