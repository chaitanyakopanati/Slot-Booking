import CustomerFormModal from "./CustomerFormModal"

const CustomerFormByCategory = () =>{
//     const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
//   const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

//   {
//     /* begin:: Api call GetCompanyById */
//   }
//   const {data: category, error} = useQuery(
//     `GetCompanyById-${itemIdForUpdate}`,
//     () => {
//       return Zoneservice.GetCompaniesTypeById(itemIdForUpdate)
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
//   {
//     /* end:: Api call GetCompanyById */
//   }

//   useEffect(() => {
//     console.log('category', category)
//     console.log('itemIdForUpdate', itemIdForUpdate)
//   }, [category])

//   {
//     /* begin::Add-Form Model functionality */
//   }
//   if (!itemIdForUpdate) {
//     return <CompaniesFormModal category={{ID: undefined}} />
//   }
//   {
//     /* begin::Add-Form Model functionality */
//   }

//   {
//     /* begin::Edit-Form Model functionality */
//   }
//   if (!error && category) {
//     return <CompaniesFormModal category={category} />
//   }
//   {
//     /* end::Edit-Form Model functionality */
//   }

//   return null

 return(
    <CustomerFormModal/>
 )
}
export default CustomerFormByCategory