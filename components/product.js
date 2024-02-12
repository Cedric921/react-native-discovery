import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Product({ product, onRemove }) {
	return (
		<TouchableOpacity onPress={() => onRemove(product.id)}>
			<Text style={styles.product}>#- {product.name}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	product: {
		shadowColor: '#0003',
		backgroundColor: '#0001',
		borderRadius: 4,
		marginVertical: 6,
		padding: 10,
		fontSize: 18,
	},
});
