import { useEffect, useState } from 'react'
import { notifyError } from '../utils/notification'
import { DB_ERROR_MSG } from '../constants/toastMessages'

export const useGetCollection = ({ collectionName }: {collectionName: string}) => {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState({})

  return {
    error: error,
    isLoading: isLoading,
    data: data
  }
}
