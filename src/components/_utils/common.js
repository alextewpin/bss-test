export function formatCurrency (amount, includeSign) {
  const nbsp = ' ';
  let formattedAmount = amount.toString().replace(/(\d)(?=(\d{3})+$)/g, `$1${nbsp}`);
  if (includeSign) {
    if (amount > 0) {
      formattedAmount = `+${nbsp}${formattedAmount}`;
    } else if (amount < 0) {
      formattedAmount = formattedAmount.replace('-', `−${nbsp}`);
    }
  } else {
    formattedAmount = formattedAmount.replace('-', '');
  }
  return formattedAmount;
}

function formatTime (time) {
  if (time.toString().length === 1) {
    return `0${time}`;
  } else {
    return time;
  }
}

export function formatDate (isoDate) {
  const date = new Date(isoDate);
  const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  if (isoDate.indexOf('T') !== -1) {
    return `${formattedDate} — ${formatTime(date.getHours())}:${formatTime(date.getMinutes())}`;
  } else {
    return formattedDate;
  }
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
