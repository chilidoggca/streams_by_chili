import {BASE_URL} from './config';

function getJwt() {
  return `JWT ${localStorage.getItem('jwt')}`;
}

// HTTP REQUESTS

export const Message = {
  all () {
    return fetch(
      `${BASE_URL}/api/v1/messages`,
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
      `${BASE_URL}/api/v1/messages/${id}`,
      {
        headers: {
          'Authorization': getJwt()
         }
      }
    )
      .then(res=> res.json())
  }
}
