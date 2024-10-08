import {Formik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FC, useEffect, useState} from 'react'
import {Form} from 'react-bootstrap'
import {toast} from 'react-toastify'
import {CustomTooltip} from '../../../routing/customtooltip'
import {useLoader} from '../../loader/LoaderContext'
import {ListPageData} from '../UserContext'
import Userservice from '../helperUser/ApiDatarequestUser'
import {useNavigate} from 'react-router-dom'
import showPwdImg from '../../../../app/images/eye-fill.svg'
import hidePwdImg from '../../../../app/images/eye-slash-fill.svg'
import {useAuth} from '../../auth'

type Props = {
  category: any
}

const passwordRegExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
const emailRegExp = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)

let validationSchemaNewForm = Yup.object({
  firstname: Yup.string().required('This field is required'),
  lastname: Yup.string().required('This field is required'),
  username: Yup.string().required('This field is required'),
  email: Yup.string()
    .email('Invalid email format')
    .matches(emailRegExp, 'Invalid email format')
    .required('This field is required'),
  phone: Yup.string()
    .min(10, 'Invalid Phone Number')
    .matches(/^[0-9]{0,10}$/, 'Invalid Phone Number')
    .required('This field is required'),
  zoneId: Yup.string().required('This field is required'),
  roleId: Yup.string().required('This field is required'),
  password: Yup.string()
    .label('Password')
    .required('This field is required')
    .min(8, 'Seems a bit short(Min 8 characters)...')
    .max(24, 'Please try a shorter password(Max 24 characters)...).')
    .matches(
      passwordRegExp,
      'Password should Have 1 Uppercase,1 Lowercase,1 digit,1 special character'
    ),
  confirmPassword: Yup.string()
    .required('This field is required')
    .when('password', {
      is: (val: any) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('password')], 'Both password need to be the same'),
    }),
})

let validationSchemaEditForm = Yup.object({
  firstname: Yup.string().required('This field is required'),
  lastname: Yup.string().required('This field is required'),
  username: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Only alphabets are allowed for this field ')
    .required('This field is required'),
  email: Yup.string().email('Invalid email format').required('This field is required'),
  phone: Yup.string()
    .min(10, 'Invalid Phone Number')
    .matches(/^[0-9]{0,10}$/, 'Invalid Phone Number')
    .required('This field is required'),
  zoneId: Yup.string().required('This fied is required'),
  roleId: Yup.string().required('This fielld is required'),
})

const UserFormModal: FC<Props> = ({category}) => {
  const {setItemIdForUpdate, itemIdForUpdate, getDataAllType, getDataAllTypeRole} = ListPageData()
  let {LoderActions} = useLoader()
  const navigation = useNavigate()

  const {auth} = useAuth()
  const [initialValues, setInitialValues] = useState<any>({
    id: '',
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    phone: '',
    zoneId: '',
    zoneName: '',
    roleId: '',
    password: '',
    confirmPassword: '',
  })
  const [isRevealPwd, setIsRevealPwd] = useState(false)
  const [isRevealConfPwd, setIsRevealConfPwd] = useState(false)

  useEffect(() => {
    if (itemIdForUpdate === 'add') {
      setInitialValues({
        ...category,
        id: category.data?.id,
        firstname: category.data?.firstname || '',
        lastname: category.data?.lastname || '',
        username: category.data?.username || '',
        email: category.data?.email || '',
        phone: category.data?.phone || '',
        zoneId: category.data?.zoneId || '',
        zoneName: category.data?.zoneName || '',
        roleId: category.data?.roleId || '',
        password: category.data?.password || '',
        confirmPassword: '',
        createdby: auth?.userId,
      })
    } else {
      setInitialValues({
        ...category,
        id: category.data?.id,
        firstname: category.data?.firstname || '',
        lastname: category.data?.lastname || '',
        username: category.data?.username || '',
        email: category.data?.email || '',
        phone: category.data?.phone || '',
        zoneId: category.data?.zoneId || '',
        zoneName: category.data?.zoneName || '',
        roleId: category.data?.roleId || '',
        modifyby: auth?.userId,
      })
    }
  }, [itemIdForUpdate])

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

  useEffect(() => {}, [category, itemIdForUpdate])

  return (
    <>
      {/* begin::formik Add/Edit form */}

      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={
          itemIdForUpdate === 'add' ? validationSchemaNewForm : validationSchemaEditForm
        }
        onSubmit={async (values: any, {resetForm}) => {
          LoderActions(true)
          values.zoneId = +values.zoneId
          values.phone = values.phone.toString()

          try {
            if (values.id) {
              // Edit Api Response
              let response = await Userservice.editUser(values)

              if (response.success === false) {
                toast.error(response.message)
              } else {
                // toast.success(`Data Updated Successfully`)
                toast.success(response.message)
              }
              navigation('/master/users')
              // toast.success(` Data Updated Successfully`)
              toast.dismiss('1s')

              resetForm({})
              cancel()
            } else {
              let response = await Userservice.postUser(values)

              if (response.success === false) {
                toast.error(response.message)
              } else {
                // toast.success(` Data Added Successfully`)
                toast.success(response.message)
              }
              toast.dismiss('1s')
              navigation('/master/users')
              resetForm({})
              cancel()
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
            <div className='mt-4'></div>

            <Form
              id='kt_modal_add_user_form'
              onKeyDown={onKeyDown}
              className='form'
              onSubmit={props.handleSubmit}
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
                    <label className='form-label fw-bold required'>First Name:</label>
                    <input
                      placeholder='First name'
                      className='form-control form-control-lg form-control-solid'
                      value={props.values.firstname}
                      onChange={(e) => {
                        if (e.target.value.length <= 100) {
                          props.handleChange(e)
                        }
                      }}
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
                    <label className='form-label fw-bold required'>Last Name:</label>
                    <input
                      placeholder='Last name'
                      className='form-control form-control-lg form-control-solid'
                      value={props.values.lastname}
                      onChange={(e) => {
                        if (e.target.value.length <= 100) {
                          props.handleChange(e)
                        }
                      }}
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
                  {itemIdForUpdate === 'add' ? (
                    <div className='col-lg-6'>
                      <label className='form-label fw-bold required'>User Name :</label>
                      <input
                        placeholder='User Name'
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
                  ) : (
                    <div className='col-lg-6'>
                      <label className='form-label fw-bold required'>User Name :</label>
                      <input
                        placeholder='User Name'
                        className='form-control form-control-lg form-control-solid'
                        value={props.values.username}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        type='text'
                        name='username'
                        autoComplete='off'
                        disabled
                      />
                    </div>
                  )}

                  {/* begin: input email Filed */}
                  {itemIdForUpdate === 'add' ? (
                    <div className='col-lg-6'>
                      <label className='form-label fw-bold required'>Email :</label>
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
                  ) : (
                    <div className='col-lg-6'>
                      <label className='form-label fw-bold required'>Email :</label>
                      <input
                        placeholder='email'
                        className='form-control form-control-lg form-control-solid'
                        value={props.values.email}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        type='text'
                        name='email'
                        autoComplete='off'
                        // disabled
                      />
                    </div>
                  )}
                </div>

                {/* begin: input phone Filed */}
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-12'>
                    <label className='form-label fw-bold required'>Mobile no:</label>
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
                    <label className='form-label fw-bold required'>Zone</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('zoneId')}
                    >
                      <option value=''>Select Zone Type</option>
                      {getDataAllType.map((TypeData: any, index) => {
                        return (
                          <option key={index} value={TypeData.id}>
                            {TypeData?.name}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <div className='erro2' style={{color: 'red'}}>
                    <ErrorMessage name='zoneId' />
                  </div>

                  {/* Status Type */}
                  {itemIdForUpdate !== 'add' ? (
                    <div className='col-lg-12'>
                      <label className='form-label fw-bold required'>Status</label>
                      <select className='form-select form-select-solid'>
                        <option value=''>Select Status Type</option>
                        <option value='1'>Pending</option>
                        <option value='2'>Done</option>
                      </select>
                    </div>
                  ) : null}

                  {/* begin: input Role Filed */}
                  <div className='col-lg-12'>
                    <label className='form-label fw-bold required'>Role</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('roleId')}
                    >
                      <option value=''>Select Role Type</option>
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
                {itemIdForUpdate === 'add' ? (
                  <div className='row w-100 mx-0 mb-4 gy-4'>
                    <div className='col-lg-6'>
                      <label className='form-label fw-bold required'>Password:</label>
                      <div className='d-flex flex-stack mb-2 position-relative'>
                        <input
                          placeholder='Password'
                          className='form-control form-control-lg form-control-solid'
                          // type='Password'
                          type={isRevealPwd ? 'text' : 'password'}
                          value={props.values.password}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          name='password'
                          autoComplete='off'
                        />
                        <img
                          style={{position: 'absolute', right: '15px'}}
                          title={isRevealPwd ? 'Hide password' : 'Show password'}
                          src={isRevealPwd ? hidePwdImg : showPwdImg}
                          onClick={() => setIsRevealPwd((prevState) => !prevState)}
                        />
                      </div>

                      <div className='erro2' style={{color: 'red'}}>
                        <ErrorMessage name='password' />
                      </div>
                    </div>

                    {/* begin: input confirmPassword Filed */}
                    <div className='col-lg-6'>
                      <label className='form-label fw-bold required'>Confirm Password:</label>
                      <div className='d-flex flex-stack mb-2 position-relative'>
                        <input
                          placeholder='Confirm Password'
                          className='form-control form-control-lg form-control-solid'
                          value={props.values.confirmPassword}
                          onChange={props.handleChange}
                          name='confirmPassword'
                          onBlur={props.handleBlur}
                          type={isRevealConfPwd ? 'text' : 'password'}
                          autoComplete='off'
                        />
                        <img
                          style={{position: 'absolute', right: '15px'}}
                          title={isRevealConfPwd ? 'Hide password' : 'Show password'}
                          src={isRevealConfPwd ? hidePwdImg : showPwdImg}
                          onClick={() => setIsRevealConfPwd((prevState) => !prevState)}
                        />
                      </div>
                      <div className='erro2' style={{color: 'red'}}>
                        <ErrorMessage name='confirmPassword' />
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className='modal-footer border-0'>
                {/* begin::close button */}
                <CustomTooltip title='Close form'>
                  <button
                    type='reset'
                    onClick={() => navigation('/master/users')}
                    className='btn btn-light'
                  >
                    Close
                  </button>
                </CustomTooltip>
                {/* end::close button */}

                {/* begin::create/update Button */}
                <CustomTooltip title='Submit form'>
                  <button type='submit' className='btn btn-primary'>
                    {itemIdForUpdate !== 'add' ? 'Update' : 'Create'}
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
