import ReactPaginate from 'react-paginate'
import {ListPageData} from '../../PackagesCategoriesContext'

const PackagescategoriesPagination = () => {
  const {setPageNo, setPageSize, pageCount, getData} = ListPageData()

  const handlepageclick = async (data: any) => {
    const currantPage = (await data.selected) + 1
    setPageNo(currantPage)
  }

  return (
    <>
      {getData.length > 0 ? (
        <div className='card-body py-3'>
          <div className='d-flex align-items-center justify-content-between pt-5'>
            <div className='min-w-100px'>
              {/* begin:: Page Size */}
              <div className='mb-10 d-flex align-items-center' data-select2-id='show-enteries'>
                <label className='form-label fw-bold me-2 mb-0'>Show entries:</label>
                <div data-select2-id='show-enteries'>
                  <select
                    className='form-select form-select-solid h-40px py-2'
                    onChange={(e: any) => {
                      setPageSize(e.target.value)
                      setPageNo(1)
                    }}
                  >
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                    <option value='100'>100</option>
                  </select>
                </div>
              </div>
              {/* end:: Page Size */}
            </div>

            {/* begin:: Page Index */}
            <div className='App'>
              <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlepageclick}
                containerClassName={'pagination justify-content-center '}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
              />
            </div>
            {/* end:: Page Index */}

            {/* begin:: Page Data Result */}
            <div className='form-label fw-bold px-4'>
              {/* Showing {pageSize * pageNo + 1}-{lastIndex} of {totalData} entries */}
              Showing 1-10 of 100 entries
            </div>
            {/* end:: Page Data Result */}
          </div>
        </div>
      ) : null}
    </>
  )
}
export default PackagescategoriesPagination
