import { useEffect, useState, useContext } from 'react'
import { DataContext } from '../components/DataContext'

export const useCompanyData = () => {
  type CompanyData = {
    name: string,
    hours: string | any,
    contact: string | any,
    location: string | any,
    isLoading: boolean
  }
  const { state } = useContext(DataContext)
  const [companyData, setCompanyData] = useState<CompanyData>({
    name: '',
    hours: '',
    location: '',
    contact: '',
    isLoading: false
  })

  // useEffect(() => {
  //   //const data = state.company.data
  //   setCompanyData({
  //     ...companyData,
  //     isLoading: false
  //   })
  //   console.log('useCompanyData', companyData)
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return {
    name: companyData.name,
    hours: companyData.hours,
    location: companyData.location,
    contact: companyData.contact,
    isLoading: companyData.isLoading
  }
}
