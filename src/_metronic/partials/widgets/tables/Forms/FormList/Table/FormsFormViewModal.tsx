import {FC, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useLoader} from '../../../../../../../app/modules/loader/LoaderContext'
import moment from 'moment'
import {KTSVG} from '../../../../../../helpers'
import {ListPageData} from '../../FormsContext'
import {useAuth} from '../../../../../../../app/modules/auth'
import {saveAs} from 'file-saver'

type Props = {
  category: any
}
const API_URL_DATA = process.env.REACT_APP_IMG_PATH

const idProofPath: string = `${API_URL_DATA}MediaUpload/Form/`

const FormsFormViewModal: FC<Props> = ({category}) => {
  const {setItemIdForUpdate, setViewIdForUpdate} = ListPageData()
  let {LoderActions} = useLoader()
  const navigate = useNavigate()

  const [initialvalues, setInitialvalues] = useState<any>({
    ...category,
    id: category.data?.id,
    userName: category.data?.userName || '',
    name: category.data?.name || '',
    companyName: category.data?.companyName || '',
    gstNo: category.data?.gstNo || '',
    mobileNo: category.data?.mobileNo || '',
    address: category.data?.address || '',
    zoneName: category.data?.zoneName || '',
    fileNo: category.data?.fileNo || '',
    formno: category.data?.formno || '',
    formtype: category.data?.formtypeName || '',
    salesexecutiveName: category.data?.salesexecutiveName || '',
    packagecatName: category.data?.packagecatName || '',
    pacakgetype: category.data?.pacakgetypeName || '',
    packagevalidity: category.data?.packagevalidity || '',
    packagecost: category.data?.packagecost || '',
    installationcost: category.data?.installationcost || '',
    othercost: category.data?.othercost || '',
    discount: category.data?.discount || '',
    gstamount: category.data?.gstamount || '',
    totalamount: category.data?.totalamount || '',
    cashamount: category.data?.cashamount || '',
    chequeamount: category.data?.chequeamount || '',
    remaningamount: category.data?.remaningamount || 0,
    bankName: category.data?.bankName || '',
    chequeno: category.data?.chequeno || '',
    receiverName: category.data?.receiverName || '',
    iptype: category.data?.iptypeName || '',
    note: category.data?.note || '',
    thirdparty: category.data?.thirdparty || '',
    remark: category.data?.remark || '',
    status: category.data?.statusName  || '',
    contactNo: category.data?.contactNo || '',
    email: category.data?.email || '',
    newAddress: category?.data?.newAddress || '',
    packageName: category.data?.packageName || '',
    activationdate: moment(category.data?.activationdate, 'YYYY-MM-DD').format('YYYY-MM-DD'),
    expirydate: moment(category.data?.expirydate, 'YYYY-MM-DD').format('YYYY-MM-DD'),
    chequedate: moment(category.data?.chequedate, 'YYYY-MM-DD').format('YYYY-MM-DD'),
    formdate: moment(category.data?.formdate, 'YYYY-MM-DD').format('YYYY-MM-DD'),
    createdByName: category.data.createdByName || '',
    modifybyName: category.data.modifybyName || '',
    createdAt: moment
      .utc(category.data?.createdAt, 'YYYY-MM-DD,h:mm a')
      .local()
      .format('YYYY-MM-DD,h:mm a'),
    modifyAt: moment
      .utc(category.data?.modifyAt, 'YYYY-MM-DD,h:mm a')
      .local()
      .format('YYYY-MM-DD,h:mm a'),
      docNameAddressproofImage: category.data.docNameAddressproofImage || '',
      docNameGstcerificateImage: category.data.docNameGstcerificateImage || '',
      formDocument: category.data.formDocument || '',
  })
useEffect(()=>{
console.log(" category.data", category.data);

},[])
  const {currentUser, auth} = useAuth()

  const openEditModal = (id: any) => {
    setItemIdForUpdate(id)
  }

  const imagesPath =(pathimg:any)=>{
    console.log("pathimg",pathimg);
    
    if(pathimg.split('.')[1]=='pdf'){
     return `url('/media/icons/duotune/coding/pdfimg.png')`
    }else if(pathimg.split('.')[1]=='xl' || pathimg.split('.')[1]=='xlsx' ||pathimg.split('.')[1]=='xls'){
      return `url('/media/icons/duotune/coding/excelimage.png')`
     }else if(pathimg.split('.')[1]=='doc'){
      return `url('/media/icons/duotune/coding/docimage.png')`
     }else {
     return `url("${idProofPath}${pathimg}")`
     }
    
  }

  return (
    <>
      {/* begin::formik Add/Edit form */}
      <div className='d-flex flex-column scroll-y me-n7 pe-7'>
        {/* begin: input firstname Filed */}
        <div className='row w-100 mx-0 mb-4 gy-4'>
          {/* begin:: View Modal Header */}
          <div className='modal-header'>
            <div className='d-flex align-items-center'>
              <span className='svg-icon svg-icon-2x' onClick={() => navigate('/forms')}>
                <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
              </span>
              <h5 className='modal-title'>View Form</h5>
            </div>
            {auth?.roleId != 2 &&
            auth?.roleId != 3 &&
            auth?.roleId != 5 &&
            auth?.roleId !== 6 &&
            auth?.roleId !== 7 ? (
              <div className='ms-3'>
                {/* begin::  Edit User button */}
                <button
                  // type='submit'
                  className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
                  onClick={() => {
                    setViewIdForUpdate(undefined)
                    navigate(`/forms/formsform/${category.data.id}`)
                  }}
                >
                  <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  Edit Forms
                </button>
                {/* end::  Edit User button */}
              </div>
            ) : (
              ''
            )}
          </div>
          {/* end:: View Modal Header */}
        </div>

        <div className='modal-body'>
          <div className='container-fluid p-0'>
            <div className='row w-100 mx-0 mb-4 gy-4'>


            <div className='col-lg-4 text-center'>
                    <div className='pb-5'>
                      <h5 className='m-0'>Form Document</h5>
                    </div>
                    <div
                      className='image-input image-input-empty'
                      data-kt-image-input='true'
                     
                      style={{
                        // backgroundImage:initialvalues.formDocument.split('.')[1]=='pdf' ? `url("http://www.candmconcretestlouis.com/wp-content/uploads/2019/01/pdf-download.jpg")`:`url("${idProofPath}${initialvalues.formDocument}")`,
                        // backgroundImage:initialvalues.formDocument.split('.')[1]=='pdf' ? `url('/media/icons/duotune/coding/pdf.png')`:`url("${idProofPath}${initialvalues.formDocument}")`,
                        backgroundImage:imagesPath(initialvalues.formDocument)


                      }}
                    >
                  {initialvalues.formDocument?
                         <div className="d-flex align-items-center justify-content-center image_icn">
                        <div className="mx-2 position-relative"  onClick={() => {
                        window.open(
                          `${idProofPath}${initialvalues.formDocument}`,
                          '_blank'
                        )
                      }}><i className='bi bi-eye fs-7'></i></div>


                        {/* <div className="mx-2 position-relative" onClick={() => {saveAs('image_url',  `${idProofPath}${initialvalues.formDocument}`)}}>
                          
                    <i className="bi bi-download"></i>
                    </div> */}
                      </div>:""}
                      <div className='image-input-wrapper w-125px h-125px'></div>
                      <span
                        className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
                        data-kt-image-input-action='cancel'
                        data-bs-toggle='tooltip'
                        data-bs-dismiss='click'
                        title='Cancel avatar'
                      >
                        <i className='bi bi-x fs-2'></i>
                      </span>
                      <span
                        className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
                        data-kt-image-input-action='remove'
                        data-bs-toggle='tooltip'
                        data-bs-dismiss='click'
                        title='Remove avatar'
                      >
                        <i className='bi bi-x fs-2'></i>
                      </span>
                    </div>
                  </div>
                


              <div className='col-md-12'>
                <div className='row mb-6 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>User Name</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      value={initialvalues.userName}
                      type='text'
                      placeholder='User Name'
                      autoComplete='off'
                      disabled
                      readOnly
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold '>Name</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      value={initialvalues.name}
                      type='text'
                      disabled
                      readOnly
                      placeholder='Name'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold '>Company Name</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      value={initialvalues.companyName}
                      disabled
                      readOnly
                      placeholder='Company Name'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>File no.</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      placeholder='File no'
                      value={initialvalues.fileNo}
                      disabled
                      readOnly
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Form no.</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      placeholder='Form no.'
                      value={initialvalues.formno}
                      disabled
                      readOnly
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Form Date</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='date'
                      placeholder='Form Date'
                      value={initialvalues.formdate}
                      disabled
                      readOnly
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold '>GST no.</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      value={initialvalues.gstNo}
                      disabled
                      readOnly
                      placeholder='GST no.'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Mobile no.</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      value={initialvalues.mobileNo}
                      disabled
                      readOnly
                      placeholder='Mobile no.'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Contact no.</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      value={initialvalues.contactNo}
                      disabled
                      readOnly
                      placeholder='Contact no'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold '>Address</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      value={initialvalues.address}
                      disabled
                      readOnly
                      placeholder='Address'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold '>Email</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      value={initialvalues.email}
                      disabled
                      readOnly
                      placeholder='Email'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold '>Zone</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      value={initialvalues.zoneName}
                      disabled
                      readOnly
                      placeholder='Zone'
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Form Type</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      placeholder='Form Type'
                      value={initialvalues.formtype}
                      disabled
                      readOnly
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Sales Executive</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      placeholder='Sales Executive'
                      value={initialvalues.salesexecutiveName}
                      disabled
                      readOnly
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Comapny</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      placeholder='Comapny'
                      value={initialvalues.companyName}
                      disabled
                      readOnly
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Package Category</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      placeholder='Package Category'
                      value={initialvalues.packagecatName}
                      disabled
                      readOnly
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Package Type</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      placeholder='Package Type'
                      value={initialvalues.pacakgetype}
                      disabled
                      readOnly
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Package Name</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      placeholder='Package Name'
                      value={initialvalues.packageName}
                      disabled
                      readOnly
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Package Validity</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>Month</span>
                      <input
                        type='number'
                        className='form-control form-control-solid'
                        placeholder='Package Validity'
                        value={initialvalues.packagevalidity}
                        disabled
                        readOnly
                        autoComplete='off'
                      />
                    </div>
                  </div>
                  <div className='col-lg-12 mb-5'>
                    <label className='form-label fw-bold'>New Address</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      value={initialvalues?.newAddress}
                      disabled
                      readOnly
                      // data-kt-autosize='true'
                      placeholder='New Address'
                      autoComplete='off'
                    ></input>
                  </div>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Package Cost</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>₹</span>
                      <input
                        type='number'
                        placeholder='Package Cost'
                        value={initialvalues.packagecost}
                        disabled
                        readOnly
                        autoComplete='off'
                        className='form-control form-control-solid'
                      />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Installation Cost</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>₹</span>
                      <input
                        type='number'
                        placeholder='Installation Cost'
                        value={initialvalues.installationcost}
                        disabled
                        readOnly
                        autoComplete='off'
                        className='form-control form-control-solid'
                      />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Other Cost</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>₹</span>
                      <input
                        type='number'
                        placeholder='Other Cost'
                        value={initialvalues.othercost}
                        disabled
                        readOnly
                        autoComplete='off'
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
                        placeholder='Discount'
                        value={initialvalues.discount}
                        disabled
                        readOnly
                        autoComplete='off'
                        className='form-control form-control-solid'
                      />
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>GST Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>₹</span>
                      <input
                        type='number'
                        placeholder='GST Amount'
                        value={initialvalues.gstamount}
                        disabled
                        readOnly
                        autoComplete='off'
                        className='form-control form-control-solid'
                      />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Total Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>₹</span>
                      <input
                        type='number'
                        placeholder='Total Amount'
                        value={initialvalues.totalamount}
                        disabled
                        readOnly
                        autoComplete='off'
                        className='form-control form-control-solid'
                      />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cash Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>₹</span>
                      <input
                        type='number'
                        placeholder='Cash Amount'
                        value={initialvalues.cashamount}
                        disabled
                        readOnly
                        autoComplete='off'
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
                        placeholder='Cheque Amount'
                        value={initialvalues.chequeamount}
                        disabled
                        readOnly
                        autoComplete='off'
                        className='form-control form-control-solid'
                      />
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Remaining Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>₹</span>
                      <input
                        type='number'
                        placeholder='Remaining Amount'
                        value={initialvalues.remaningamount}
                        disabled
                        readOnly
                        autoComplete='off'
                        className='form-control form-control-solid'
                      />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Bank Name</label>
                    <input
                      type='text'
                      placeholder='Bank Name'
                      value={initialvalues.bankName}
                      disabled
                      readOnly
                      autoComplete='off'
                      className='form-control form-control-solid'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cheque no.</label>
                    <input
                      type='number'
                      placeholder='Cheque No'
                      value={initialvalues.chequeno}
                      disabled
                      readOnly
                      autoComplete='off'
                      className='form-control form-control-solid'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cheque Date</label>
                    <input
                      type='date'
                      placeholder='Cheque No'
                      value={initialvalues.chequedate}
                      disabled
                      readOnly
                      autoComplete='off'
                      className='form-control form-control-solid'
                    />
                  </div>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Receiver</label>
                    <input
                      type='text'
                      placeholder='Receiver'
                      value={initialvalues.receiverName}
                      disabled
                      readOnly
                      autoComplete='off'
                      className='form-control form-control-solid'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Activation Date</label>
                    <input
                      type='date'
                      placeholder='Activation Date'
                      value={initialvalues.activationdate}
                      disabled
                      readOnly
                      autoComplete='off'
                      className='form-control form-control-solid'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Expiry Date</label>
                    <input
                      type='date'
                      placeholder='Expiry Date'
                      value={initialvalues.expirydate}
                      disabled
                      readOnly
                      autoComplete='off'
                      className='form-control form-control-solid'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>IP Type</label>
                    <input
                      type='text'
                      placeholder='IP Type'
                      value={initialvalues.iptype}
                      disabled
                      readOnly
                      autoComplete='off'
                      className='form-control form-control-solid'
                    />
                  </div>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Note</label>
                    <input
                      type='text'
                      value={initialvalues.note}
                      disabled
                      readOnly
                      autoComplete='off'
                      placeholder='Note'
                      className='form-control form-control-solid'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Third Party</label>
                    <input
                      type='text'
                      placeholder='Third Party'
                      value={initialvalues.thirdparty}
                      disabled
                      readOnly
                      autoComplete='off'
                      className='form-control form-control-solid'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Remark</label>
                    <input
                      type='text'
                      placeholder='Remark'
                      value={initialvalues.remark}
                      disabled
                      readOnly
                      autoComplete='off'
                      className='form-control form-control-solid'
                    />
                  </div>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Form Submit</label>
                    <input
                      type='text'
                      placeholder='Form Submit'
                      value={initialvalues.status}
                      disabled
                      readOnly
                      autoComplete='off'
                      className='form-control form-control-solid'
                    />
                  </div>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Created by</label>
                    <input
                      className='form-control form-control-lg'
                      type='text'
                      value={initialvalues.createdByName}
                      name='createdByName'
                      placeholder='createdByName'
                      autoComplete='off'
                      disabled
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Created at</label>
                    <input
                      type='text'
                      value={initialvalues.createdAt}
                      name='createdAt'
                      placeholder='Created at'
                      disabled
                      readOnly
                      autoComplete='off'
                      className='form-control form-control-solid'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Updated by</label>
                    <input
                      type='text'
                      value={initialvalues.modifybyName}
                      disabled
                      readOnly
                      autoComplete='off'
                      placeholder='Updated by'
                      className='form-control form-control-solid'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Updated at</label>
                    <input
                      className='form-control form-control-lg'
                      type='text'
                      value={initialvalues.modifyAt}
                      name='modifyAt'
                      placeholder='UpdatedAt'
                      autoComplete='off'
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormsFormViewModal
