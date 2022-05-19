/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { useIntl } from 'react-intl'
import { KTSVG } from '../../../helpers'
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub'
import { AsideMenuItem } from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>

      <AsideMenuItem
        to='/users'
        icon='/media/icons/duotune/general/gen009.svg'
        title={intl.formatMessage({ id: 'MENU.USERS' })}
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/general/gen008.svg'
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
        fontIcon='bi-app-indicator'
      />

    </>
  )
}
