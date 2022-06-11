import {Formik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FC, useEffect} from 'react'
import {Form} from 'react-bootstrap'
import {toast} from 'react-toastify'
import {CustomTooltip} from '../../../routing/customtooltip'
import {useLoader} from '../../loader/LoaderContext'
import { ListPageData } from '../MainPointContext'
import MainPointservice from '../helperMainPoint/ApiDatarequestMainPoint'

type Props = {
  category: any
}

const MainPointFormModal: FC<Props> = ({category}) => {
  const {setItemIdForUpdate, itemIdForUpdate,fetchAllMainPoint, getDataAllType} = ListPageData()
  let {LoderActions} = useLoader()

  {
    /* begin::button onclick function */
  }
  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
    }
    setItemIdForUpdate(undefined)
  }

  {
    /* begin::form on keyDown */
  }
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
      {/* begin::formik form */}

      <Formik
        enableReinitialize={true}
        initialValues={{
          id: category.data?.id,
          name: category.data?.name || '',
          faulttypeid: category.data?.faulttypeid || '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .matches(/^[a-zA-Z\s]*$/, 'Only alphabets are allowed for this field ')
            .required('This field is required'),
          faulttypeid: Yup.number().required('This field is required'),
        })}
        onSubmit={async (values:any, {resetForm}) => {
          LoderActions(true)
          console.log(values, 'values')

          try {
            if (values.id) {
              console.log(values, 'valuesput')

              let response = await MainPointservice.editMainPoint(values)
              console.log(response, 'res======')
              toast.success(` Data Updated Successfully`)
              toast.dismiss('1s')
              fetchAllMainPoint()
              resetForm({})
              cancel()
            } else {
              console.log(values, 'valuespost')

              let response = await MainPointservice.postMainPoint(values)
              console.log(response, 'res=----------====')
              toast.success(` Data Added Successfully`)
              toast.dismiss('1s')
              fetchAllMainPoint()
              resetForm({})
              cancel()
            }
          } catch (error: any) {
            console.log(error, 'error')
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
              {/* begin::Scroll */}
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
                {/* name Filed */}
                <div className='fv-row mb-7'>
                  <label className=' fw-bold fs-6 mb-2'>Name</label>
                  <input
                    placeholder='Name'
                    value={props.values.name}
                    onChange={props.handleChange}
                    type='text'
                    name='name'
                    className='form-control form-control-lg form-control-solid'
                    autoComplete='off'
                  />
                  <div className='erro2' style={{color: 'red'}}>
                    <ErrorMessage name='name' />
                  </div>
                </div>
                {/* Type Field */}

                <div className='col-lg-12'>
                  <label className='form-label fw-bold'>Zone</label>
                  <select
                    className='form-select form-select-solid'
                    {...props.getFieldProps('faulttypeid') }
                  >
                    <option value='' disabled>Select Zone Type</option>
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
                  <ErrorMessage name='faulttypeid' />
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

                  {/* begin::create */}
                  <CustomTooltip title='Submit form'>
                    <button type='submit' className='btn btn-primary' data-bs-dismiss='modal'>
                      {itemIdForUpdate ? 'Update' : 'Create'}
                    </button>
                  </CustomTooltip>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>

      {/* end::formik form */}
    </>
  )
}

export default MainPointFormModal
