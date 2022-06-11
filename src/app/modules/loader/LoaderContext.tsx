import {createContext, FC, ReactNode, useContext, useEffect, useState} from 'react'
import Loader from './Loader'

export interface LoaderDataContextModel {
  open: boolean
  LoderActions: (value: boolean) => void
}

const LoaderContext = createContext<LoaderDataContextModel>({
  open: false,
  LoderActions: (value: boolean) => {},
})

type props = {
  childre: ReactNode
}

const LoaderProvider: FC = ({children}) => {
  const [open, setOpen] = useState(false)

  let LoderActions = (value: boolean) => {
    setOpen(value)
  }

  let value: LoaderDataContextModel = {
    open,
    LoderActions,
  }
  return (
    <>
      <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
    </>
  )
}

const useLoader = () => {
  return useContext(LoaderContext)
}

export default LoaderProvider
export {LoaderContext, LoaderProvider, useLoader}
