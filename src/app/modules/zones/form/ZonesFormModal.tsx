import {Formik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FC, useEffect} from 'react'
import {Form} from 'react-bootstrap'
import {toast} from 'react-toastify'
import {CustomTooltip} from '../../../routing/customtooltip'
import {useLoader} from '../../loader/LoaderContext'
import {ListPageData} from '../ZonesContext'
import Zoneservice from '../helperZones/ApiDatarequest'
import {useAuth} from '../../auth'

type Props = {
  category: any
}

const ZonesFormModal: FC<Props> = ({category}) => {
  const {setItemIdForUpdate, itemIdForUpdate, fetchAllZone} = ListPageData()
  let {LoderActions} = useLoader()

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
    }
    setItemIdForUpdate(undefined)
  }

  const {auth} = useAuth()
  console.log(auth?.userId, 'auth')

  function onKeyDown(keyEvent: any) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault()
    }
  }

  useEffect(() => {
    console.log('category', category)
    console.log('itemIdForUpdate', itemIdForUpdate)
  }, [category])

  return (
    <>
      {/* begin::formik Add/Edit form */}

      <Formik
        enableReinitialize={true}
        initialValues={{
          id: category.data?.id,
          name: category.data?.name || '',
          faulttypeid: category.data?.faulttypeid || '',
          modifyById: auth?.userId,
          createdById: auth?.userId,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .matches(/^[a-zA-Z0-9\s]*$/, 'Only alphanumerics are allowed for this field ')
            .max(25, 'Max 25 Characters Allowed')
            .required('This field is required'),
        })}
        onSubmit={async (values, {resetForm}) => {
          LoderActions(true)
          console.log(values, 'values')

          try {
            if (values.id) {
              console.log(values, 'valuesput')

              // Edit Api Response
              let response = await Zoneservice.editZones(values)
              if (response.success === true) {
                console.log(response, 'res======')
                // toast.success(` Data Updated Successfully`)
                toast.success(response.message)
                toast.dismiss('1s')
                fetchAllZone()
                resetForm({})
                cancel()
              } else {
                console.log(response, 'res=----------====')
                toast.error(response.message)
              }
            } else {
              console.log(values, 'valuespost')

              // Create Api Response
              let response = await Zoneservice.postZones(values)
              if (response.success === true) {
                console.log(response, 'res=----------====zone post')
                // toast.success(` Data Added Successfully`)
                toast.success(response.message)
                toast.dismiss('1s')
                fetchAllZone()
                resetForm({})
                cancel()
              } else {
                console.log(response, 'res=----------====')
                toast.error(response.message)
                resetForm({})
              }
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
            {console.log(category, 'category')}

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
export default ZonesFormModal
