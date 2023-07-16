export const API_DOMAIN = "https://newsapi.org/v2/top-headlines?country="
export const API_KEY = "c311c6691dc744bda87b91c3581d1e66"
export const endpointPath = (country, category, page, pageSize) => `${API_DOMAIN}${country}&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;
