function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
}

function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

export { formatDate, generateUniqueId };
