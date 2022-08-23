import {useQuery} from 'react-query'
import {useEffect} from 'react'
import {isNotEmpty} from '../../../../_metronic/helpers'
import {ListPageData} from '../ProductListContext'
import Complaintservice from '../helperProduct/ApiDatarequestProduct'
import ProductFormModal from './ProductFormModal'

function ProductFormByCategory() {
  const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

  {
    /* begin:: Api call GetProductById */
  }
  const {data: category, error} = useQuery(
    `GetProductById/-${itemIdForUpdate}`,
    () => {
      return Complaintservice.GetProductTypeById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setItemIdForUpdate(undefined)
      },
    }
  )
  {
    /* end:: Api call GetProductById */
  }

  {
    /* begin::Add-Form Model functionality */
  }
  if (!itemIdForUpdate) {
    return <ProductFormModal category={{ID: undefined}} />
  }
  {
    /* end::Add-Form Model functionality */
  }

  {
    /* begin::Edit-Form Model functionality */
  }
  if (!error && category) {
    return <ProductFormModal category={category} />
  }
  {
    /* end::Edit-Form Model functionality */
  }

  return null
}

export default ProductFormByCategory
