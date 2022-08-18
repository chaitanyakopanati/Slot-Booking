import {FC, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useLoader} from '../../../../../../../app/modules/loader/LoaderContext'
import moment from 'moment'
import {KTSVG} from '../../../../../../helpers'
import {ListPageData} from '../../FormsContext'

type Props = {
  category: any
}

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
    formtype: category.data?.formtype || '',
    salesexecutiveName: category.data?.salesexecutiveName || '',
    packagecatName: category.data?.packagecatName || '',
    pacakgetype: category.data?.pacakgetype || '',
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
    iptype: category.data?.iptype || '',
    note: category.data?.note || '',
    thirdparty: category.data?.thirdparty || '',
    remark: category.data?.remark || '',
    status: category.data?.status || '',
    contactNo: category.data?.contactNo || '',
    email: category.data?.email || '',
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
  })

  const openEditModal = (id: any) => {
    setItemIdForUpdate(id)
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
          </div>
          {/* end:: View Modal Header */}
        </div>

        <div className='modal-body'>
          <div className='container-fluid p-0'>
            <div className='row w-100 mx-0 mb-4 gy-4'>
              <div className='col-md-12'>
                <div className='row mb-6 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold required'>Username</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      value={initialvalues.userName}
                      type='text'
                      placeholder='Username'
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
                    <label className='form-label fw-bold '>Company name</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      value={initialvalues.companyName}
                      disabled
                      readOnly
                      placeholder='Company name'
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
                    <label className='form-label fw-bold'>Form date</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='date'
                      placeholder='Form date'
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
                    <label className='form-label fw-bold'>Form type</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      placeholder='Form type'
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
                    <label className='form-label fw-bold'>Package category</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      placeholder='Package category'
                      value={initialvalues.packagecatName}
                      disabled
                      readOnly
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Package type</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      placeholder='Package type'
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
                        placeholder='Package validity'
                        value={initialvalues.packagevalidity}
                        disabled
                        readOnly
                        autoComplete='off'
                      />
                    </div>
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
                    <label className='form-label fw-bold'>Installation cost</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>₹</span>
                      <input
                        type='number'
                        placeholder='Installation cost'
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
                    <label className='form-label fw-bold'>Cheque date</label>
                    <input
                      type='date'
                      placeholder='Cheque no'
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
                    <label className='form-label fw-bold'>Activation date</label>
                    <input
                      type='date'
                      placeholder='Activation date'
                      value={initialvalues.activationdate}
                      disabled
                      readOnly
                      autoComplete='off'
                      className='form-control form-control-solid'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Expiry date</label>
                    <input
                      type='date'
                      placeholder='Expiry date'
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
                    <label className='form-label fw-bold'>Third party</label>
                    <input
                      type='text'
                      placeholder='Third party'
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
                    <label className='form-label fw-bold'>Form submit</label>
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
