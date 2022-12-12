import {create, ApiResponse} from 'apisauce';

const BASE_URL = 'http://openlibrary.org';

export const api = create({
  baseURL: BASE_URL,
  headers: {Accept: 'application/vnd.github.v3+json'},
});

export const apiGet = (path: string) =>
  api.get(path).then((response: ApiResponse<any>) => {
    const {ok, data} = response;
    if (ok) {
      return data;
    }
  });
