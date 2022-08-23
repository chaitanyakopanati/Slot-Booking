import {Formik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FC, useEffect} from 'react'
import {Form} from 'react-bootstrap'
import {toast} from 'react-toastify'
import {CustomTooltip} from '../../../routing/customtooltip'
import {useLoader} from '../../loader/LoaderContext'
import {ListPageData} from '../MainPointContext'
import MainPointservice from '../helperMainPoint/ApiDatarequest'
import {useAuth} from '../../auth'

type Props = {
  category: any
}

const MainPointFormModal: FC<Props> = ({category}) => {
  const {setItemIdForUpdate, itemIdForUpdate, fetchAllMainPoint, getDataAllType} = ListPageData()
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
          zoneid: category.data?.zoneid || '',
          createdby: auth?.userId,
          modifyby: auth?.userId,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .matches(/^[a-zA-Z0-9\s]*$/, 'Only alphanumerics are allowed for this field ')
            .max(25, 'Max 25 Characters Allowed')
            .required('This field is required'),
          zoneid: Yup.number().required('This field is required'),
        })}
        onSubmit={async (values: any, {resetForm}) => {
          LoderActions(true)

          try {
            if (values.id) {
              // Edit Api Response
              let response = await MainPointservice.editMainPoint(values)
              if (response.success === true) {
                // toast.success(` Data Updated Successfully`)
                toast.success(response.message)
                toast.dismiss('1s')
                fetchAllMainPoint()
                resetForm({})
                cancel()
              } else {
                toast.error(response.message)
              }
            } else {
              // Create Api Response
              let response = await MainPointservice.postMainPoint(values)
              if (response.success === true) {
                // toast.success(` Data Added Successfully`)
                toast.success(response.message)
                toast.dismiss('1s')
                fetchAllMainPoint()
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
                      if (e.target.value.length <= 20) {
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

                {/* begin: MainPoint Zone Filed */}
                <div className='col-lg-12'>
                  <label className='form-label fw-bold required'>Zone</label>
                  <select
                    className='form-select form-select-solid'
                    {...props.getFieldProps('zoneid')}
                  >
                    <option value=''>Select Zone Type</option>
                    {getDataAllType.map((TypeData, index) => {
                      return (
                        <option key={index} value={TypeData?.id}>
                          {TypeData?.name}
                        </option>
                      )
                    })}
                  </select>
                </div>
                <div className='erro2' style={{color: 'red'}}>
                  <ErrorMessage name='zoneid' />
                </div>
                {/* end: MainPoint Zone Filed */}

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

export default MainPointFormModal
