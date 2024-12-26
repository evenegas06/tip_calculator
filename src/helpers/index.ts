export function formatCurrency(value: number) {
	const format = new Intl.NumberFormat('es-MX', {
		style: 'currency',
		currency: 'MXN',
	}).format(value);

	return format;
}
