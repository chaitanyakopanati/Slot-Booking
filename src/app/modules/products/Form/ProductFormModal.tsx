import {Formik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FC, useEffect} from 'react'
import {Form} from 'react-bootstrap'
import {toast} from 'react-toastify'
import {useLoader} from '../../loader/LoaderContext'
import {CustomTooltip} from '../../../routing/customtooltip'
import {ListPageData} from '../ProductListContext'
import Complaintservice from '../helperProduct/ApiDatarequestProduct'
import {useAuth} from '../../auth'

type Props = {
  category: any
}

const ProductFormModal: FC<Props> = ({category}) => {
  const {setItemIdForUpdate, fetchAllProduct, itemIdForUpdate} = ListPageData()
  let {LoderActions} = useLoader()

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
    }
    setItemIdForUpdate(undefined)
  }

  const {auth} = useAuth()

  function onKeyDown(keyEvent: any) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault()
    }
  }

  return (
    <>
      {/* begin::formik Add/Edit form */}

      <Formik
        enableReinitialize={true}
        initialValues={{
          id: category.data?.id,
          name: category.data?.name || '',
          connectionTypeId: category.data?.connectionTypeId || '',
          unit: category.data?.unit || '',
          createdby: auth?.userId,
          modifyby: auth?.userId,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            // .matches(/^[a-zA-Z0-9\s]*$/, 'Only alphanumerics are allowed for this field ')
            .max(100, 'Max 100 Characters Allowed')
            .required('This field is required'),
          unit: Yup.string()
            // .min(1, 'Etr must be of 3digit ')
            .required('This field is required'),
          connectionTypeId: Yup.number().required('This field is required'),
        })}
        onSubmit={async (values: any, {resetForm}) => {
          values.connectionTypeId = +values.connectionTypeId

          LoderActions(true)
          // values?.connectionTypeId = +values?.connectionTypeId
          try {
            if (values.id) {
              // Edit Api Response
              let response = await Complaintservice.editProduct(values)
              if (response.success === true) {
                // toast.success(` Data Updated Successfully`)
                toast.success(response.message)
                toast.dismiss('1s')
                fetchAllProduct()
                resetForm({})
                cancel()
              } else {
                toast.error(response.message)
              }
            } else {
              // Create Api Response
              let response = await Complaintservice.postProduct(values)
              if (response.success === true) {
                // toast.success(` Data Added Successfully`)
                toast.success(response.message)
                toast.dismiss('1s')
                fetchAllProduct()
                resetForm({})
                cancel()
              } else {
                toast.error(response.message)
                resetForm({})
              }
            }
          } catch (error: any) {
            toast.error(error.data.message)
          } finally {
            LoderActions(false)
          }
        }}
      >
        {(props) => (
          <>
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
                <div className='fv-row mb-7'>
                  <label className=' fw-bold fs-6 mb-2 required'>Name</label>
                  <input
                    placeholder='Name'
                    value={props.values.name}
                    onChange={(e) => {
                      if (e.target.value.length <= 100) {
                        props.handleChange(e)
                      }
                    }}
                    type='text'
                    name='name'
                    className='form-control form-control-lg form-control-solid'
                    autoComplete='off'
                  />
                  <div className='erro2' style={{color: 'red'}}>
                    <ErrorMessage name='name' />
                  </div>
                </div>
                {/* end: input name Filed */}

                {/*begin:: input Unit Filed */}
                <div className='row w-100 mb-4 gy-4'>
                  <div className='col'>
                    <label className='form-label fw-bold required'>Unit</label>
                    <input
                      name='unit'
                      placeholder='Unit'
                      value={props.values.unit}
                      onChange={props.handleChange}
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                    <div className='erro2' style={{color: 'red'}}>
                      <ErrorMessage name='unit' />
                    </div>
                  </div>
                </div>

                <div className='col-lg-12'>
                  <label className='form-label fw-bold required'>Connection Type</label>
                  <select
                    className='form-select form-select-solid'
                    {...props.getFieldProps('connectionTypeId')}
                  >
                    <option value=''>Select Connection Type</option>
                    <option value='1'>Cable</option>
                    <option value='2'>Wireless</option>
                    <option value='3'>Fibre</option>
                    <option value='4'>Other</option>
                  </select>
                  <div className='erro2' style={{color: 'red'}}>
                    <ErrorMessage name='connectionTypeId' />
                  </div>
                </div>
                {/*end:: input Unit Filed */}

                <div className='modal-footer border-0'>
                  {/* begin::close button */}
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

export default ProductFormModal
