import axios from 'axios';

const ACCESS_KEY = 'AIzaSyBPH4X9MCfs1R-W-W6DTW2VFn5SMPoHKCY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: ACCESS_KEY,
  },
});
