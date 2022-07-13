import {Formik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FC, useEffect} from 'react'
import {Form} from 'react-bootstrap'
import {toast} from 'react-toastify'
import {useLoader} from '../../../../../../app/modules/loader/LoaderContext'
import {CustomTooltip} from '../../../../../../app/routing/customtooltip'
import moment from 'moment'
import {ListPageData} from '../OfficeOldStockOutwardsContext'
import OfficeStockOutwardservice from '../helperOfficeOldStockOutwards/ApiDataRequest'

type Props = {
  category: any
}

const OfficeOldStockOutwardsFormModal: FC<Props> = ({category}) => {
  const {
    setItemIdForUpdate,
    itemIdForUpdate,
    fetchAllofficestockOutward,
    getDataAllTypeZone,
    getDataAllTypeProduct,
  } = ListPageData()
  let {LoderActions} = useLoader()

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
    }
    setItemIdForUpdate(undefined)
  }

  function onKeyDown(keyEvent: any) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault()
    }
  }

  useEffect(() => {
    category && console.log('category', category)

    console.log('itemIdForUpdate', itemIdForUpdate)
  }, [category])

  return (
    <>
      {/* begin::formik Add/Edit form */}

      <Formik
        enableReinitialize={true}
        initialValues={{
          id: category.data?.id || '',
          inwardNo: category.data?.inwardNo,
          inwardDate: moment(category.inwardDate).format('YYYY-MM-DD'),
          productId: category.data?.productId || 0,
          quantityDisplay: category.data?.quantityDisplay || '',
          deliveredById: category.data?.deliveredById || '',
          zoneId: category.data?.zoneId || '',
          serialno: category.data?.serialno || '',
          remark: category.data?.remark || '',
        }}
        validationSchema={Yup.object({
          inwardDate: Yup.string().required('This field is required'),
          productId: Yup.number().required('This field is required'),
          quantityDisplay: Yup.string().required('This field is required'),
          deliveredById: Yup.number().required('This fied is required'),
          zoneId: Yup.number().required('This fielld is required'),
          serialno: Yup.string().required('This field is required'),
          remark: Yup.string().required('This field is required'),
        })}
        onSubmit={async (values: any, {resetForm}) => {
          LoderActions(true)
          console.log(values, 'values')

          try {
            if (values.id) {
              console.log(values, 'valuesput')

              // Edit Api Response
              let response = await OfficeStockOutwardservice.editOfficeStockOutwards(values)
              console.log(response, 'res======')
              toast.success(` Data Updated Successfully`)
              toast.dismiss('1s')
              fetchAllofficestockOutward()
              resetForm({})
              cancel()
            } else {
              console.log(values, 'valuespost')

              // Create Api Response
              let response = await OfficeStockOutwardservice.postOfficeStockOutwards(values)
              console.log(response, 'res=----------====')
              toast.success(` Data Added Successfully`)
              toast.dismiss('1s')
              fetchAllofficestockOutward()
              resetForm({})
              cancel()
            }
          } catch (error: any) {
            console.log(error, 'error')
            toast.error(error.data.message)
          } finally {
            LoderActions(false)
          }
        }}
      >
        {(props) => (
          <>
            {/* {console.log(category, 'category')} */}

            <Form
              id='kt_modal_add_user_form'
              onKeyDown={onKeyDown}
              className='form'
              onSubmit={props.handleSubmit}
              noValidate
            >
              <div
                className='d-flex flex-column scroll-y me-n7 pe-7'
                id='kt_modal_add_user_scroll'
                data-kt-scroll='true'
                data-kt-scroll-activate='{default: false, lg: true}'
                data-kt-scroll-max-height='auto'
                data-kt-scroll-dependencies='#kt_modal_add_user_header'
                data-kt-scroll-wrappers='#kt_modal_add_user_scroll'
                data-kt-scroll-offset='300px'
              >
                {/* begin: input name Filed */}
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className=' col-md-6 col-12'>
                    <label className='form-label fw-bold '>Outward date </label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='date'
                      value={props.values.inwardDate}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name='inwardDate'
                      autoComplete='off'
                    />
                    <div className='erro2' style={{color: 'red'}}>
                      <ErrorMessage name='inwardDate' />
                    </div>
                  </div>

                  <div className=' col-md-6 col-12'>
                    <label className='form-label fw-bold'>Product</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('productId')}
                    >
                      <option value=''>Select Product Type</option>
                      {getDataAllTypeProduct.map((TypeData: any, index) => {
                        return (
                          <option key={index} value={TypeData.id}>
                            {TypeData?.name}
                          </option>
                        )
                      })}
                    </select>
                    <div className='erro2' style={{color: 'red'}}>
                      <ErrorMessage name='productId' />
                    </div>
                  </div>

                  <div className=' col-md-6 col-12'>
                    <label className='form-label fw-bold'>Quantity</label>
                    <input
                      placeholder='quantityDisplay'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      value={props.values.quantityDisplay}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name='quantityDisplay'
                      autoComplete='off'
                    />
                    <div className='erro2' style={{color: 'red'}}>
                      <ErrorMessage name='quantityDisplay' />
                    </div>
                  </div>

                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>Technician</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'>All</option>
                      <option value='2'>Not described</option>
                      <option value='3'>Abalkesh Soft</option>
                      <option value='4'>Ajay Sulin</option>
                    </select>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-6 col-12'>
                    <label className='form-label fw-bold'>Username</label>
                    <input
                      placeholder='Solved at'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-6 col-12'>
                    <label className='form-label fw-bold'>Reason</label>
                    <input
                      placeholder='Solved at'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                </div>

                <div className='col-lg-12'>
                  <label className='form-label fw-bold'>Zone </label>
                  <select
                    className='form-select form-select-solid'
                    {...props.getFieldProps('zoneId')}
                  >
                    <option value='' disabled>
                      Select Zone Type
                    </option>
                    {getDataAllTypeZone.map((TypeData: any, index) => {
                      //

                      return (
                        <option key={index} value={TypeData.id}>
                          {TypeData?.name}
                        </option>
                      )
                    })}
                  </select>
                  <div className='erro2' style={{color: 'red'}}>
                    <ErrorMessage name='zoneId' />
                  </div>
                </div>

                <div className='col-12 col-lg-12'>
                  <label className='form-label fw-bold'>Serial no</label>
                  <textarea
                    className='form-control form-control form-control-solid'
                    value={props.values.serialno}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    name='serialno'
                    placeholder='Serial no'
                  ></textarea>
                  <div className='erro2' style={{color: 'red'}}>
                    <ErrorMessage name='serialno' />
                  </div>
                </div>

                <div className='col-12 col-lg-12'>
                  <div className='col'>
                    <label className='form-label fw-bold'>Remark</label>
                    <input
                      placeholder='Remark'
                      className='form-control form-control-lg form-control-solid'
                      value={props.values.remark}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      type='text'
                      name='remark'
                      autoComplete='off'
                    />
                    <div className='erro2' style={{color: 'red'}}>
                      <ErrorMessage name='remark' />
                    </div>
                  </div>
                </div>

                {/* begin::close button */}
                <div className='modal-footer border-0'>
                  <CustomTooltip title='Close form'>
                    <button
                      type='reset'
                      onClick={() => cancel()}
                      className='btn btn-light'
                      data-kt-users-modal-action='cancel'
                    >
                      Close
                    </button>
                  </CustomTooltip>
                  {/* end::close button */}

                  {/* begin::create/update Button */}
                  <CustomTooltip title='Submit form'>
                    <button type='submit' className='btn btn-primary' data-bs-dismiss='modal'>
                      {itemIdForUpdate ? 'Update' : 'Create'}
                    </button>
                  </CustomTooltip>
                  {/* end::create/update Button */}
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>

      {/* end::formik Add/Edit form */}
    </>
  )
}

export default OfficeOldStockOutwardsFormModal
