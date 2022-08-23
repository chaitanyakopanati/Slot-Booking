import {Formik} from 'formik'
import {FC, useEffect, useState} from 'react'
import * as Yup from 'yup'
import {KTSVG} from '../../../../../../helpers'
import 'bootstrap-daterangepicker/daterangepicker.css'
import {ListPageData} from '../../GodownStockAvailabilityContext'
import {useAuth} from '../../../../../../../app/modules/auth'
import Access from '../../../../../../layout/components/aside/Accessibility'

type Props = {
  category: any
}

const GodownStockAvailabilityHeader: FC<Props> = ({category}) => {
  const {
    setFilterShow,
    filterShow,
    setSearchText,
    searchText,
    setPageNo,
    fetchAllofficestockOutward,
    pageNo,
    pageSize,
    getDataAllTypeProduct,
    productId,
    setproductId,
    fetchAllDownload,
  } = ListPageData()
  const {currentUser, auth} = useAuth()
  const id: number | any = auth?.roleId

  {
    /* begin::Search */
  }
  const handlesearchange = (e: any) => {
    setPageNo(1)
    setSearchText(e.target.value)
  }
  {
    /* End::Search */
  }
  {
    /* begin::Product */
  }
  const handleProductchange = (e: any) => {
    setPageNo(1)
    setproductId(e.target.value)
  }

  useEffect(() => {
    fetchAllofficestockOutward()
  }, [pageNo, pageSize, searchText, productId])

  // download
  const downloadFile = async () => {
    fetchAllDownload()
  }

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
                  {/* begin::Download */}
                  {Access[id].hasOwnProperty('download') && (
                    <div className='ms-auto'>
                      <button
                        type='button'
                        className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                        onClick={downloadFile}
                      >
                        <span className='svg-icon svg-icon-gray-500 me-0'>
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr091.svg'
                            className='svg-icon-3 me-0'
                          />
                        </span>
                        <span className='d-none d-sm-block ms-3'>Download report</span>
                      </button>
                    </div>
                  )}
                  {/* end:: Download */}

                  {/* begin::Filter */}
                  <div className='ms-3' onClick={() => setFilterShow(!filterShow)}>
                    <div className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
                      <span className='svg-icon svg-icon-gray-500 me-0'>
                        <KTSVG
                          path='/media/icons/duotune/general/gen031.svg'
                          className='svg-icon-3 me-0'
                        />
                      </span>
                      <span className='d-none d-sm-block ms-3'>Filter</span>
                    </div>
                  </div>
                  {/* end:: Filter */}
                </div>
              </div>

              {/* begin:: Filter:- Created By */}
              {filterShow && (
                <div className='row w-100 mx-0 my-5'>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Product</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('productId')}
                      value={productId}
                      onChange={handleProductchange}
                    >
                      <option value=''>All</option>
                      {getDataAllTypeProduct.map((TypeData: any, index) => {
                        return (
                          <option key={index} value={TypeData.id}>
                            {TypeData?.name}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                </div>
              )}
              {/* end:: Filter:- Created By */}
            </div>
            {/* end::Header */}
          </form>
        )}
      </Formik>
      {/* End::Formik Form */}
    </>
  )
}
export default GodownStockAvailabilityHeader
