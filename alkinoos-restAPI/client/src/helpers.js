/* eslint-disable prefer-destructuring */
export const formatPrice = cents => {
  const options = {
    style: 'currency',
    currency: 'USD'
  }
  return (cents / 100).toLocaleString('en-US', options)
}

export const formatDate = date => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }
  return date.toLocaleDateString('en-US', options)
}

export const splitDate = date => {
  let formatedDate = ''
  const temp = date.split(',')
  formatedDate = temp[1]
  return formatedDate
}

export const splitTime = date => {
  let formatedTime = ''
  const temp = date.split(',')
  formatedTime = temp[3]
  return formatedTime
}

export const handleResponseErrors = res => {
  if (!res.ok) {
    console.log('Response inside of handleResponseErrors fn', res)
    throw Error(res)
  }
  return res
}

export const loadLocalStorageState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveLocalStorageState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {}
}

export const tomorrow = () => {
  const today = new Date()
  const tomorrow = new Date()
  tomorrow.setDate(today.getDate() + 1)
  return tomorrow
}

//new Date(new Date().setDate(new Date().getDate() + 1))
