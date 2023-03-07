import {Formik} from 'formik'
import {FC, useEffect, useState} from 'react'
import * as Yup from 'yup'
import {KTSVG} from '../../../../../../helpers'
import {ListPageData} from '../../OfficeOldStockInwardsContext'
import { DateRangePicker } from 'rsuite';
import "rsuite/dist/rsuite.css"
import moment from 'moment'
import closeIcon from '../../../../../../../app/images/closeIcon.svg'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../../../../../../../app/modules/auth'
import Access from '../../../../../../layout/components/aside/Accessibility'

type Props = {
  category: any
}

const OfficeOldStockInwardsHeader: FC<Props> = ({category}) => {
  const navigate = useNavigate()
  const {
    setItemIdForUpdate,
    setFilterShow,
    filterShow,
    setSearchText,
    searchText,
    setPageNo,
    getDataAllType,
    createdBy,
    setcreatedById,
    fetchAllUser,
    pageNo,
    pageSize,
    startDate,
    endDate,
    getDataAllTypeCreatedBy,
    setStartDate,
    zoneId,
    setZoneId,
    getDataAllTypeProduct,
    setEndDate,
    productId,
    fetchAllDownload,
    setProductId,
  } = ListPageData()
  const {currentUser, auth} = useAuth()
  const id: number | any = auth?.roleId

  const [fromDate, setFromDate] = useState<any>()
  const [toDate, setToDate] = useState<any>()
  const range = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [
      moment().subtract(1, 'month').startOf('month'),
      moment().subtract(1, 'month').endOf('month'),
    ],
    'Last Year': [
      moment().subtract(1, 'year').startOf('year'),
      moment().subtract(1, 'year').endOf('year'),
    ],
  }

  const handleEvent = (date: any) => {
    if (!date) {
      console.log("222");
      setFromDate('')
      setToDate('')
      setStartDate('')
      setEndDate('')
    } else {
      setFromDate(date[0])
      setToDate(date[1])
      setStartDate(moment(date[0]).format('YYYY-MM-DD'))
      setEndDate(moment(date[1]).format('YYYY-MM-DD'))
    }
  }

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
    setProductId(e.target.value)
  }

  {
    /* begin::CreatedBy */
  }
  const handleCratedBychange = (e: any) => {
    setPageNo(1)
    setcreatedById(e.target.value)
  }
  {
    /* End::CreatedBy */
  }

  {
    /* begin::Zone */
  }
  const handleZoneChange = (e: any) => {
    setPageNo(1)
    setZoneId(e.target.value)
  }

  useEffect(() => {
    fetchAllUser()
  }, [pageNo, pageSize, searchText, createdBy, startDate, endDate, zoneId, productId])

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

                  {/* begin::Create MainPoint Button */}
                  <div
                    className='d-flex justify-content-end ms-3'
                    data-kt-user-table-toolbar='base'
                  >
                    <div title='Click to add new category'>
                      <button
                        type='button'
                        className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                        onClick={() => {
                          navigate('inwardsOldform/add')
                        }}
                      >
                        <span className='svg-icon svg-icon-gray-500 me-1'>
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr075.svg'
                            className='svg-icon-3'
                          />
                        </span>
                        Create office stock inward
                      </button>
                    </div>
                  </div>
                  {/* end::Create MainPoint Button */}
                </div>
              </div>

              {/* begin:: Filter:- Created By */}
              {filterShow && (
                <div className='row w-100 mx-0 my-5'>
                  <div className='col-lg-3'>
                    <div
                      style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}
                    >
                      <div>
                        <label className='form-label fw-bold'>Inward date</label>
                        {/* <span
                          role='button'
                          onClick={() => {
                            setFromDate('')
                            setToDate('')
                            setStartDate('')
                            setEndDate('')
                          }}
                        >
                          <img src={closeIcon} style={{height: '14px', marginLeft: '5px'}} />
                        </span> */}
                      </div>

                      <div>
                      <DateRangePicker
                          format="yyyy-MM-dd"
                          showOneCalendar
                          onChange={(date: any) => {
                            handleEvent(date)
                          }}
                        >
                           {/* <div className='form-select form-select-solid'>
                           <input
                              style={{background: '#f5f8fa', border: 'none', outline: 'none'}}
                              placeholder='All'
                              value={`${
                                fromDate && toDate
                                  ? `${moment(fromDate).format('DD-MM-yyyy')}-${moment(
                                      toDate
                                    ).format('DD-MM-yyyy')}`
                                  : ''
                              }`}
                            />
                            </div> */}
                        </DateRangePicker>
                       
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-3 col-md-3'>
                    <label className='form-label fw-bold'>Created by:</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('id')}
                      value={createdBy}
                      onChange={handleCratedBychange}
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
                  </div>

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

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Zone</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('zoneId')}
                      value={zoneId}
                      onChange={handleZoneChange}
                    >
                      <option value=''>All</option>
                      {getDataAllType.map((TypeData, index) => {
                        return (
                          <option key={index} value={TypeData?.id}>
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
export default OfficeOldStockInwardsHeader
