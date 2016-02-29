export function formatCurrency (amount) {
  return amount.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
}

export function formatDate (isoDate) {
  const date = new Date(isoDate);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

export function getCurrencySymbol (currencyCode) {
  switch (currencyCode.toLowerCase()) {
    case 'rub':
      return '₽';
    case 'usd':
      return '$';
    default:
      return currencyCode;
  }
}
