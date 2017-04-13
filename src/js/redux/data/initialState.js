/**
 * Created by Denis on 13.04.2017.
 */
// Инициализируем объект начальным значением
const initialState = {
  params: {
    lat: 36.0454,
    lon: -4.7654,
    zoom: 8
  },
  presets: {
    naturalColor: {
      mapid: 'maps_mini_block_1',
      description: 'True color 111',
      url: '//{s}.sat.owm.io/sql/{z}/{x}/{y}',
      urlParams: '?appid=9de243494c0b295cca9337e1e96b00e2&select=b4,b3,b2&from=s2&order=best&color=log,gamma:1.7',
      center: [
        51.05,
        2.31
      ],
      zoom: 12,
      minZoom: 3,
      maxZoom: 14,
      zoomControl: true,
      attributionControl: false
    },
    l543: {
      mapid: 'maps_mini_block_2',
      description: 'False color',
      url: '//{s}.sat.owm.io/sql/{z}/{x}/{y}',
      urlParams: '?appid=9de243494c0b295cca9337e1e96b00e2&select=b8,b3,b2&from=s2&order=best&color=log',
      center: [
        51.05,
        2.31
      ],
      zoom: 12,
      minZoom: 3,
      maxZoom: 14,
      zoomControl: true,
      attributionControl: false
    },
    ndvi: {
      mapid: 'maps_mini_block_3',
      description: 'NDVI',
      url: '//{s}.sat.owm.io/sql/{z}/{x}/{y}',
      urlParams: '?appid=9de243494c0b295cca9337e1e96b00e2&select=b8,b4&where=day>2016-01-01%2Cday<2016-10-30&from=s2&order=best&op=ndvi',
      center: [
        50.03,
        3.25
      ],
      zoom: 12,
      minZoom: 3,
      maxZoom: 14,
      zoomControl: true,
      attributionControl: false
    },
    ndwi: {
      mapid: 'maps_mini_block_4',
      description: 'NDWI',
      url: '//{s}.sat.owm.io/sql/{z}/{x}/{y}',
      urlParams: '?appid=9de243494c0b295cca9337e1e96b00e2&select=b8,b12&where=day>2016-01-01%2Cday<2016-10-30&from=s2&op=ndvi',
      center: [
        50.03,
        3.25
      ],
      zoom: 12,
      minZoom: 3,
      maxZoom: 14,
      zoomControl: true,
      attributionControl: false
    },
    droughtIndex: {
      mapid: 'maps_mini_block_5',
      description: 'Drought index',
      url: '//{s}.sat.owm.io/sql/{z}/{x}/{y}',
      urlParams: '?appid=9de243494c0b295cca9337e1e96b00e2&select=b2,b12&where=day>2016-01-01%2Cday<2016-10-30&from=s2&order=best&op=ndvi&color=1%3A0b0badff%3B0.5%3A8383d3ff%3B0%3Af4f4f8ff%3B-0.3%3Adfc8aaff%3B-1%3Abd9d72ff',
      center: [
        36.33,
        69.82
      ],
      zoom: 12,
      minZoom: 3,
      maxZoom: 14,
      zoomControl: true,
      attributionControl: false
    },
    l753: {
      mapid: '',
      description: 'Natural With Atmospheric Removal',
      url: '//{s}.sat.owm.io/sql/{z}/{x}/{y}',
      urlParams: '?appid=9de243494c0b295cca9337e1e96b00e2&select=b7,b5,b3&from=s2&color=log(1.2)&order=best',
      center: [
        51.05,
        2.31
      ],
      zoom: 12,
      minZoom: 3,
      maxZoom: 14,
      zoomControl: true,
      attributionControl: false
    }
  }
};

export default initialState;