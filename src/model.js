const loacalStorageKeyName='recordList'
const model = {
  fetch() {
    return JSON.parse(window.localStorage.getItem(loacalStorageKeyName || '[]'))
  },
  save(data) {
    return window.localStorage.setItem(loacalStorageKeyName, JSON.stringify(data))
  }

}

export {model}