import { ListDataProvider, ListPageData } from '../ComplaintContext'
import ComplaintFormByCategory from './ComplaintFormByCategory'


const ComplaintFormWrapper = () => {

  return (
    <>
      <ListDataProvider>
        <ComplaintFormByCategory />
      </ListDataProvider>
    </>
  )
}

export default ComplaintFormWrapper
