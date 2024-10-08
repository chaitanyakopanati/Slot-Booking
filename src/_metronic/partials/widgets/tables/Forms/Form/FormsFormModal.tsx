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
import moment, {min} from 'moment'
import {useAuth} from '../../../../../../app/modules/auth'
import ImageSelect from '../../../../../../app/images/error-profile.svg'

type Props = {
  category: any
}
const API_URL_DATA = process.env.REACT_APP_IMG_PATH

const idProofPath: string = `${API_URL_DATA}MediaUpload/Form/`


let validationSchemaNewForm = Yup.object({
  userName: Yup.string().required('This field is required'),
  userid: Yup.number().required('Entered User Name Does Not Exist'),
  formno: Yup.string().required('This field is required'),
  formdate: Yup.string().required('This field is required'),
  formtype: Yup.string().required('This field is required'),
  salesexecutiveid: Yup.string().required('This field is required'),
  companyid: Yup.string().required('This field is required'),
  totalamount: Yup.number()
    .min(0, 'This value should be between 0 and 999999')
    .max(999999, 'This value should be between 0 and 999999')
    .required('This field is required'),
  status: Yup.string().required('This field is required'),
  receiverid: Yup.string().required('This field is required'),
  packagecost: Yup.number()
    .min(0, 'This value should be between 0 and 999999')
    .max(999999, 'This value should be between 0 and 999999'),
  installationcost: Yup.number()
    .min(0, 'This value should be between 0 and 999999')
    .max(999999, 'This value should be between 0 and 999999'),
  othercost: Yup.number()
    .min(0, 'This value should be between 0 and 999999')
    .max(999999, 'This value should be between 0 and 999999'),
  discount: Yup.number()
    .min(0, 'This value should be between 0 and 999999')
    .max(999999, 'This value should be between 0 and 999999'),
  gstamount: Yup.number()
    .min(0, 'This value should be between 0 and 999999')
    .max(999999, 'This value should be between 0 and 999999'),
  cashamount: Yup.number()
    .min(0, 'This value should be between 0 and 999999')
    .max(999999, 'This value should be between 0 and 999999'),
  chequeamount: Yup.number()
    .min(0, 'This value should be between 0 and 999999')
    .max(999999, 'This value should be between 0 and 999999'),
  packagevalidity: Yup.number()
    .min(0, 'This value should be between 0 and 64')
    .max(64, 'This value should be between 0 and 64'),
  newAddress: Yup.string().when('formtype', {
    is: (formtype: any) => formtype == 4,
    then: Yup.string().required('This field is required'),
  }),
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
    DataGetAllsalesExcutive,
    getSalesExcutiveData,
    setGetSalesExcutiveData,
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
    packagevalidity: 0,
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
    newAddress: '',
    formDocument:''
  })
const [remarkData,setRemarkData]=useState({})
  useEffect(() => {
    DataGetAllsalesExcutive()
  }, [])
  const [idProofImage, setIdProofImage] = useState<any>(null)
 


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
        packagevalidity: category.data?.packagevalidity || 0,
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
        newAddress: category?.data?.newAddress || '',
        createdbyId: auth?.userId,
        formDocument: category?.data?.formDocument ? category?.data?.formDocument : '',
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
        packagevalidity: category.data?.packagevalidity || 0,
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
        newAddress: category?.data?.newAddress || '',
        createdbyId: auth?.userId,
        userName: category?.data?.userName || '',
        formDocument: category?.data?.formDocument ? category?.data?.formDocument : '',
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
        packagevalidity: category?.data?.packagevalidity || 0,
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
        newAddress: category?.data?.newAddress || '',
        status: category?.data?.status || '',
        modifyby: auth?.userId,
        formDocument: category?.data?.formDocument ? category?.data?.formDocument : '',
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

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchemaNewForm,
    onSubmit: async (values: any, {resetForm}) => {
      values.packagecatid = +values.packagecatid
      values.packageid = +values.packageid
      values.packagevalidity = +values.packagevalidity
      values.bankid = +values.bankid
      values.receiverid = +values.receiverid
    console.log("values1111",values);

      LoderActions(true)
    

      try {
        if (values.id) {
          // Edit Api Response
          let formData: any = new FormData()
          delete formData.ModifyBy
          Object.entries(values).forEach(([key, value]) => {
            if (value) formData.append(key, value as string)
          })
          !values.IsMasterUser && formData.append('IsMasterUser', values.IsMasterUser)
          delete formData.ModifyBy
          console.log(`formData`,formData )
          let response: any = await Inquiriesservice.editForms(formData)
          if (response.success === false) {
            toast.error(response.message)
          } else {
            toast.success(response.message)
          }
          navigation('/forms')
          toast.dismiss('1s')
        } else {
          let formData: any = new FormData()
          delete formData.CreatedBy
          Object.entries(values).forEach(([key, value]) => {
            if (value) formData.append(key, value as string)
          })
          !values.IsMasterUser && formData.append('IsMasterUser', values.IsMasterUser)
          delete formData.CreatedBy
          console.log(`formData`,formData )

          let response: any = await Inquiriesservice.postForms(formData)
          if (response.success === false) {
            toast.error(response.message)
          } else {
            toast.success(response.message)
          }
          toast.dismiss('1s')
          navigation('/forms')
        }
      } catch (error: any) {
        toast.error(error.data.message)
      }
      let remark:any=''
      // if (values.formtype == '4' && !values.id) {
      if (values.formtype == '4' ) {
      try {
          let res = await Inquiriesservice.ValidateUserById(values.userid)
          if (res.success === false) {

            // toast.error(res.message)
            try {
              let response = await Inquiriesservice.postInstallations(values)
    
              if (response.success === false) {
                toast.error(response.message)
                } else {
                toast.success(response.message)
              }
              toast.dismiss('1s')
            } catch (error: any) {
              toast.error(error.data.message)
            }
            } else {
            // toast.success(response.message)
             try {
              let response = await Inquiriesservice.GetInstallationsTypeById(res.installationId)
    
              if (response.success === false) {
                toast.error(response.message)
              } else {
                toast.success(response.message)
                if( response.data.userName ){
                  remark +=`userName = ${response.data.userName},`
                }          
                if( response.data.installerName ){                 
                  remark +=`installerName = ${response.data.installerName},`
                }  
                 if( response.data.connectiontypeName ){
                  remark +=`connectiontypeName = ${response.data.connectiontypeName},`
                }  
                if( response.data.cabletypeName ){
                 remark +=`cabletypeName = ${response.data.cabletypeName},`
                }
                if( response.data.accesspointip ){
                  remark +=`accesspointip = ${response.data.accesspointip},`
                } 
                if( response.data.cablelength ){
                  remark +=`cablelength = ${response.data.cablelength},`
                } 
                if(response.data.iptypeName){
                  remark +=`iptypeName = ${response.data.iptypeName},`
                }   
              
                setRemarkData(response.data)              }
              toast.dismiss('1s')
            } catch (error: any) {
              toast.error(error.data.message)
            }
            try {
              let response = await Inquiriesservice.postInstallations(values,remark,res.installationId)
    
              if (response.success === false) {
                toast.error(response.message)
                } else {
                toast.success(response.message)
              }
              toast.dismiss('1s')
            } catch (error: any) {
              toast.error(error.data.message)
            }

          }
          toast.dismiss('1s')
        } catch (error: any) {
          toast.error(error.data.message)
        }
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
    if (formik.values.packagevalidity == 0) {
      formik.setFieldValue(
        'expirydate',
        // moment(new Date())
        moment(formik.values.activationdate)
          .add(formik.values.packagevalidity, 'months')
          // .subtract(1, 'days')
          .format('YYYY-MM-DD')
      )
    } else if (formik.values.packagevalidity >= 1) {
      formik.setFieldValue(
        'expirydate',
        // moment(new Date())
        moment(formik.values.activationdate)
          .add(formik.values.packagevalidity, 'months')
          .subtract(1, 'days')
          .format('YYYY-MM-DD')
      )
    }
  }, [formik.values.packagevalidity, formik.values.activationdate])

  let fetchFilePath = async (file: any) => {
    const objectUrl = URL.createObjectURL(file[0])
    return objectUrl
  }

const idProofImageUrl =async (filePath:any)=>{
  console.log("filePath",filePath[0].name.split('.')[1]);
  


if(filePath[0].name.split('.')[1]=='pdf'){
  setIdProofImage('/media/icons/duotune/coding/pdfimg.png')
  console.log("111");
  
 }else if(filePath[0].name.split('.')[1]=='xl' || filePath[0].name.split('.')[1]=='xlsx' ||filePath[0].name.split('.')[1]=='xls'){
   setIdProofImage('/media/icons/duotune/coding/excelimage.png')
  }else if(filePath[0].name.split('.')[1]=='doc'){
   setIdProofImage('/media/icons/duotune/coding/docimage.png')
  }else {
    let url = await fetchFilePath(filePath)
    setIdProofImage(url)
  }

}
  
useEffect(()=>{
  // setIdProofImage(category?.data?.formDocument)
  console.log(`category?.data?.formDocument`,category?.data?.formDocument );
},[])

const idProofImagePath =()=>{
  if(category?.data?.formDocument?.split('.')[1] == 'pdf'){
    return '/media/icons/duotune/coding/pdfimg.png'
  } else if(category?.data?.formDocument?.split('.')[1] == 'xl' || category?.data?.formDocument?.split('.')[1] == 'xlsx'  || category?.data?.formDocument?.split('.')[1] == 'xls'){
    return '/media/icons/duotune/coding/excelimage.png'
  }else  if(category?.data?.formDocument?.split('.')[1] == 'doc'){
    return '/media/icons/duotune/coding/docimage.png'
  }
  else {
    return `${idProofPath}${category?.data?.formDocument}`
  }
}
useEffect(()=>{
  idProofImagePath()
},[])
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
                  <div className='d-flex mb-4'>
                <div className='col-lg-4 text-center'>
                <div className='pb-5'>
                  <h5 className='m-0'>Form Document</h5>
                </div>
                <div
                  className='image-input image-input-empty'
                  style={{
                    backgroundImage: `url(${
                      // idProofImage ? idProofImage : `${idProofPath}${category?.data?.formDocument}` || ImageSelect
                      idProofImage ? idProofImage :idProofImagePath() || ImageSelect
                    })`,
                  }}
                >
                  <div className='image-input-wrapper w-125px h-125px'></div>

                  <label
                    className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
                    data-kt-image-input-action='change'
                    data-bs-toggle='tooltip'
                    data-bs-dismiss='click'
                    title='Change avatar'
                  >
                    <i className='bi bi-pencil-fill fs-7'></i>
                    <input
                      type='file'
                      name='formDocument'
                      accept='.png, .jpg, .jpeg ,.pdf,.xl,.xls,.xlsx,.doc'
                      onChange={async (e) => {
                        if (!e.target.files) {
                          return
                        }
                        idProofImageUrl(e.target.files)
                        // let url = await fetchFilePath(e.target.files)
                        // setIdProofImage(url)
                        formik.setFieldValue('formDocument', e.target.files[0])
                      }}
                      onBlur={formik.handleBlur}
                    />
                  </label>
                </div>
              </div>

               
              </div>
                  <div className='row mb-6'>
                    <div className='col-md-3'>
                      <label className='form-label fw-bold required'>User Name</label>{' '}
                      <input
                        name='userName'
                        placeholder='User Name'
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
                            getUserNameData.map((user) => {
                              return (
                                <li
                                  key={user.id}
                                  onClick={() => {
                                    formik.setFieldValue('userid', user.id)
                                    formik.setFieldValue('userName', user.username)
                                  }}
                                >
                                  {user.username}
                                </li>
                              )
                            })}
                        </ul>
                      </div>
                      <div className='erro2' style={{color: 'red'}}>
                        {formik.touched.userName && formik.errors.userName
                          ? formik.errors.userName
                          : null}
                      </div>
                      <div className='erro2' style={{color: 'red'}}>
                        {formik.touched.userName &&
                        !formik.errors.userName &&
                        formik.touched.userid &&
                        formik.errors.userid
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
                      <label className='form-label fw-bold required'>Form Date</label>
                      <input
                        className='form-control form-control-lg form-control-solid'
                        type='date'
                        name='formdate'
                        value={formik.values.formdate}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Form Date'
                        autoComplete='off'
                      />
                      <div className='erro2' style={{color: 'red'}}>
                        {formik.touched.formdate && formik.errors.formdate
                          ? formik.errors.formdate
                          : null}
                      </div>
                    </div>

                    <div className='col-md-3'>
                      <label className='form-label fw-bold required'>Form Type</label>
                      <select
                        className='form-select form-select-solid'
                        {...formik.getFieldProps('formtype')}
                      >
                        <option value=''>Select Form Type</option>
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
                        {getSalesExcutiveData?.map((row, index) => {
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
                        <option value=''>Select Company</option>
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
                        <option value=''>Select Packages Category</option>
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
                      <label className='form-label fw-bold'>Package Type</label>
                      <select
                        className='form-select form-select-solid'
                        {...formik.getFieldProps('pacakgetype')}
                      >
                        <option value=''>Select Package Type</option>
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
                        <option value=''>Select Packages Category</option>
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
                        <span className='input-group-text border-0'>Month</span>
                        <input
                          type='number'
                          name='packagevalidity'
                          value={formik.values.packagevalidity}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className='form-control form-control-solid'
                          placeholder='Package Validity'
                        />
                      </div>
                      <div className='erro2' style={{color: 'red'}}>
                        {formik.touched.packagevalidity && formik.errors.packagevalidity
                          ? formik.errors.packagevalidity
                          : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {formik.values?.formtype == 4 ? (
                <div className='col-lg-12 mb-5'>
                  <label className='form-label fw-bold required'>New Address</label>
                  <input
                    className='form-control form-control-lg form-control-solid'
                    name='newAddress'
                    value={formik.values?.newAddress}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    data-kt-autosize='true'
                    placeholder='New Address'
                    autoComplete='off'
                  ></input>
                  <div className='erro2' style={{color: 'red'}}>
                    {formik.touched.newAddress && formik.errors.newAddress
                      ? formik.errors.newAddress
                      : null}
                  </div>
                </div>
              ) : (
                ''
              )}

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
                  <div className='erro2' style={{color: 'red'}}>
                    {formik.touched.packagecost && formik.errors.packagecost
                      ? formik.errors.packagecost
                      : null}
                  </div>
                </div>

                <div className='col-md-3'>
                  <label className='form-label fw-bold'>Installation Cost</label>
                  <div className='input-group'>
                    <span className='input-group-text border-0'>₹</span>
                    <input
                      type='number'
                      name='installationcost'
                      value={formik.values.installationcost}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className='form-control form-control-solid'
                      placeholder='Installation Cost'
                    />
                  </div>
                  <div className='erro2' style={{color: 'red'}}>
                    {formik.touched.installationcost && formik.errors.installationcost
                      ? formik.errors.installationcost
                      : null}
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
                  <div className='erro2' style={{color: 'red'}}>
                    {formik.touched.othercost && formik.errors.othercost
                      ? formik.errors.othercost
                      : null}
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
                  <div className='erro2' style={{color: 'red'}}>
                    {formik.touched.discount && formik.errors.discount
                      ? formik.errors.discount
                      : null}
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
                  <div className='erro2' style={{color: 'red'}}>
                    {formik.touched.gstamount && formik.errors.gstamount
                      ? formik.errors.gstamount
                      : null}
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
                  <div className='erro2' style={{color: 'red'}}>
                    {formik.touched.cashamount && formik.errors.cashamount
                      ? formik.errors.cashamount
                      : null}
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
                  <div className='erro2' style={{color: 'red'}}>
                    {formik.touched.chequeamount && formik.errors.chequeamount
                      ? formik.errors.chequeamount
                      : null}
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
                    />
                  </div>
                  <div className='erro2' style={{color: 'red'}}>
                    {formik.touched.remaningamount && formik.errors.remaningamount
                      ? formik.errors.remaningamount
                      : null}
                  </div>
                </div>

                <div className='col-md-3'>
                  <label className='form-label fw-bold'>Bank Name</label>
                  <select
                    className='form-select form-select-solid'
                    {...formik.getFieldProps('bankid')}
                  >
                    <option value=''>Select Bank Name</option>
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
                    onChange={(e: any) => {
                      if (e.target.value.length <= 14) {
                        formik.handleChange(e)
                      }
                    }}
                    onBlur={formik.handleBlur}
                    placeholder='Cheque no'
                    className='form-control form-control-solid'
                  />
                </div>

                <div className='col-md-3'>
                  <label className='form-label fw-bold'>Cheque Date</label>
                  <input
                    type='date'
                    name='chequedate'
                    value={formik.values.chequedate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Cheque Date'
                    className='form-control form-control-solid'
                  />
                </div>
              </div>

              <div className='row w-100 mx-0 mb-4 gy-4'>
                <div className='col-md-3'>
                  <label className='form-label fw-bold required'>Receiver</label>
                  <select
                    className='form-select form-select-solid'
                    {...formik.getFieldProps('receiverid')}
                  >
                    <option value=''>Select Receiver Name</option>
                    {getReciever?.map((row, index) => {
                      return (
                        <option key={index} value={row?.id}>
                          {row.fullName}
                        </option>
                      )
                    })}
                  </select>
                  <div className='erro2' style={{color: 'red'}}>
                    {formik.touched.receiverid && formik.errors.receiverid
                      ? formik.errors.receiverid
                      : null}
                  </div>
                </div>

                <div className='col-md-3'>
                  <label className='form-label fw-bold'>Activation Date</label>
                  <input
                    type='date'
                    name='activationdate'
                    value={formik.values.activationdate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Activation Date'
                    className='form-control form-control-solid'
                  />
                </div>

                <div className='col-md-3'>
                  <label className='form-label fw-bold'>Expiry Date</label>
                  <input
                    type='date'
                    name='expirydate'
                    value={formik.values.expirydate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Expiry Date'
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
                    <option value=''>Select IP Type</option>
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
                  <label className='form-label fw-bold'>Third Party</label>
                  <input
                    type='text'
                    placeholder='Third Party'
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
                  <label className='form-label fw-bold required'>Form Submit</label>
                  <select
                    className='form-select form-select-solid'
                    {...formik.getFieldProps('status')}
                    autoComplete='off'
                  >
                    <option value=''>Select Status</option>
                    <option value='1'>Done</option>
                    <option value='2'>Pending</option>
                    <option value='3'>Cancel</option>
                  </select>
                  <div className='erro2' style={{color: 'red'}}>
                    {formik.touched.status && formik.errors.status ? formik.errors.status : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='modal-footer border-0 pb-0 pt-0'>
          {/* begin::close button */}
          <CustomTooltip title='Close form'>
            <button type='reset' onClick={() => navigation('/forms')} className='btn btn-light'>
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
