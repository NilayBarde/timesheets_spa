import store from './store'

export function post(path, body) {
  let state = store.getState()
  let session = state.session
  let token = state.session.token;

    return fetch('/ajax' + path, {
        method: 'post',
        credentials: 'same-origin',
        headers: new Headers({
          'x-csrf-token': window.csrf_token,
          'content-type': "application/json; charset=UTF-8",
          'accept': 'application/json',
          'x-auth': token || "",
        }),
        body: JSON.stringify(body),
      }).then((resp) => resp.json())
}

export function remove(path) {
  let state = store.getState()
  let session = state.session
    return fetch('/ajax' + path, {
        method: 'delete',
        credentials: 'same-origin',
        headers: new Headers({
          'x-csrf-token': window.csrf_token,
          'content-type': "application/json; charset=UTF-8",
          'accept': 'application/json',
          'x-auth': token || "",
        }),
      })
}

export function get(path) {
  let state = store.getState()
  let session = state.session
    return fetch('/ajax' + path, {
        method: 'get',
        credentials: 'same-origin',
        headers: new Headers({
          'x-csrf-token': window.csrf_token,
          'content-type': "application/json; charset=UTF-8",
          'accept': 'application/json',
          'x-auth': token || "",
        })
    }).then(resp => resp.json())
}

export function getManager(id) {
    get('/managers/' + id).then(resp => console.log(resp))
}

export function submit_login(form) {
  let state = store.getState()
  let data = state.forms.login
  post('/sessions', data).then(resp => {
    if(resp.token) {
      localStorage.setItem('session', JSON.stringify(resp))
      store.dispatch({
        type: 'LOG_IN',
        data: resp
      })
      form.redirect('/' + resp.user_type + '/dashboard')
    } else {
      store.dispatch({
        type: 'CHANGE_LOGIN',
        data: {errors: JSON.stringify(resp.errors)},
      });
    }
  })
}

export function get_workers(id) {
  get('/managers/'+id).then(resp => {
    store.dispatch({
      type: 'GET_USER_LIST',
      data: resp.data
    })
  })
}

export function add_worker(form) {
  let state = store.getState()
  let data = state.forms.new_worker
  console.log(data)
  post('/workers', {worker: data}).then(resp => {
    if(resp.data) {
      store.dispatch({
        type: 'NEW_WORKER',
        data: resp.data
      })
      form.redirect('/manager/dashboard')
    } else {
      store.dispatch({
        type: 'CHANGE_NEW_WORKER',
        data: {errors: JSON.stringify(resp.errors)},
      });
    }
  })
}

