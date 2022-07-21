import React from 'react'

// const ComplaintContext = () => {
//   return <div>ComplaintContext</div>
// }

// export default ComplaintContext


import { createContext, Dispatch, FC, SetStateAction, useContext, useEffect, useState } from 'react'
import { saveAs } from 'file-saver'
import axios from 'axios'

import Userservice from './helperComplaint/ApiDataRequest'
import { GetAllData, GetAllUserApi, getUserData, ID } from './helperComplaint/ModelComplaint'
import { useLoader } from '../loader/LoaderContext'

export interface ComplaintDataContextModel {
  setItemIdForUpdate: (_itemIdForUpdate: ID) => void
  itemIdForUpdate: ID
  setSuggestionUserText: Dispatch<SetStateAction<string>>
  getUserNameData: GetAllData[]
  suggestionUserText: string
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  setItemIdForUpdate: (_itemIdForUpdate: ID) => { },
  itemIdForUpdate: undefined,
  setSuggestionUserText: () => { },
  getUserNameData: [],
  suggestionUserText: ''
})
const ListDataProvider: FC = ({ children }) => {
  const [suggestionUserText, setSuggestionUserText] = useState<string>('dfgdfg')
  const [getUserNameData, setgetUserNameData] = useState<GetAllData[]>([])
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)

  let { LoderActions } = useLoader()

  // Download fill


  useEffect(() => {
    console.log("suggestionUserText", suggestionUserText)
    if (suggestionUserText) {
      let fetchSuggestionUser = async () => {
        LoderActions(true)
        try {
          let payload: GetAllData = await Userservice.getUserName(suggestionUserText)
          console.log(payload, 'getUserNamegetUserName')

          if (payload.success == true) {
            LoderActions(false)
            setgetUserNameData(payload?.data)
            console.log(payload.data, 'getUserName')
          } else if (payload.message === 'No records found') {
            setgetUserNameData([])
          }
        } catch (error) {
        } finally {
          LoderActions(false)
        }
      }
      fetchSuggestionUser()
    }
  }, [suggestionUserText])

  const value: ComplaintDataContextModel = {
    setItemIdForUpdate,
    itemIdForUpdate,
    setSuggestionUserText,
    getUserNameData,
    suggestionUserText


  }
  return (
    <>
      <ListDataContext.Provider value={value}>{children}</ListDataContext.Provider>
    </>
  )
}
function ListPageData() {
  return useContext(ListDataContext)
}

export { ListDataProvider, ListPageData }

