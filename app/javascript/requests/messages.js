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
  get_by_author (name) {
    return fetch(
      `${BASE_URL}/api/v1/messages/author?name=${name}`,
      // {
      //   headers: {
      //     'Authorization': getJwt()
      //    }
      // }
    )
      .then(res=> res.json())
  },
  get_by_chat (id) {
    return fetch(
      `${BASE_URL}/api/v1/messages/chat?id=${id}`,
      // {
      //   headers: {
      //     'Authorization': getJwt()
      //    }
      // }
    )
      .then(res=> res.json())
  }
}
