import { useQuery } from 'react-query'
import { useEffect } from 'react'
import { isNotEmpty } from '../../../../_metronic/helpers'
import { ListPageData } from '../ProductListContext'
import Complaintservice from '../helperProduct/ApiDatarequestProduct'
import ProductFormModal from './ProductFormModal'


function ProductFormModalWrapper() {
  const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

   {/* begin:: getbyid pass */}
  const {
    data: category,
    error,
  } = useQuery(
    `GetProductById/-${itemIdForUpdate}`,
    () => {
      return Complaintservice.GetProductTypeById(itemIdForUpdate)
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
    return <ProductFormModal  category={{ID: undefined}} />
  }

  if ( !error && category) {
    return <ProductFormModal  category={category} />
  }

  return null
}

export default ProductFormModalWrapper
