import axios from 'axios';

// 環境変数から取得
const APIURL = process.env.REACT_APP_APIURL;
const APIKEY = process.env.REACT_APP_APIKEY;

export const getWeatherByCityName = async (cityName) => {
  const url = `${APIURL}?units=metric&lang=ja&q=${cityName}&appid=${APIKEY}`;
  const response = await axios.get(url);
  return response.data;
};
