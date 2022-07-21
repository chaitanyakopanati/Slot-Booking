import React from 'react'
import { useRef } from 'react'
import { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import { ListPageData } from '../ComplaintContext'
import { KTSVG } from '../../../../_metronic/helpers'
const ComplaintFormModal = () => {
  const {
    setSuggestionUserText,
    getUserNameData,
  } = ListPageData()

  const suggestionRef: any = useRef()

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

  useEffect(() => {
    console.log(`bb`, getUserNameData)
  }, [])



  // useEffect(() => {
  //   if (itemIdForUpdate === 'add') {
  //     setInitialValues({
  //       ...category,
  //       id: category.data?.id,
  //       firstname: category.data?.firstname || '',
  //       lastname: category.data?.lastname || '',
  //       username: category.data?.username || '',
  //       email: category.data?.email || '',
  //       phone: category.data?.phone || '',
  //       zoneId: category.data?.zoneId || '',
  //       zoneName: category.data?.zoneName || '',
  //       roleId: category.data?.roleId || '',
  //       password: category.data?.password || '',
  //       confirmPassword: '',
  //     })
  //   } else {
  //     setInitialValues({
  //       ...category,
  //       id: category.data?.id,
  //       firstname: category.data?.firstname || '',
  //       lastname: category.data?.lastname || '',
  //       username: category.data?.username || '',
  //       email: category.data?.email || '',
  //       phone: category.data?.phone || '',
  //       zoneId: category.data?.zoneId || '',
  //       zoneName: category.data?.zoneName || '',
  //       roleId: category.data?.roleId || '',
  //     })
  //   }
  // }, [itemIdForUpdate])

  const submitStep = () => {

  }

  return (

    <>

      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={submitStep}
        >
          {(props) => (
            <Form className='form' noValidate id='kt_modal_create_app_form'>
              <div className=''>
                {/* <div className='modal-dialog modal-dialog-centered modal-xl mw-md-600px'> */}
                {/* <div className='modal-content'> */}
                <div className='modal-header'>
                  <h5 className='modal-title'>Create Complaint</h5>
                  <div
                    className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  >
                    {/* <span className='svg-icon svg-icon-2x'>
              <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-3' />
            </span> */}
                  </div>
                </div>



                <div className='modal-body'>
                  <div className='container-fluid p-0'>
                    <div className='row w-100 mx-0 mb-4 gy-4'>
                      <div className='col-lg-6'>
                        {/* <label className='form-label fw-bold'>Username</label> */}
                        {/* <input
                          name='userid'
                          placeholder='userName'
                          className='form-control form-control-lg form-control-solid'
                          value={props.values.userid}
                          autoComplete='false'
                          onChange={(e) => {
                            setSuggestionUserText(e.target.value)
                            if (e.target.value) {
                              suggestionRef.current.style.display = 'block'
                            } else {
                              suggestionRef.current.style.display = 'none'
                            }
                            props.handleChange(e)
                          }}
                          onBlur={(e) => {
                            // suggestionRef.current.
                            var container = suggestionRef.current
                            document.addEventListener('click', function (event) {
                              if (container !== event.target && !container.contains(event.target)) {
                              } else {
                              }
                              suggestionRef.current.style.display = 'none'
                              document.removeEventListener('click', () => { })
                            })
                          }}
                        /> */}

                        {/* <div className='row w-100 mx-0 mb-4 gy-4'>
                          <div className='col-lg-12' style={{ position: 'relative' }}>
                            <label className='form-label fw-bold required'>User Name</label>{' '}
                            <input
                              name='userName'
                              placeholder='userName'
                              className='form-control form-control-lg form-control-solid'
                              // value={props.values.userName || ''}
                              value={props.values.userName}

                              autoComplete='false'

                              onChange={(e) => {
                                setSuggestionUserText(e.target.value)
                                if (e.target.value) {
                                  suggestionRef.current.style.display = 'block'
                                } else {
                                  suggestionRef.current.style.display = 'none'
                                }
                                props.handleChange(e)
                              }}
                              onBlur={(e) => {
                                // suggestionRef.current.
                                var container = suggestionRef.current
                                document.addEventListener('click', function (event) {
                                  if (container !== event.target && !container.contains(event.target)) {
                                  } else {
                                  }
                                  suggestionRef.current.style.display = 'none'
                                  document.removeEventListener('click', () => { })
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
                                          props.setFieldValue('userid', user.firstname)
                                        }}
                                      >
                                        {user.firstname}
                                      </li>
                                    )
                                  })}
                              </ul>
                            </div>
                          </div>
                        </div> */}

                        <div className='row w-100 mx-0 mb-4 gy-4'>
                          <div className='col-lg-12' style={{ position: 'relative' }}>
                            <label className='form-label fw-bold required'>User Name</label>{' '}
                            <input
                              name='userid'
                              placeholder='userName'
                              className='form-control form-control-lg form-control-solid'
                              value={props.values.userid}
                              // autoComplete='false'
                              autoComplete='off'

                              onChange={(e) => {
                                setSuggestionUserText(e.target.value)
                                if (e.target.value) {
                                  suggestionRef.current.style.display = 'block'
                                } else {
                                  suggestionRef.current.style.display = 'none'
                                }
                                props.handleChange(e)
                              }}
                              onBlur={(e) => {
                                // suggestionRef.current.
                                var container = suggestionRef.current
                                document.addEventListener('click', function (event) {
                                  if (container !== event.target && !container.contains(event.target)) {
                                  } else {
                                  }
                                  suggestionRef.current.style.display = 'none'
                                  document.removeEventListener('click', () => { })
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
                                          props.setFieldValue('userid', user.firstname)
                                        }}
                                      >
                                        {user.firstname}
                                      </li>
                                    )
                                  })}
                              </ul>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className='col-lg-6'>
                        <label className='form-label fw-bold'>Complaint type</label>
                        <div data-select2-id='select-role'>
                          <select className='form-select form-select-solid'>
                            <option>Log out</option>
                            <option value='1'>Cable Issue</option>
                            <option value='2'>DVR Problem</option>
                            <option value='3'>Mac Reset</option>
                            <option value='4'>New Installation</option>
                            <option value='4'>Lan Problem</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className='row w-100 mx-0 mb-4 gy-4'>
                      <div className='col-lg-12'>
                        <label className='form-label fw-bold'>Description</label>
                        <textarea
                          className='form-control form-control-lg form-control-solid'
                          data-kt-autosize='true'
                          placeholder='Description'
                        ></textarea>
                      </div>
                    </div>

                    <div className='row w-100 mx-0 mb-4 gy-4'>
                      <div className='col-lg-4'>
                        <label className='form-label fw-bold'>Assign to</label>
                        <div data-select2-id='select-zone'>
                          <select className='form-select form-select-solid'>
                            <option>select Techanician</option>
                            <option value='1'>Hafiz Shaikh</option>
                            <option value='2'>Hafiz Shaikh</option>
                            <option value='3'>Hafiz Shaikh</option>
                            <option value='4'>Hafiz Shaikh</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div data-select2-id='select-zone'>
                          <label className='form-label fw-bold'>Status</label>
                          <div data-select2-id='select-zone'>
                            <select className='form-select form-select-solid'>
                              <option>Unsolved</option>
                              <option value='1'>Unsolved</option>
                              <option value='2'>Solved</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div data-select2-id='select-role'>
                          <label className='form-label fw-bold'>Fault</label>
                          <div data-select2-id='select-role'>
                            <select className='form-select form-select-solid'>
                              <option>Select Fault</option>
                              <option value='1'>Cable Change</option>
                              <option value='2'>Fiber Cut</option>
                              <option value='3'>Other Issue</option>
                              <option value='4'>Installation Done</option>
                              <option value='4'>Lan Problem</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='row w-100 mx-0 mb-4 gy-4'>
                      <div className='col-lg-12'>
                        <label className='form-label fw-bold'>Remark:</label>
                        <input
                          placeholder='Remark'
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>
                    </div>
                    <div className='row w-100 mx-0 mb-4 gy-4'>
                      <div className='col-lg-12'>
                        <label className='form-label fw-bold'>Notification</label>
                        <div className='form-check form-switch form-check-custom form-check-solid me-10'>
                          <input
                            className='form-check-input h-20px w-30px'
                            type='checkbox'
                            value=''
                            id='flexSwitch20x30'
                          />
                          <label className='form-check-label'>Technician</label>
                        </div>
                        <div className='form-check form-switch form-check-custom form-check-solid me-10 mt-3'>
                          <input
                            className='form-check-input h-20px w-30px'
                            type='checkbox'
                            value=''
                            id='flexSwitch20x30'
                          />
                          <label className='form-check-label'>Customer</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='modal-footer'>
                  <button type='button' className='btn btn-light' data-bs-dismiss='modal'>
                    Close
                  </button>
                  <button type='button' className='btn btn-primary'>
                    Create
                  </button>
                </div>
                {/* </div> */}
                {/* </div> */}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default ComplaintFormModal
