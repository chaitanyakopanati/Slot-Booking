/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/general/gen008.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='/customers'
        icon='/media/icons/duotune/general/gen009.svg'
        title={intl.formatMessage({id: 'MENU.CUSTOMERS'})}
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='/forms'
        icon='/media/icons/duotune/general/gen029.svg'
        title={intl.formatMessage({id: 'MENU.FORMS'})}
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='/installations'
        icon='/media/icons/duotune/general/gen033.svg'
        title={intl.formatMessage({id: 'MENU.INSTALLATIONS'})}
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='/inquiries'
        icon='/media/icons/duotune/general/gen035.svg'
        title={intl.formatMessage({id: 'MENU.INQUIRIES'})}
        fontIcon='bi-app-indicator'
      />

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
          to='/complaint-types3'
          icon='/media/icons/duotune/general/gen010.svg'
          title={intl.formatMessage({id: 'MENU.COMPLAINT.TYPES3'})}
          fontIcon='bi-app-indicator'
        />
        <AsideMenuItem
          to='/complaint-types4'
          icon='/media/icons/duotune/general/gen010.svg'
          title={intl.formatMessage({id: 'MENU.COMPLAINT.TYPES4'})}
          fontIcon='bi-app-indicator'
        />
        <AsideMenuItem
          to='/complaint-types5'
          icon='/media/icons/duotune/general/gen010.svg'
          title={intl.formatMessage({id: 'MENU.COMPLAINT.TYPES5'})}
          fontIcon='bi-app-indicator'
        />
        <AsideMenuItem
          to='/complaint-types6'
          icon='/media/icons/duotune/general/gen010.svg'
          title={intl.formatMessage({id: 'MENU.COMPLAINT.TYPES6'})}
          fontIcon='bi-app-indicator'
        />
        <AsideMenuItem
          to='/complaint-types7'
          icon='/media/icons/duotune/general/gen010.svg'
          title={intl.formatMessage({id: 'MENU.COMPLAINT.TYPES7'})}
          fontIcon='bi-app-indicator'
        />
        <AsideMenuItem
          to='/complaint-types8'
          icon='/media/icons/duotune/general/gen010.svg'
          title={intl.formatMessage({id: 'MENU.COMPLAINT.TYPES8'})}
          fontIcon='bi-app-indicator'
        />
      </AsideMenuItemWithSub>
      {/* master */}
      <AsideMenuItemWithSub
        to='/master'
        title='master'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen033.svg'
      >
        <AsideMenuItem
          to='/master/users'
          icon='/media/icons/duotune/general/gen010.svg'
          title={intl.formatMessage({id: 'MENU.MASTER.USERS'})}
          fontIcon='bi-app-indicator'
        />
        </AsideMenuItemWithSub>
        {/*  */}

      <AsideMenuItem
        to='/faults'
        icon='/media/icons/duotune/general/gen011.svg'
        title={intl.formatMessage({id: 'MENU.FAULTS'})}
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='/zones'
        icon='/media/icons/duotune/general/gen001.svg'
        title={intl.formatMessage({id: 'MENU.ZONES'})}
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='/main-points'
        icon='/media/icons/duotune/general/gen002.svg'
        title={intl.formatMessage({id: 'MENU.MAIN.POINTS'})}
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='/companies'
        icon='/media/icons/duotune/general/gen003.svg'
        title={intl.formatMessage({id: 'MENU.COMPANIES'})}
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='/banks'
        icon='/media/icons/duotune/general/gen004.svg'
        title={intl.formatMessage({id: 'MENU.BANKS'})}
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='/products'
        icon='/media/icons/duotune/general/gen005.svg'
        title={intl.formatMessage({id: 'MENU.PRODUCTS'})}
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='/packages'
        icon='/media/icons/duotune/general/gen006.svg'
        title={intl.formatMessage({id: 'MENU.PACKAGES'})}
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='/package-categories'
        icon='/media/icons/duotune/general/gen007.svg'
        title={intl.formatMessage({id: 'MENU.PACKAGE.CATEGORIES'})}
        fontIcon='bi-app-indicator'
      />
    </>
  )
}
