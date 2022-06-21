import {Formik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FC, useEffect} from 'react'
import {Form} from 'react-bootstrap'
import {toast} from 'react-toastify'
import {CustomTooltip} from '../../../routing/customtooltip'
import {useLoader} from '../../loader/LoaderContext'
import {ListPageData} from '../UserContext'
import Userservice from '../helperUser/ApiDatarequestUser'
import {useNavigate} from 'react-router-dom'

type Props = {
  category: any
}

const UserFormModal: FC<Props> = ({category}) => {
  const {setItemIdForUpdate, itemIdForUpdate, fetchAllUser, getDataAllType, getDataAllTypeRole} =
    ListPageData()
  let {LoderActions} = useLoader()
  const navigation = useNavigate()

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
          firstname: category.data?.firstname || '',
          lastname: category.data?.lastname || '',
          username: category.data?.username || '',
          email: category.data?.email || '',
          phone: category.data?.phone || '',
          zoneId: category.data?.zoneId || '',
          roleId: category.data?.roleId || '',
          password: category.data?.password || '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object({
          firstname: Yup.string()
            .matches(/^[a-zA-Z\s]*$/, 'Only alphabets are allowed for this field ')
            .required('This field is required'),
          lastname: Yup.string()
            .matches(/^[a-zA-Z\s]*$/, 'Only alphabets are allowed for this field ')
            .required('This field is required'),
          username: Yup.string()
            .matches(/^[a-zA-Z\s]*$/, 'Only alphabets are allowed for this field ')
            .required('This field is required'),
          email: Yup.string().email('Invalid email format').required('This field is required'),
          phone: Yup.string()
            //  .min(10, 'Min 10 digits are allowed')
            // .max(10, 'Max 10 digits are allowed')
            .min(10, 'Invalid Phone Number')
            .matches(/^[0-9]{0,10}$/, 'Invalid Phone Number')
            .required('This field is required'),
          zoneId: Yup.number().required('This fied is required'),
          roleId: Yup.string().required('This fielld is required'),
          password: Yup.number().required('This field is required'),
          confirmPassword: Yup.string().when('password', {
            is: (val: any) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf([Yup.ref('password')], 'Both password need to be the same'),
          }),
        })}
        onSubmit={async (values: any, {resetForm}) => {
          LoderActions(true)
          console.log(values, 'values')

          try {
            if (values.id) {
              //   console.log(values, 'valuesput')

              // Edit Api Response
              let response = await Userservice.editUser(values)
              console.log(response, 'res======')
              toast.success(` Data Updated Successfully`)
              toast.dismiss('1s')
              fetchAllUser()
              resetForm({})
              cancel()
            } else {
              //   console.log(values, 'valuespost')

              // Create Api Response
              let response = await Userservice.postUser(values)
              console.log(response, 'res=----------====')
              toast.success(` Data Added Successfully`)
              toast.dismiss('1s')
              fetchAllUser()
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
            <div className='from4'>
              <button onClick={() => navigation(-1)}>Back</button>
            </div>
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
                {/* begin: input firstname Filed */}
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>First Name:</label>
                    <input
                      placeholder='First name'
                      className='form-control form-control-lg form-control-solid'
                      value={props.values.firstname}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      type='text'
                      name='firstname'
                      autoComplete='off'
                    />
                    <div className='erro2' style={{color: 'red'}}>
                      <ErrorMessage name='firstname' />
                    </div>
                  </div>

                  {/* begin: input lastname Filed */}
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>Last Name:</label>
                    <input
                      placeholder='Last name'
                      className='form-control form-control-lg form-control-solid'
                      value={props.values.lastname}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      type='text'
                      name='lastname'
                      autoComplete='off'
                    />
                    <div className='erro2' style={{color: 'red'}}>
                      <ErrorMessage name='lastname' />
                    </div>
                  </div>
                </div>

                {/* begin: input username Filed */}
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>Username :</label>
                    <input
                      placeholder='username'
                      className='form-control form-control-lg form-control-solid'
                      value={props.values.username}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      type='text'
                      name='username'
                      autoComplete='off'
                    />
                    <div className='erro2' style={{color: 'red'}}>
                      <ErrorMessage name='username' />
                    </div>
                  </div>

                  {/* begin: input email Filed */}
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>Email :</label>
                    <input
                      placeholder='email'
                      className='form-control form-control-lg form-control-solid'
                      value={props.values.email}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      type='text'
                      name='email'
                      autoComplete='off'
                    />
                    <div className='erro2' style={{color: 'red'}}>
                      <ErrorMessage name='email' />
                    </div>
                  </div>
                </div>

                {/* begin: input phone Filed */}
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-12'>
                    <label className='form-label fw-bold'>Mobile no:</label>
                    <input
                      placeholder='Mobile no.'
                      className='form-control form-control-lg form-control-solid'
                      type='number'
                      value={props.values.phone}
                      onChange={(e) => {
                        if (+e.target.value > 9999999999) {
                          return
                        }
                        props.handleChange(e)
                      }}
                      onBlur={props.handleBlur}
                      name='phone'
                      autoComplete='off'
                    />
                    <div className='erro2' style={{color: 'red'}}>
                      <ErrorMessage name='phone' />
                    </div>
                  </div>

                  {/* begin: input Zone Filed */}
                  <div className='col-lg-12'>
                    <label className='form-label fw-bold'>Zone</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('zoneId')}
                    >
                      <option value='' disabled>
                        Select Zone Type
                      </option>
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
                    <ErrorMessage name='zoneId' />
                  </div>

                  {/* begin: input Role Filed */}
                  <div className='col-lg-12'>
                    <label className='form-label fw-bold'>Role</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('roleId')}
                    >
                      <option value='' disabled>
                        Select Role Type
                      </option>
                      {getDataAllTypeRole.map((TypeDataRole, index) => {
                        return (
                          <option key={index} value={TypeDataRole?.id}>
                            {TypeDataRole?.name}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <div className='erro2' style={{color: 'red'}}>
                    <ErrorMessage name='roleId' />
                  </div>
                </div>

                {/* begin: input Password Filed */}

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>Password:</label>
                    <input
                      placeholder='Password'
                      className='form-control form-control-lg form-control-solid'
                      type='Password'
                      value={props.values.password}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name='password'
                      autoComplete='off'
                    />
                    <div className='erro2' style={{color: 'red'}}>
                      <ErrorMessage name='password' />
                    </div>
                  </div>

                  {/* begin: input confirmPassword Filed */}
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>Confirm Password:</label>
                    <input
                      placeholder='Confirm Password'
                      className='form-control form-control-lg form-control-solid'
                      value={props.values.confirmPassword}
                      onChange={props.handleChange}
                      name='confirmPassword'
                      onBlur={props.handleBlur}
                      type='password'
                      autoComplete='off'
                    />
                    <div className='erro2' style={{color: 'red'}}>
                      <ErrorMessage name='confirmPassword' />
                    </div>
                  </div>
                </div>
              </div>

              <div className='modal-footer border-0'>
                {/* begin::close button */}
                <CustomTooltip title='Close form'>
                  <button
                    type='reset'
                    onClick={() => navigation(-1)}
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
            </Form>
          </>
        )}
      </Formik>

      {/* end::formik Add/Edit form */}
    </>
  )
}

export default UserFormModal
