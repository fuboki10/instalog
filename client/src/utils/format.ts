export const formatDateToCustomFormat = (dateString : string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const formattedDate = new Date(dateString).toLocaleString('en-US', options);
  return formattedDate;
}

export default formatDateToCustomFormat;