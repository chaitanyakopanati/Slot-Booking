import {Formik, ErrorMessage, useFormik} from 'formik'
import * as Yup from 'yup'
import {FC, useEffect, useRef, useState} from 'react'
import {Form} from 'react-bootstrap'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import {CustomTooltip} from '../../../../../../app/routing/customtooltip'
import {useLoader} from '../../../../../../app/modules/loader/LoaderContext'
import {ListPageData} from '../FormsContext'
import Inquiriesservice from '../helperForms/ApiDataRequest'
import moment from 'moment'
import {useAuth} from '../../../../../../app/modules/auth'

type Props = {
  category: any
}

let validationSchemaNewForm = Yup.object({
  userid: Yup.string().required('This fied is required'),
  formno: Yup.string().required('This fied is required'),
  formdate: Yup.string().required('This fied is required'),
  formtype: Yup.string().required('This fied is required'),
  salesexecutiveid: Yup.string().required('This fied is required'),
  pacakgetype: Yup.string().required('This fied is required'),
  companyid: Yup.string().required('This fied is required'),
  packagecatid: Yup.string().required('This fied is required'),
  totalamount: Yup.string().required('This fied is required'),
  status: Yup.string().required('This fied is required'),
})

const FormsFormModal: FC<Props> = ({category}) => {
  const {
    setItemIdForUpdate,
    getPackages,
    itemIdForUpdate,
    setSuggestionUserText,
    getDataAllTypeCompany,
    getPackagesCategory,
    getUserNameData,
    getUserByRole,
    getBank,
    getReciever,
  } = ListPageData()
  const suggestionRef: any = useRef()

  let {LoderActions} = useLoader()
  const navigation = useNavigate()
  const [initialValues, setInitialValues] = useState<any>({
    id: '',
    userid: '',
    formno: '',
    formdate: '',
    formtype: '',
    salesexecutiveid: '',
    pacakgetype: '',
    companyid: '',
    packagecatid: '',
    packagevalidity: '',
    packagecost: 0,
    packageid: '',
    installationcost: 0,
    othercost: 0,
    discount: 0,
    gstamount: 0,
    totalamount: 0,
    cashamount: 0,
    chequeamount: 0,
    remaningamount: 0,
    bankid: '',
    chequeno: '',
    chequedate: '',
    receiverid: '',
    activationdate: '',
    expirydate: '',
    iptype: '',
    note: '',
    thirdparty: '',
    remark: '',
    status: '',
    userName: '',
  })

  useEffect(() => {
    if (itemIdForUpdate === 'add' && category?.data?.userName && category?.data?.userid) {
      setInitialValues({
        ...category,
        id: category.data?.id,
        userid: category.data?.userid || '',
        userName: category?.data?.userName || '',

        formno: category.data?.formno || '',
        formdate: moment(category.data?.formdate).format('YYYY-MM-DD'),
        formtype: category.data?.formtype || '',
        salesexecutiveid: category.data?.salesexecutiveid || '',
        pacakgetype: category.data?.pacakgetype || '',
        companyid: category.data?.companyid || '',
        packagecatid: category.data?.packagecatid || '',
        packagevalidity: category.data?.packagevalidity || '',
        packagecost: category.data?.packagecost || 0,
        packageid: category.data?.packageid || '',
        installationcost: category.data?.installationcost || 0,
        othercost: category.data?.othercost || 0,
        discount: category.data?.discount || 0,
        gstamount: category.data?.gstamount || 0,
        totalamount: category.data?.totalamount || 0,
        cashamount: category.data?.cashamount || 0,
        chequeamount: category.data?.chequeamount || 0,
        remaningamount: category.data?.remaningamount || 0,
        bankid: category.data?.bankid || '',
        chequeno: category.data?.chequeno || '',
        chequedate: moment(category.data?.chequedate).format('YYYY-MM-DD'),
        receiverid: category.data?.receiverid || '',
        activationdate: moment(category.data?.activationdate).format('YYYY-MM-DD'),
        expirydate: moment(category.data?.expirydate).format('YYYY-MM-DD'),
        iptype: category.data?.iptype || '',
        note: category.data?.note || '',
        thirdparty: category.data?.thirdparty || '',
        remark: category.data?.remark || '',
        status: category.data?.status || '',
        createdbyId: auth?.userId,
      })
    }
    if (itemIdForUpdate === 'add') {
      setInitialValues({
        ...category,
        id: category.data?.id,
        userid: category.data?.userid || '',
        formno: category.data?.formno || '',
        formdate: moment(category.data?.formdate).format('YYYY-MM-DD'),
        formtype: category.data?.formtype || '',
        salesexecutiveid: category.data?.salesexecutiveid || '',
        pacakgetype: category.data?.pacakgetype || '',
        companyid: category.data?.companyid || '',
        packagecatid: category.data?.packagecatid || '',
        packagevalidity: category.data?.packagevalidity || '',
        packagecost: category.data?.packagecost || 0,
        packageid: category.data?.packageid || '',
        installationcost: category.data?.installationcost || 0,
        othercost: category.data?.othercost || 0,
        discount: category.data?.discount || 0,
        gstamount: category.data?.gstamount || 0,
        totalamount: category.data?.totalamount || 0,
        cashamount: category.data?.cashamount || 0,
        chequeamount: category.data?.chequeamount || 0,
        remaningamount: category.data?.remaningamount || 0,
        bankid: category.data?.bankid || '',
        chequeno: category.data?.chequeno || '',
        chequedate: moment(category.data?.chequedate).format('YYYY-MM-DD'),
        receiverid: category.data?.receiverid || '',
        activationdate: moment(category.data?.activationdate).format('YYYY-MM-DD'),
        expirydate: moment(category.data?.expirydate).format('YYYY-MM-DD'),
        iptype: category.data?.iptype || '',
        note: category.data?.note || '',
        thirdparty: category.data?.thirdparty || '',
        remark: category.data?.remark || '',
        status: category.data?.status || '',
        createdbyId: auth?.userId,
        userName: category?.data?.userName || '',
      })
    } else {
      setInitialValues({
        ...category,
        id: category?.data?.id,
        userid: category?.data?.userid || '',
        userName: category?.data?.userName || '',
        formno: category?.data?.formno || '',
        formdate: moment(category?.data?.formdate).format('YYYY-MM-DD'),
        formtype: category?.data?.formtype || '',
        pacakgetype: category?.data?.pacakgetype || '',
        salesexecutiveid: category?.data?.salesexecutiveid || '',
        companyid: category?.data?.companyid || '',
        packagecatid: category?.data?.packagecatid || '',
        packagevalidity: category?.data?.packagevalidity || '',
        packagecost: category?.data?.packagecost || 0,
        packageName: category?.data?.packageName || '',
        packageid: category?.data?.packageid || '',
        installationcost: category?.data?.installationcost || 0,
        othercost: category?.data?.othercost || 0,
        discount: category?.data?.discount || 0,
        gstamount: category?.data?.gstamount || 0,
        totalamount: category?.data?.totalamount || 0,
        cashamount: category?.data?.cashamount || 0,
        chequeamount: category?.data?.chequeamount || 0,
        remaningamount: category?.data?.remaningamount || 0,
        bankid: category?.data?.bankid || '',
        chequeno: category?.data?.chequeno || '',
        chequedate: moment(category?.data?.chequedate).format('YYYY-MM-DD'),
        receiverid: category?.data?.receiverid || '',
        activationdate: moment(category?.data?.activationdate).format('YYYY-MM-DD'),
        expirydate: moment(category?.data?.expirydate).format('YYYY-MM-DD'),
        iptype: category?.data?.iptype || '',
        note: category?.data?.note || '',
        thirdparty: category?.data?.thirdparty || '',
        remark: category?.data?.remark || '',
        status: category?.data?.status || '',
        modifyby: auth?.userId,
      })
    }
  }, [itemIdForUpdate, category])

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

  const {auth} = useAuth()
  console.log(auth?.userId, 'auth')

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchemaNewForm,
    onSubmit: async (values: any, {resetForm}) => {
      console.log('Values::', values)
      LoderActions(true)

      try {
        if (values.id) {
          // Edit Api Response
          let response = await Inquiriesservice.editForms(values)
          console.log('Edit User*****************', response)

          if (response.success === false) {
            toast.error(response.message)
          } else {
            toast.success(response.message)
            // toast.success(`Data Updated Successfully`)
          }
          navigation('/forms')
          toast.dismiss('1s')
        } else {
          let response = await Inquiriesservice.postForms(values)
          console.log('Add User*****************', response)

          if (response.success === false) {
            toast.error(response.message)
          } else {
            toast.success(response.message)
            // toast.success(` Data Added Successfully`)
          }
          toast.dismiss('1s')
          navigation('/forms')
        }
      } catch (error: any) {
        console.log(error, 'error')
        toast.error(error.data.message)
      }
    },
  })

  useEffect(() => {
    let {packagecost, installationcost, othercost, gstamount, totalamount, discount} = formik.values

    if (
      packagecost >= 0 ||
      installationcost >= 0 ||
      othercost >= 0 ||
      gstamount >= 0 ||
      discount >= 0
    ) {
      let total_amount = Number(totalamount)
      total_amount =
        Number(packagecost) +
        Number(installationcost) +
        Number(othercost) +
        Number(gstamount) -
        Number(discount)
      formik.setFieldValue('totalamount', total_amount)
      formik.setFieldValue('remaningamount', total_amount)
    }
  }, [
    formik.values.packagecost,
    formik.values.installationcost,
    formik.values.othercost,
    formik.values.gstamount,
    formik.values.discount,
  ])

  useEffect(() => {
    let {cashamount, chequeamount, remaningamount, totalamount} = formik.values
    if (cashamount >= 0 || chequeamount >= 0) {
      let remaining_amount = Number(remaningamount)
      remaining_amount = Number(totalamount) - Number(cashamount) - Number(chequeamount)
      formik.setFieldValue('remaningamount', remaining_amount)
    }
  }, [formik.values.cashamount, formik.values.chequeamount])

  useEffect(() => {
    if (formik.values.packagevalidity >= 1) {
      formik.setFieldValue(
        'expirydate',
        moment(new Date())
          .add(formik.values.packagevalidity, 'months')
          .subtract(1, 'days')
          .format('YYYY-MM-DD')
      )
    }
  }, [formik.values.packagevalidity])

  return (
    <>
      <Form
        id='kt_modal_add_user_form'
        onKeyDown={onKeyDown}
        className='form'
        onSubmit={formik.handleSubmit}
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
          <div className='modal-body'>
            <div className='container-fluid p-0'>
              <div className='row w-100 mx-0 mb-4 gy-4'>
                <div className='col-md-12'>
                  <div className='row mb-6'>
                    <div className='col-md-3'>
                      <label className='form-label fw-bold required'>User Name</label>{' '}
                      <input
                        name='userName'
                        placeholder='Username'
                        className='form-control form-control-lg form-control-solid'
                        value={formik.values.userName || ''}
                        autoComplete='off'
                        onChange={(e) => {
                          setSuggestionUserText(e.target.value)
                          if (e.target.value) {
                            suggestionRef.current.style.display = 'block'
                          } else {
                            suggestionRef.current.style.display = 'none'
                          }
                          formik.handleChange(e)
                        }}
                        onBlur={(e) => {
                          // suggestionRef.current.
                          var container = suggestionRef.current
                          document.addEventListener('click', function (event) {
                            if (suggestionRef.current) {
                              suggestionRef.current.style.display = 'none'
                            }
                            document.removeEventListener('click', () => {})
                          })
                        }}
                      />
                      <div className='dropdown-menu suggestion-list' ref={suggestionRef}>
                        <ul>
                          {getUserNameData?.length > 0 &&
                            getUserNameData.map((user, index) => {
                              console.log('user', user)
                              return (
                                <li
                                  key={user.id}
                                  onClick={() => {
                                    formik.setFieldValue('userid', user.id)
                                    formik.setFieldValue('userName', user.firstname)
                                  }}
                                >
                                  {user.firstname}
                                </li>
                              )
                            })}
                        </ul>
                      </div>
                      <div className='erro2' style={{color: 'red'}}>
                        {formik.touched.userid && formik.errors.userid
                          ? formik.errors.userid
                          : null}
                      </div>
                    </div>

                    <div className='col-md-3'>
                      <label className='form-label fw-bold required'>Form no.</label>
                      <input
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        name='formno'
                        value={formik.values.formno}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Form No.'
                        autoComplete='off'
                      />
                      <div className='erro2' style={{color: 'red'}}>
                        {formik.touched.formno && formik.errors.formno
                          ? formik.errors.formno
                          : null}
                      </div>
                    </div>

                    <div className='col-md-3'>
                      <label className='form-label fw-bold required'>Form date</label>
                      <input
                        className='form-control form-control-lg form-control-solid'
                        type='date'
                        name='formdate'
                        value={formik.values.formdate}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Form date'
                        autoComplete='off'
                      />
                      <div className='erro2' style={{color: 'red'}}>
                        {formik.touched.formdate && formik.errors.formdate
                          ? formik.errors.formdate
                          : null}
                      </div>
                    </div>

                    <div className='col-md-3'>
                      <label className='form-label fw-bold required'>Form type</label>
                      <select
                        className='form-select form-select-solid'
                        {...formik.getFieldProps('formtype')}
                      >
                        <option value='' disabled>
                          select Form Type
                        </option>
                        <option value='1'>New</option>
                        <option value='2'>Renew </option>
                        <option value='3'>Upgrade </option>
                        <option value='4'>Shifting </option>
                        <option value='5'>Other </option>
                      </select>
                      <div className='erro2' style={{color: 'red'}}>
                        {formik.touched.formtype && formik.errors.formtype
                          ? formik.errors.formtype
                          : null}
                      </div>
                    </div>
                  </div>

                  <div className='row mb-6 gy-4'>
                    <div className='col-md-4 col-12'>
                      <label className='form-label fw-bold required'>Sales Executive</label>
                      <select
                        className='form-select form-select-solid'
                        {...formik.getFieldProps('salesexecutiveid')}
                      >
                        <option value=''>All</option>
                        {getUserByRole?.map((row, index) => {
                          return (
                            <option key={index} value={row?.id}>
                              {row.fullName}
                            </option>
                          )
                        })}
                      </select>
                      <div className='erro2' style={{color: 'red'}}>
                        {formik.touched.salesexecutiveid && formik.errors.salesexecutiveid
                          ? formik.errors.salesexecutiveid
                          : null}
                      </div>
                    </div>

                    <div className='col-md-4 col-12'>
                      <label className='form-label fw-bold required'>Company</label>
                      <select
                        className='form-select form-select-solid'
                        {...formik.getFieldProps('companyid')}
                      >
                        <option value='' disabled>
                          select Company
                        </option>
                        {getDataAllTypeCompany.map((TypeData: any, index) => {
                          return (
                            <option key={index} value={TypeData.id}>
                              {TypeData?.name}
                            </option>
                          )
                        })}
                      </select>
                      <div className='erro2' style={{color: 'red'}}>
                        {formik.touched.companyid && formik.errors.companyid
                          ? formik.errors.companyid
                          : null}
                      </div>
                    </div>

                    <div className='col-md-4 col-12'>
                      <label className='form-label fw-bold'>Package Category</label>
                      <select
                        className='form-select form-select-solid'
                        {...formik.getFieldProps('packagecatid')}
                      >
                        <option value='' disabled>
                          select Packages Category
                        </option>
                        {getPackagesCategory?.map((row, index) => {
                          return (
                            <option key={index} value={row?.id}>
                              {row.name}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <div className='col-md-4'>
                      <label className='form-label fw-bold'>Package type</label>
                      <select
                        className='form-select form-select-solid'
                        {...formik.getFieldProps('pacakgetype')}
                      >
                        <option>Package Type</option>
                        <option value='1'>Unlimited</option>
                        <option value='2'>Limited</option>
                      </select>
                    </div>

                    <div className='col-md-4'>
                      <label className='form-label fw-bold'>Package Name</label>
                      <select
                        className='form-select form-select-solid'
                        {...formik.getFieldProps('packageid')}
                      >
                        <option value='' disabled>
                          select Packages Category
                        </option>
                        {getPackages?.map((row, index) => {
                          return (
                            <option key={index} value={row?.id}>
                              {row.name}
                            </option>
                          )
                        })}
                      </select>
                    </div>

                    <div className='col-md-4'>
                      <label className='form-label fw-bold'>Package Validity</label>
                      <div className='input-group'>
                        {/* <div className='input-group-prepend'> */}
                        <span className='input-group-text border-0'>Month</span>
                        {/* </div> */}
                        <input
                          type='number'
                          name='packagevalidity'
                          value={formik.values.packagevalidity}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className='form-control form-control-solid'
                          placeholder='Package validity'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row w-100 mx-0 mb-4 gy-4'>
                <div className='col-md-3'>
                  <label className='form-label fw-bold'>Package Cost</label>
                  <div className='input-group'>
                    <span className='input-group-text border-0'>₹</span>
                    <input
                      type='number'
                      name='packagecost'
                      value={formik.values.packagecost}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className='form-control form-control-solid'
                      placeholder='Package Cost'
                    />
                  </div>
                </div>

                <div className='col-md-3'>
                  <label className='form-label fw-bold'>Installation cost</label>
                  <div className='input-group'>
                    <span className='input-group-text border-0'>₹</span>
                    <input
                      type='number'
                      name='installationcost'
                      value={formik.values.installationcost}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className='form-control form-control-solid'
                      placeholder='Installation cost'
                    />
                  </div>
                </div>

                <div className='col-md-3'>
                  <label className='form-label fw-bold'>Other Cost</label>
                  <div className='input-group'>
                    <span className='input-group-text border-0'>₹</span>
                    <input
                      type='number'
                      name='othercost'
                      value={formik.values.othercost}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder='Other Cost'
                      className='form-control form-control-solid'
                    />
                  </div>
                </div>

                <div className='col-md-3'>
                  <label className='form-label fw-bold'>Discount</label>
                  <div className='input-group'>
                    <span className='input-group-text border-0'>₹</span>
                    <input
                      type='number'
                      name='discount'
                      value={formik.values.discount}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder='Discount'
                      className='form-control form-control-solid'
                    />
                  </div>
                </div>
              </div>

              <div className='row w-100 mx-0 mb-4 gy-4'>
                <div className='col-md-3'>
                  <label className='form-label fw-bold'>GST Amount</label>
                  <div className='input-group'>
                    <span className='input-group-text border-0'>₹</span>
                    <input
                      type='number'
                      name='gstamount'
                      value={formik.values.gstamount}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder='GST Amount'
                      className='form-control form-control-solid'
                    />
                  </div>
                </div>

                <div className='col-md-3'>
                  <label className='form-label fw-bold required'>Total Amount</label>
                  <div className='input-group'>
                    <span className='input-group-text border-0'>₹</span>
                    <input
                      type='number'
                      name='totalamount'
                      value={formik.values.totalamount}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder='Total Amount'
                      className='form-control form-control-solid'
                    />
                  </div>
                  <div className='erro2' style={{color: 'red'}}>
                    {formik.touched.totalamount && formik.errors.totalamount
                      ? formik.errors.totalamount
                      : null}
                  </div>
                </div>

                <div className='col-md-3'>
                  <label className='form-label fw-bold'>Cash Amount</label>
                  <div className='input-group'>
                    <span className='input-group-text border-0'>₹</span>
                    <input
                      type='number'
                      name='cashamount'
                      value={formik.values.cashamount}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder='Cash Amount'
                      className='form-control form-control-solid'
                    />
                  </div>
                </div>

                <div className='col-md-3'>
                  <label className='form-label fw-bold'>Cheque Amount</label>
                  <div className='input-group'>
                    <span className='input-group-text border-0'>₹</span>
                    <input
                      type='number'
                      name='chequeamount'
                      value={formik.values.chequeamount}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder='Cheque Amount'
                      className='form-control form-control-solid'
                    />
                  </div>
                </div>
              </div>

              <div className='row w-100 mx-0 mb-4 gy-4'>
                <div className='col-md-3'>
                  <label className='form-label fw-bold'>Remaining Amount</label>
                  <div className='input-group'>
                    <span className='input-group-text border-0'>₹</span>
                    <input
                      type='number'
                      name='remaningamount'
                      value={formik.values.remaningamount}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder='Remaining Amount'
                      className='form-control form-control-solid'
                      disabled
                    />
                  </div>
                </div>

                <div className='col-md-3'>
                  <label className='form-label fw-bold'>Bank Name</label>
                  <select
                    className='form-select form-select-solid'
                    {...formik.getFieldProps('bankid')}
                  >
                    <option value='' disabled>
                      select Bank Name
                    </option>
                    {getBank?.map((row, index) => {
                      return (
                        <option key={index} value={row?.id}>
                          {row.name}
                        </option>
                      )
                    })}
                  </select>
                </div>

                <div className='col-md-3'>
                  <label className='form-label fw-bold'>Cheque no.</label>
                  <input
                    type='number'
                    name='chequeno'
                    value={formik.values.chequeno}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Cheque no'
                    className='form-control form-control-solid'
                  />
                </div>

                <div className='col-md-3'>
                  <label className='form-label fw-bold'>Cheque date</label>
                  <input
                    type='date'
                    name='chequedate'
                    value={formik.values.chequedate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Cheque date'
                    className='form-control form-control-solid'
                  />
                </div>
              </div>

              <div className='row w-100 mx-0 mb-4 gy-4'>
                <div className='col-md-3'>
                  <label className='form-label fw-bold'>Reciever</label>
                  <select
                    className='form-select form-select-solid'
                    {...formik.getFieldProps('receiverid')}
                  >
                    <option value='' disabled>
                      select Reciever Name
                    </option>
                    {getReciever?.map((row, index) => {
                      return (
                        <option key={index} value={row?.id}>
                          {row.fullName}
                        </option>
                      )
                    })}
                  </select>
                </div>

                <div className='col-md-3'>
                  <label className='form-label fw-bold'>Activation date</label>
                  <input
                    type='date'
                    name='activationdate'
                    value={formik.values.activationdate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Activation date'
                    className='form-control form-control-solid'
                  />
                </div>

                <div className='col-md-3'>
                  <label className='form-label fw-bold'>Expiry date</label>
                  <input
                    type='date'
                    name='expirydate'
                    value={formik.values.expirydate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Expiry date'
                    className='form-control form-control-solid'
                  />
                </div>

                <div className='col-md-3'>
                  <label className='form-label fw-bold'>IP Type</label>
                  <select
                    className='form-select form-select-solid'
                    {...formik.getFieldProps('iptype')}
                    autoComplete='off'
                  >
                    <option value='' disabled>
                      Select IP Type
                    </option>
                    <option value='1'>Dynmaic</option>
                    <option value='2'>Static</option>
                  </select>
                </div>
              </div>

              <div className='row w-100 mx-0 mb-4 gy-4'>
                <div className='col-md-3'>
                  <label className='form-label fw-bold'>Note</label>
                  <input
                    type='text'
                    name='note'
                    value={formik.values.note}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Note'
                    autoComplete='off'
                    className='form-control form-control-solid'
                  />
                </div>

                <div className='col-md-3'>
                  <label className='form-label fw-bold'>Third party</label>
                  <input
                    type='text'
                    placeholder='Third party'
                    name='thirdparty'
                    value={formik.values.thirdparty}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='form-control form-control-solid'
                    autoComplete='off'
                  />
                </div>

                <div className='col-md-4'>
                  <label className='form-label fw-bold'>Remark</label>
                  <input
                    type='text'
                    placeholder='Remark'
                    name='remark'
                    value={formik.values.remark}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='form-control form-control-solid'
                    autoComplete='off'
                  />
                </div>

                <div className='col-md-2'>
                  <label className='form-label fw-bold required'>Form submit</label>
                  <select
                    className='form-select form-select-solid'
                    {...formik.getFieldProps('status')}
                    autoComplete='off'
                  >
                    <option value='' disabled>
                      Select Form Submit
                    </option>
                    <option value='1'>Done</option>
                    <option value='2'>Pending</option>
                    <option value='3'>Cancel</option>
                  </select>
                  <div className='erro2' style={{color: 'red'}}>
                        {formik.touched.status && formik.errors.status
                          ? formik.errors.status
                          : null}
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='modal-footer border-0 pb-0 pt-0'>
          {/* begin::close button */}
          <CustomTooltip title='Close form'>
            <button type='reset' onClick={() => navigation(-1)} className='btn btn-light'>
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
  )
}

export default FormsFormModal
