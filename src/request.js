const API_KEY = 'e952290284a17801dbfa01bb863bfebd';

const request = [
    {"url": `/discover/tv?api_key=${API_KEY}&with_network=213&language=en-US`, "title": "Netflix Original"},
    {"url": `/trending/all/week?api_key=${API_KEY}`, "title": "Trending Movies"},
    {"url": `/movie/top_rated?api_key=${API_KEY}&language=en-IN`, "title": "Top Rated Movies"},
    {"url": `/movie/upcoming?api_key=${API_KEY}&language=en-IN`, "title": "Upcoming Movies"},
    {"url": `/discover/movie?api_key=${API_KEY}&with_genres=28`, "title": "Action Movies"},
    {"url": `/discover/movie?api_key=${API_KEY}&with_genres=27`, "title": "Horror Movies"},
    {"url": `/discover/movie?api_key=${API_KEY}&with_genres=10749`, "title": "Romantic Movies"},
    {"url": `/discover/movie?api_key=${API_KEY}&with_genres=53`, "title": "Triller Movies"}
];

export default request;