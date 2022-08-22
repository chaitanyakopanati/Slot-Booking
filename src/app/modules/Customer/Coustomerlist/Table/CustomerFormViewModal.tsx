import {KTSVG} from '../../../../../_metronic/helpers'
import ImageSelect from '../../../../../app/images/error-profile.svg'
import {FC, useEffect} from 'react'
import {Formik} from 'formik'
import moment from 'moment'
import {useNavigate} from 'react-router-dom'

type Props = {
  category: any
}

const API_URL_DATA = process.env.REACT_APP_IMG_PATH

const idProofPath: string = `${API_URL_DATA}Mediaupload/Customer/IDProof//`
const gstProofPath: string = `${API_URL_DATA}MediaUpload/Customer/GSTCertificate//`
const addressProofPath: string = `${API_URL_DATA}MediaUpload/Customer/AddressProof/`
const CustomerFormViewModal: FC<Props> = ({category}) => {
  const navigation = useNavigate()
  return (
    <>
      <Formik
        initialValues={{
          id: category.id || 0,
          userName: category.userName || '',
          companyName: category.companyName || '',
          gstno: category.gstno || '',
          email: category.email || '',
          name: category.name || '',
          mobileNo: category.mobileNo || '',
          contactno: category.contactno || '',
          zoneId: category.zoneId || 0,
          zoneName: category.zoneName || '',
          address: category.address || '',
          remark: category.remark || '',
          createdby: category.createdby || '',
          modifyAt: category.modifyAt
            ? moment.utc(category.modifyAt, 'YYYY-MM-DD,h:mm a').local().format('YYYY-MM-DD,h:mm a')
            : '',
          modifyby: category.modifyby || '',
          createdAt: category.createdAt
            ? moment(category.createdAt, 'YYYY-MM-DD,h:mm a').format('YYYY-MM-DD,h:mm a')
            : '',
          activationDate: category.activationDate
            ? moment(category.activationDate, 'YYYY-MM-DD,h:mm a').format('YYYY-MM-DD,h:mm a')
            : '',
          expiryDate: category.expiryDate
            ? moment(category.expiryDate, 'YYYY-MM-DD,h:mm a').format('YYYY-MM-DD,h:mm a')
            : '',
          docNameAddressproofImage: category.docNameAddressproofImage || '',
          docNameGstcerificateImage: category.docNameGstcerificateImage || '',
          docNameIdProof: category.docNameIdProof || '',
        }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <form
            id='kt_modal_add_user_form'
            className='form'
            onSubmit={props.handleSubmit}
            noValidate
          >
            <div className='modal-header'>
              <div className='d-flex align-items-center'>
                <div
                  className='btn btn-icon btn-sm btn-active-light-primary me-5'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                >
                  <span className='svg-icon svg-icon-2x' onClick={() => navigation('/customers')}>
                    <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
                  </span>
                </div>
                <h5 className='modal-title'>View Customer</h5>
              </div>
              <div className='ms-3'>
                <a
                  href='#'
                  className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
                  data-bs-toggle='modal'
                  data-bs-target='#kt_modal_1'
                  onClick={() => navigation(`/customers/customersform/${props.values.id}`)}
                >
                  <span className='svg-icon svg-icon-gray-500 me-1'>
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </span>
                  Edit Customer
                </a>
              </div>
            </div>

            <div className='modal-body'>
              <div className='container-fluid p-0'>
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-4 text-center'>
                    <div className='pb-5'>
                      <h5 className='m-0'>ID Proof</h5>
                    </div>
                    <div
                      className='image-input image-input-empty'
                      data-kt-image-input='true'
                      style={{
                        backgroundImage: `url("${idProofPath}${props.values.docNameIdProof}")`,
                      }}
                    >
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
                  <div className='col-lg-4 text-center'>
                    <div className='pb-5'>
                      <h5 className='m-0'>Address Proof</h5>
                    </div>
                    <div
                      className='image-input image-input-empty'
                      data-kt-image-input='true'
                      style={{
                        backgroundImage: `url("${addressProofPath}${props.values.docNameAddressproofImage}")`,
                      }}
                    >
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
                  <div className='col-lg-4 text-center'>
                    <div className='pb-5'>
                      <h5 className='m-0'>GST Certificate</h5>
                    </div>
                    <div
                      className='image-input image-input-empty'
                      data-kt-image-input='true'
                      style={{
                        backgroundImage: `url("${gstProofPath}${props.values.docNameGstcerificateImage}")`,
                      }}
                    >
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
                  <div className='col-lg-12'>
                    <label className='form-label fw-bold'>Name</label>
                    <input
                      value={props.values.name}
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                      disabled
                    />
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>Company Name</label>
                    <input
                      value={props.values.companyName}
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                      disabled
                    />
                  </div>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>GST no.</label>
                    <input
                      placeholder='GST no.'
                      value={props.values.gstno}
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                      disabled
                    />
                  </div>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Email</label>
                    <input
                      placeholder='Email'
                      value={props.values.email}
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                      disabled
                    />
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>User Name</label>
                    <input
                      placeholder='User Name'
                      value={props.values.userName}
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                      disabled
                    />
                  </div>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Mobile no.</label>
                    <input
                      placeholder='Mobile no.'
                      value={props.values.mobileNo}
                      className='form-control form-control-lg form-control-solid'
                      type='number'
                      autoComplete='off'
                      disabled
                    />
                  </div>
                  <div className='col-lg-3'>
                    <div data-select2-id='select-role'>
                      <label className='form-label fw-bold'>Contact no.</label>
                      <input
                        placeholder='Contact no.'
                        value={props.values.contactno}
                        className='form-control form-control-lg form-control-solid'
                        type='number'
                        autoComplete='off'
                        disabled
                      />
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <div data-select2-id='select-zone'>
                      <label className='form-label fw-bold'>Zone</label>
                      <input
                        placeholder='Zone'
                        value={props.values.zoneName}
                        className='form-control form-control-lg form-control-solid'
                        autoComplete='off'
                        disabled
                      />
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <label className='form-label fw-bold'>Address</label>
                    <textarea
                      value={props.values.address}
                      className='form-control form-control form-control-solid'
                      data-kt-autosize='true'
                      placeholder='Address'
                      disabled
                    ></textarea>
                  </div>
                  <div className='col-lg-4'>
                    <div data-select2-id='select-role'>
                      <label className='form-label fw-bold'>Contact no.</label>
                      <input
                        value={props.values.contactno}
                        placeholder='Contact no.'
                        className='form-control form-control-lg form-control-solid'
                        type='number'
                        autoComplete='off'
                        disabled
                      />
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Activation Date</label>
                    <div className='input-group mb-5'>
                      <span
                        className='input-group-text svg-icon svg-icon-gray-500 '
                        id='basic-addon1'
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen014.svg'
                          className='svg-icon-3 svg-icon-gray-900'
                        />
                      </span>
                      <input
                        type='text'
                        value={props.values.activationDate}
                        className='form-control'
                        placeholder='Username'
                        aria-label='Username'
                        aria-describedby='basic-addon1'
                        disabled
                      />
                    </div>
                  </div>

                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Expiry Date</label>
                    <div className='input-group mb-5'>
                      <span className='input-group-text' id='basic-addon1'>
                        <KTSVG
                          path='/media/icons/duotune/general/gen014.svg'
                          className='svg-icon-3 svg-icon-gray-900'
                        />
                      </span>
                      <input
                        type='text'
                        className='form-control'
                        value={props.values.expiryDate}
                        placeholder='Username'
                        aria-label='Username'
                        aria-describedby='basic-addon1'
                        disabled
                      />
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <label className='form-label fw-bold'>Remark</label>
                    <textarea
                      value={props.values.remark}
                      className='form-control form-control form-control-solid'
                      data-kt-autosize='true'
                      placeholder='Remark here'
                      disabled
                    ></textarea>
                  </div>
                  <div className='col-lg-3'>
                    <div data-select2-id='select-role'>
                      <label className='form-label fw-bold'>Created by</label>
                      <input
                        value={props.values.createdby}
                        placeholder='Created byl'
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        autoComplete='off'
                        disabled
                      />
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Created at</label>
                    <div className='input-group mb-5'>
                      <span
                        className='input-group-text svg-icon svg-icon-gray-500 '
                        id='basic-addon1'
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen014.svg'
                          className='svg-icon-3 svg-icon-gray-900'
                        />
                      </span>
                      <input
                        type='text'
                        value={props.values.createdAt}
                        className='form-control'
                        placeholder='Created at'
                        aria-label='Username'
                        aria-describedby='basic-addon1'
                        disabled
                      />
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <div data-select2-id='select-role'>
                      <label className='form-label fw-bold'>Updated by</label>
                      <input
                        placeholder='Updated by'
                        value={props.values.modifyby}
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        autoComplete='off'
                        disabled
                      />
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Updated at</label>
                    <div className='input-group mb-5'>
                      <span className='input-group-text' id='basic-addon1'>
                        <KTSVG
                          path='/media/icons/duotune/general/gen014.svg'
                          className='svg-icon-3 svg-icon-gray-900'
                        />
                      </span>
                      <input
                        type='text'
                        value={props.values.modifyAt}
                        className='form-control'
                        placeholder='Updated at'
                        aria-label='Username'
                        aria-describedby='basic-addon1'
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  )
}
export default CustomerFormViewModal
