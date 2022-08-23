import {ErrorMessage, Form, useFormik} from 'formik'
import {useEffect, useState} from 'react'
import * as Yup from 'yup'
import {CustomTooltip} from '../../../routing/customtooltip'
import showPwdImg from '../../../images/eye-fill.svg'
import hidePwdImg from '../../../images/eye-slash-fill.svg'
import {toast} from 'react-toastify'
import {useNavigate, useParams} from 'react-router-dom'
import Userservice from '../helperUser/ApiDatarequestUser'
import {GetAllData} from '../helperUser/ModelUserType'
import {useQuery} from 'react-query'
import {KTSVG} from '../../../../_metronic/helpers'

const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$')

let validationSchemaNewForm = Yup.object({
  newpassword: Yup.string()
    .required('This field is required')
    .matches(validPassword, 'Invalid Password'),

  password: Yup.string().when('newpassword', {
    is: (val: any) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf([Yup.ref('newpassword')], 'Both password need to be the same'),
  }),
})

export const UserEditePassword = () => {
  const [username, setUsername] = useState<any>('')
  let {id} = useParams()
  const DataGetAllUserName = async (id: any) => {
    LoderActions(true)
    try {
      let payload: any = await Userservice.GetUserTypeById(id)

      if (payload.success == true) {
        LoderActions(false)
        setUsername(payload.data.username)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }

  const [initialValues, setInitialValues] = useState<any>({
    newpassword: '',
    password: '',
    userName: '',
  })

  const {data: customer, error} = useQuery(
    `GetUserbyId-${id}`,
    async () => {
      let data = await Userservice.GetUserTypeById(id)
      if (data.length === 0) {
        return
      }
      return setInitialValues({
        newpassword: '',
        password: '',
        userName: data.data.username,
      })
    },
    {
      cacheTime: 0,
      onError: (err) => {},
    }
  )

  const navigation = useNavigate()

  const [isRevealPwd, setIsRevealPwd] = useState(false)
  const [isRevealCpwd, setIsRevealCpwd] = useState(false)

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchemaNewForm,
    onSubmit: async (values: any, {resetForm}) => {
      try {
        // Edit Api Response
        let response = await Userservice.editUserPassword(values)
        if (response.success === false) {
          toast.error(response.message)
        } else {
          toast.success(response.message)
        }
        navigation(`/master/users/form/${id}`)
        toast.dismiss('1s')

        resetForm({})
        cancel()
      } catch (error: any) {
        toast.error(error.data.message)
      } finally {
        // LoderActions(false)
      }
    },
  })

  return (
    <>
      <form
        id='kt_modal_add_user_form'
        // onKeyDown={onKeyDown}
        className='form'
        onSubmit={formik.handleSubmit}
      >
        <div className='modal-header d-flex justify-content-start'>
          {/* begin::Modal title */}
          <span
            className='svg-icon svg-icon-2x'
            onClick={() => navigation('/master/users/form/${id}')}
          >
            <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
          </span>
          <h2 className='fw-bolder'>Edit User Password</h2>
        </div>

        <div className='row w-100 mx-0 mb-4 gy-4 mt-2'>
          <div className='col'>
            <label className='form-label fw-bold required'>New password</label>
            <div className='d-flex justify-content-between align-items-center'>
              <input
                placeholder='New password '
                className='form-control form-control-lg form-control-solid'
                id='ex3'
                value={formik.values.newpassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={isRevealPwd ? 'text' : 'password'}
                name='newpassword'
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
              {formik.touched.newpassword && formik.errors.newpassword
                ? formik.errors.newpassword
                : null}
            </div>
          </div>
        </div>

        <div className='row w-100 mx-0 mb-4 gy-4'>
          <div className='col'>
            <label className='form-label fw-bold required'>Confirm password</label>
            <div className='d-flex justify-content-between align-items-center'>
              <input
                placeholder='Confirm password'
                className='form-control form-control-lg form-control-solid'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={isRevealCpwd ? 'text' : 'password'}
                name='password'
                autoComplete='off'
              />
              <img
                style={{position: 'absolute', right: '15px'}}
                title={isRevealPwd ? 'Hide password' : 'Show password'}
                src={isRevealCpwd ? hidePwdImg : showPwdImg}
                onClick={() => setIsRevealCpwd((prevState) => !prevState)}
              />
            </div>
            <div className='erro2' style={{color: 'red'}}>
              {formik.touched.password && formik.errors.password ? formik.errors.password : null}
            </div>
          </div>
        </div>

        <div className='modal-footer border-0 pb-0 pt-0'>
          <CustomTooltip title='Close form'>
            <button
              type='reset'
              className='btn btn-light'
              onClick={() => {
                navigation(`/master/users/form/${id}`)
              }}
            >
              Close
            </button>
          </CustomTooltip>

          <CustomTooltip title='Submit form'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </CustomTooltip>
        </div>
      </form>
    </>
  )
}
function cancel() {
  throw new Error('Function not implemented.')
}
function LoderActions(arg0: boolean) {
  throw new Error('Function not implemented.')
}
