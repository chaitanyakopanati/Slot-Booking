import React from 'react'
import InquiriesFormModal from './InquiriesFormModal'

const InquiriesFormByCategory = () => {
  //     const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
  //   const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

  {
    /* begin:: Api call GetBankById */
  }
  //   const {data: category, error} = useQuery(
  //     `GetBankById-${itemIdForUpdate}`,
  //     () => {
  //       return Zoneservice.GetBankTypeById(itemIdForUpdate)
  //     },
  //     {
  //       cacheTime: 0,
  //       enabled: enabledQuery,
  //       onError: (err) => {
  //         setItemIdForUpdate(undefined)
  //         console.error(err)
  //       },
  //     }
  //   )
  {
    /* end:: Api call GetBankById */
  }

  //   useEffect(() => {
  //     console.log('category', category)
  //     console.log('itemIdForUpdate', itemIdForUpdate)
  //   }, [category])

  {
    /* begin::Add-Form Model functionality */
  }
  //   if (!itemIdForUpdate) {
  //     return <BankFormModal category={{ID: undefined}} />
  //   }
  {
    /* end::Add-Form Model functionality */
  }

  {
    /* begin::Edit-Form Model functionality */
  }
  //   if (!error && category) {
  //     return <BankFormModal category={category} />
  //   }
  {
    /* end::Edit-Form Model functionality */
  }

  //   return null

  return (
    <>
      <div>
        <InquiriesFormModal />
      </div>
    </>
  )
}

export default InquiriesFormByCategory
