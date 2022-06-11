import { useQuery } from 'react-query'
import { useEffect } from 'react'
import { ListPageData } from '../FaultsContext'
import { isNotEmpty } from '../../../../_metronic/helpers'
import Complaintservice from '../helperFaults/ApiDatarequest'
import FaultsFormModal from './FaultsFormModal'


const FaultsFormModalWrapper = () =>{
    const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
    const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  
     {/* begin:: getbyid pass */}
    const {
      data: category,
      error,
    } = useQuery(
      `GetFaultById-${itemIdForUpdate}`,
      () => {
        return Complaintservice.GetFaultsTypeById(itemIdForUpdate)
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
      return <FaultsFormModal  category={{ID: undefined}} />
    }
  
    if ( !error && category) {
      return <FaultsFormModal  category={category} />
    }
  
    return null
}
export default FaultsFormModalWrapper