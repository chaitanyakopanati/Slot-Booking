/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useIntl} from 'react-intl'
import SignoutPop from '../../../../app/routing/SignoutPop'

// import {useAuth} from '../../../../app/modules/auth'
import {useAuth} from '../../../../app/modules/auth/core/Auth'
import {Languages} from './Languages'
import {toAbsoluteUrl} from '../../../helpers'
import Swal from 'sweetalert2'

const HeaderUserMenu: FC = () => {
  const {currentUser, logout} = useAuth()
  const intl = useIntl()
  const navigate = useNavigate()
  const {auth} = useAuth()

  useEffect(() => {
    console.log('auth', auth)
  }, [])

  const signOut = () => {
    Swal.fire({
      title: `Are you sure you want to sign out ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sign Out',
    }).then(async (result) => {
      if (result.isConfirmed) {
        logout()
        // LoderActions(true)
        // try {
        //   let payload = await InstallationsService.deleteInstallations(ID)
        //   if (payload.success === true) {
        //     LoderActions(false)
        //     toast.success(payload.message)
        //     // toast.success(` Data Deleted Successfully`)
        //     toast.dismiss('1s')
        //   } else {
        //     LoderActions(false)
        //     toast.error(payload.message)
        //     // toast.error(` Failed to Delete Data`)
        //     toast.dismiss('1s')
        //   }
        // } catch (error: any) {
        //   console.log('error', error.data)
        //   toast.error(error?.data?.message)
        //   toast.dismiss('1s')
        // }
        // fetchAllUser()
      }
    })
  }

  const [show, setShow] = useState(true)
  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      <div className='menu-item px-3'>
        <div className='menu-content d-flex align-items-center px-3'>
          <div className='symbol symbol-50px me-5'>
            <img alt='Logo' src={toAbsoluteUrl('/media/avatars/profile.png')} />
          </div>
          {/*  */}
          <div className='d-flex flex-column'>
            <div className='fw-bolder d-flex align-items-center fs-5'>
              {currentUser?.first_name} {currentUser?.last_name}
            </div>
            {/* <a href='#' className='fw-bold text-muted text-hover-primary fs-7'>
              {currentUser?.email}
            </a> */}
            {/* <div className='fw-bold text-muted fs-7'>Designation (Admin)</div> */}
            <div className='fw-bold text-muted fs-7'>{auth?.username}</div>
          </div>
        </div>
      </div>

      <div className='separator my-2'></div>
      {/* 
      <div className='menu-item px-5'>
        <Link to={'/crafted/pages/profile'} className='menu-link px-5'>
          My Profile
        </Link>
      </div> */}

      <div className='menu-item px-5 my-1'>
        <Link to='/profile-settings' className='menu-link px-5'>
          {/* Profile Settings */}
          {intl.formatMessage({id: 'PROFILE.SETTINGS'})}
        </Link>
      </div>

      {/* <Languages /> */}

      <div className='menu-item px-5 my-1'>
        {/* <a onClick={logout} className='menu-link px-5'> */}
        <a onClick={signOut} className='menu-link px-5'>
          {/* Sign Out */}
          {intl.formatMessage({id: 'PROFILE.SIGNOUT'})}
        </a>
      </div>
    </div>
  )
}

export {HeaderUserMenu}
