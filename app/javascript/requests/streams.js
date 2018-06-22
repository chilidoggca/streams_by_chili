import {BASE_URL} from './config';

function getJwt() {
  return `JWT ${localStorage.getItem('jwt')}`;
}

// HTTP REQUESTS

export const Stream = {
  all () {
    return fetch(
      `${BASE_URL}/api/v1/streams`,
      // {
      //   headers: {
      //     'Authorization': getJwt()
      //    }
      // }
    )
      .then(res => res.json())
  },
  get (id) {
    return fetch(
      `${BASE_URL}/api/v1/streams/details?id=${id}`,
    )
      .then(res=> res.json())
  }
}
