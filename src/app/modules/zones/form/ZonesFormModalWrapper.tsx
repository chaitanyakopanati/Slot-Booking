import { useQuery } from 'react-query'
import { useEffect } from 'react'
import { isNotEmpty } from '../../../../_metronic/helpers'
import { ListPageData } from '../ZonesContext'
import ZonesFormModal from './ZonesFormModal'
import Zoneservice from '../helperZones/ApiDatarequestZones'

const ZonesFormModalWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
    const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  
     {/* begin:: getbyid pass */}
    const {
      data: category,
      error,
    } = useQuery(
      `GetZoneById-${itemIdForUpdate}`,
      () => {
        return Zoneservice.GetZonesTypeById(itemIdForUpdate)
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
      return <ZonesFormModal  category={{ID: undefined}} />
    }
  
    if ( !error && category) {
      return <ZonesFormModal  category={category} />
    }
  
    return null
  }
  export default ZonesFormModalWrapper