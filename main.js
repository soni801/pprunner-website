// Cheap-ass https redirect
const url = window.location.href;
if (url.startsWith("http")) window.location = url.replace("http", "https");