import {Formik} from 'formik'
import {useEffect, FC} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {ListPageData} from '../../ProductListContext'
import * as Yup from 'yup'

type Props = {
  category: any
}

const ProductHeader: FC<Props> = ({category}) => {
  const {
    setItemIdForUpdate,
    setFilterShow,
    fetchAllProduct,
    filterShow,
    setSearchText,
    searchText,
    pageNo,
    pageSize,
    setPageNo,
    createdById,
    setCreatedById,
    getDataAllTypeCreatedBy,
    getData,
    getDataProductAllType,
    getDataProduct,
    connectionTypeId,
    setConnectionTypeId,
  } = ListPageData()

  const openAddCategoryModal = () => {
    setItemIdForUpdate(null)
  }

  {
    /* begin::Search */
  }
  const handlesearchange = (e: any) => {
    setPageNo(1)
    setSearchText(e.target.value)
  }
  {
    /* begin::Search */
  }

  {
    /* begin::Createdby */
  }
  const handleCreatedBychange = (e: any) => {
    setPageNo(1)
    setCreatedById(e.target.value)
  }

  const handleConnectionTypechange = (e: any) => {
    setPageNo(1)
    setConnectionTypeId(e.target.value)
  }
  {
    /* End::Createdby */
  }

  useEffect(() => {
    fetchAllProduct()
  }, [])

  useEffect(() => {
    fetchAllProduct()
    getDataProductAllType()
  }, [pageNo, pageSize, searchText, createdById, connectionTypeId])

  return (
    <>
      {/* begin::Formik Form */}
      <Formik
        initialValues={{
          createdById: category.data?.createdById || '',
          createdByName: category.data?.createdByName || '',
          id: category.data?.id || '',
        }}
        validationSchema={Yup.object({
          createdById: Yup.number().required('This fied is required'),
          id: Yup.string().required('This fied is required'),
        })}
        onSubmit={async (values: any, {resetForm}) => {}}
      >
        {(props) => (
          <form>
            {/* begin::Header */}
            <div className='card-header border-0 pt-5'>
              <div className='card-title d-flex  flex-md-row flex-column gap-3 align-items-center justify-content-between w-100 mx-0'>
                <div className='d-flex align-items-center position-relative my-1 col-12 col-md-3'>
                  <span className='svg-icon svg-icon-1 position-absolute ms-4'>
                    <KTSVG path='/media/icons/duotune/general/gen021.svg' className='svg-icon-3' />
                  </span>
                  {/* begin::Search */}
                  <input
                    type='text'
                    value={searchText}
                    onChange={handlesearchange}
                    className='form-control form-control-solid ps-14'
                    placeholder='Search'
                  />
                  {/* end:: Search */}
                </div>

                <div className='d-flex align-items-center'>
                  {/* begin::Filter */}
                  <div className='ms-3' onClick={() => setFilterShow(!filterShow)}>
                    <div className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
                      <span className='svg-icon svg-icon-gray-500 me-0'>
                        <KTSVG
                          path='/media/icons/duotune/general/gen031.svg'
                          className='svg-icon-2 me-0'
                        />
                      </span>
                      <span className='d-none d-sm-block ms-3'>Filter</span>
                    </div>
                  </div>
                  {/* end:: Filter */}

                  {/* begin::Create Product Button*/}
                  <div
                    className='d-flex justify-content-end ms-3'
                    data-kt-user-table-toolbar='base'
                  >
                    <div title='Click to add new category'>
                      <button
                        type='button'
                        className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                        onClick={openAddCategoryModal}
                      >
                        <span className='svg-icon svg-icon-gray-500 me-1'>
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr075.svg'
                            className='svg-icon-3'
                          />
                        </span>
                        Create Product
                      </button>
                    </div>
                  </div>
                  {/* end::Create Product Button*/}
                </div>
              </div>

              {/* begin:: Filter:- Created By */}
              <div className='row w-100 gy-1 mx-0 my-5'>
                {filterShow && (
                  <div className='row w-100 gy-1 mx-0 my-5'>
                    {/* <div className='row gy-2 w-100 mx-0 mt-5'> */}
                    <div className='col-lg-3 col-md-3 '>
                      <label className='form-label fw-bold'>Created by:</label>
                      <select
                        className='form-select form-select-solid'
                        {...props.getFieldProps('id')}
                        value={createdById}
                        onChange={handleCreatedBychange}
                      >
                        <option value=''>All</option>
                        {getDataAllTypeCreatedBy.map((TypeData, index) => {
                          return (
                            <option key={index} value={TypeData?.id}>
                              {TypeData?.fullName}
                            </option>
                          )
                        })}
                      </select>
                      {/* </div> */}
                    </div>

                    {/* <div className='row gy-2 w-100 mx-0 mt-5'> */}
                    <div className='col-lg-3 col-md-3'>
                      <label className='form-label fw-bold'>Connection Type:</label>
                      <select
                        className='form-select form-select-solid'
                        {...props.getFieldProps('connnectionTypeId')}
                        value={connectionTypeId}
                        onChange={handleConnectionTypechange}
                      >
                        <option value=''>All</option>
                        <option value='1'>Cable</option>
                        <option value='2'>Wireless</option>
                        <option value='3'>Fibre</option>
                        <option value='4'>Other</option>
                      </select>
                    </div>
                  </div>
                  // </div>
                )}
              </div>
            </div>
            {/* end:: Filter:- Created By */}
            {/* end::Header */}
          </form>
        )}
      </Formik>
      {/* End::Formik Form */}
    </>
  )
}
export default ProductHeader
