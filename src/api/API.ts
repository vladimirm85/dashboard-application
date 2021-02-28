import heavyDataResponse from './dbResponses/heavyDataResponse.json';
import lightDataResponse from './dbResponses/lightDataResponse.json';

import { HeavyResponse, LightResponse } from '../types';

class _API {
  getHeavyData = () =>
    new Promise<HeavyResponse>((resolve, reject) =>
      setTimeout(() => {
        resolve(heavyDataResponse);
        reject('Failed to load Data');
      }, 2000)
    );
  getLightData = () =>
    new Promise<LightResponse>((resolve, reject) =>
      setTimeout(() => {
        resolve(lightDataResponse);
        reject('Failed to load Data');
      }, 500)
    );
}

export const API = new _API();
