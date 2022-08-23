/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'
import {useAuth} from '../../../../app/modules/auth'
import Access from './Accessibility'

export function AsideMenuMain() {
  const intl = useIntl()
  const {currentUser, auth} = useAuth()
  const id: number | any = auth?.roleId
  //here the role id or userid can be taken from auth and replace it in the condition to work
  return (
    <>
      {Access[id]['complaints'] === true && ( // like here
        /* { Access["complaints"]["roles"]===185 &&  */
        <AsideMenuItem
          to='/complaint'
          icon='/media/icons/duotune/coding/cod009.svg'
          title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
          fontIcon='bi-app-indicator'
        />
      )}

      {Access[id]['customers'] === true && (
        <AsideMenuItem
          to='/customers'
          icon='/media/icons/duotune/general/gen009.svg'
          title={intl.formatMessage({id: 'MENU.CUSTOMERS'})}
          fontIcon='bi-app-indicator'
        />
      )}

      {Access[id]['forms'] === true && (
        <AsideMenuItem
          to='/forms'
          icon='/media/icons/duotune/general/gen005.svg'
          title={intl.formatMessage({id: 'MENU.FORMS'})}
          fontIcon='bi-app-indicator'
        />
      )}

      {Access[id]['installations'] === true && (
        <AsideMenuItem
          to='/installations'
          icon='/media/icons/duotune/electronics/elc008.svg'
          title={intl.formatMessage({id: 'MENU.INSTALLATIONS'})}
          fontIcon='bi-app-indicator'
        />
      )}

      {Access[id]['inquiries'] === true && (
        <AsideMenuItem
          to='/inquiries'
          icon='/media/icons/duotune/general/gen035.svg'
          title={intl.formatMessage({id: 'MENU.INQUIRIES'})}
          fontIcon='bi-app-indicator'
        />
      )}

      {Access[id]['stocks'] === true && (
        <AsideMenuItemWithSub
          to='/stocks'
          title='Stocks'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/general/gen033.svg'
        >
          <AsideMenuItem
            to='stocks/office-stock-inwards'
            icon='/media/icons/duotune/general/gen010.svg'
            title={intl.formatMessage({id: 'MENU.COMPLAINT.TYPES1'})}
            fontIcon='bi-app-indicator'
          />
          <AsideMenuItem
            to='/stocks/office-stock-outwards'
            icon='/media/icons/duotune/general/gen010.svg'
            title={intl.formatMessage({id: 'MENU.COMPLAINT.TYPES2'})}
            fontIcon='bi-app-indicator'
          />
          <AsideMenuItem
            to='/stocks/office-stock-availability'
            icon='/media/icons/duotune/general/gen010.svg'
            title={intl.formatMessage({id: 'MENU.COMPLAINT.TYPES3'})}
            fontIcon='bi-app-indicator'
          />
          <AsideMenuItem
            to='/stocks/office-old-stock-inwards'
            icon='/media/icons/duotune/general/gen010.svg'
            title={intl.formatMessage({id: 'MENU.COMPLAINT.TYPES4'})}
            fontIcon='bi-app-indicator'
          />
          <AsideMenuItem
            to='/stocks/office-old-stock-outwards'
            icon='/media/icons/duotune/general/gen010.svg'
            title={intl.formatMessage({id: 'MENU.COMPLAINT.TYPES5'})}
            fontIcon='bi-app-indicator'
          />
          <AsideMenuItem
            to='/stocks/office-old-stock-availability'
            icon='/media/icons/duotune/general/gen010.svg'
            title={intl.formatMessage({id: 'MENU.COMPLAINT.TYPES6'})}
            fontIcon='bi-app-indicator'
          />
          <AsideMenuItem
            to='/stocks/godown-stock-inwards'
            icon='/media/icons/duotune/general/gen010.svg'
            title={intl.formatMessage({id: 'MENU.COMPLAINT.TYPES7'})}
            fontIcon='bi-app-indicator'
          />
          <AsideMenuItem
            to='stocks/godown-stock-availability'
            icon='/media/icons/duotune/general/gen010.svg'
            title={intl.formatMessage({id: 'MENU.COMPLAINT.TYPES8'})}
            fontIcon='bi-app-indicator'
          />
        </AsideMenuItemWithSub>
      )}

      {/* master */}
      {Access[id]['master'] === true && (
        <AsideMenuItemWithSub
          to='/master'
          title='Master'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/general/gen033.svg'
        >
          <AsideMenuItem
            to='/master/users'
            icon='/media/icons/duotune/general/gen010.svg'
            title={intl.formatMessage({id: 'MENU.MASTER.USERS'})}
            fontIcon='bi-app-indicator'
          />

          <AsideMenuItem
            to='/master/complaint-types'
            icon='/media/icons/duotune/general/gen010.svg'
            title={intl.formatMessage({id: 'MENU.MASTER.COMPLAINT.TYPES'})}
            fontIcon='bi-app-indicator'
          />

          <AsideMenuItem
            to='/master/faults'
            icon='/media/icons/duotune/general/gen011.svg'
            title={intl.formatMessage({id: 'MENU.MASTER.FAULTS'})}
            fontIcon='bi-app-indicator'
          />

          <AsideMenuItem
            to='/master/zones'
            icon='/media/icons/duotune/general/gen001.svg'
            title={intl.formatMessage({id: 'MENU.MASTER.ZONES'})}
            fontIcon='bi-app-indicator'
          />

          <AsideMenuItem
            to='/master/main-points'
            icon='/media/icons/duotune/general/gen002.svg'
            title={intl.formatMessage({id: 'MENU.MASTER.MAIN.POINTS'})}
            fontIcon='bi-app-indicator'
          />

          <AsideMenuItem
            to='/master/companies'
            icon='/media/icons/duotune/general/gen003.svg'
            title={intl.formatMessage({id: 'MENU.MASTER.COMPANIES'})}
            fontIcon='bi-app-indicator'
          />

          <AsideMenuItem
            to='/master/banks'
            icon='/media/icons/duotune/general/gen004.svg'
            title={intl.formatMessage({id: 'MENU.MASTER.BANKS'})}
            fontIcon='bi-app-indicator'
          />

          <AsideMenuItem
            to='/master/products'
            icon='/media/icons/duotune/general/gen005.svg'
            title={intl.formatMessage({id: 'MENU.MASTER.PRODUCTS'})}
            fontIcon='bi-app-indicator'
          />

          <AsideMenuItem
            to='/master/packages'
            icon='/media/icons/duotune/general/gen006.svg'
            title={intl.formatMessage({id: 'MENU.MASTER.PACKAGES'})}
            fontIcon='bi-app-indicator'
          />

          <AsideMenuItem
            to='/master/package-categories'
            icon='/media/icons/duotune/general/gen007.svg'
            title={intl.formatMessage({id: 'MENU.MASTER.PACKAGE.CATEGORIES'})}
            fontIcon='bi-app-indicator'
          />

          <AsideMenuItem
            to='/master/suppliers'
            icon='/media/icons/duotune/general/gen007.svg'
            title={intl.formatMessage({id: 'suppliers'})}
            fontIcon='bi-app-indicator'
          />
        </AsideMenuItemWithSub>
      )}
      {/*  */}
    </>
  )
}
