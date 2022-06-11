import { useQuery } from 'react-query'
import { useEffect } from 'react'
import { isNotEmpty } from '../../../../_metronic/helpers'
import { ListPageData } from '../BankContext'
import Zoneservice from '../helperBank/ApiDatarequestBank'
import BankFormModal from './BankFormModal'


const BankFormModalWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
    const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  
     {/* begin:: getbyid pass */}
    const {
      data: category,
      error,
    } = useQuery(
      `GetBankById-${itemIdForUpdate}`,
      () => {
        return Zoneservice.GetBankTypeById(itemIdForUpdate)
      },
      {
        cacheTime: 0,
        enabled: enabledQuery,
        onError: (err) => {
          setItemIdForUpdate(undefined)
          console.error(err)
        },
      }
    )
  
    useEffect(() => {
    console.log("category",category)
    console.log("itemIdForUpdate",itemIdForUpdate)
    }, [category])
  
     {/* begin::form model functionality */}
    if (!itemIdForUpdate) {
      return <BankFormModal  category={{ID: undefined}} />
    }
  
    if ( !error && category) {
      return <BankFormModal  category={category} />
    }
  
    return null
  }
  export default BankFormModalWrapper