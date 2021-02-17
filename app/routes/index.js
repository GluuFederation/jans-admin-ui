import React from 'react'
import { Route, Switch, Redirect } from 'react-router'

// ----------- Pages Imports ---------------
import Reports from './Dashboards/Reports'

import NavbarOnly from './Layouts/NavbarOnly'
import SidebarDefault from './Layouts/SidebarDefault'
import SidebarA from './Layouts/SidebarA'
import DragAndDropLayout from './Layouts/DragAndDropLayout'
import SidebarWithNavbar from './Layouts/SidebarWithNavbar'

import AttributeListPage from './Apps/Attibutes/AttributeListPage'
import AttributeAddPage from './Apps/Attibutes/AttributeAddPage'
import AttributeEditPage from './Apps/Attibutes/AttributeEditPage'

import ClientListPage from './Apps/Clients/ClientListPage'
import ClientAddPage from './Apps/Clients/ClientAddPage'
import ClientEditPage from './Apps/Clients/ClientEditPage'

import CustomScriptListPage from './Apps/Scripts/CustomScriptListPage'
import CustomScriptAddPage from './Apps/Scripts/CustomScriptAddPage'
import CustomScriptEditPage from './Apps/Scripts/CustomScriptEditPage'
import ProfilePage from './Apps/Profile/ProfilePage'
// ----------- Layout Imports ---------------
import GluuNavBar from '../routes/components/Navbars/GluuNavBar'
import { DefaultSidebar } from './../layout/components/DefaultSidebar'
import { SidebarASidebar } from './../layout/components/SidebarASidebar'
import ScopeListPage from './Apps/Scopes/ScopeListPage'
import ScopeAddPage from './Apps/Scopes/ScopeAddPage'
import ScopeEditPage from './Apps/Scopes/ScopeEditPage'
import ByeBye from './Pages/ByeBye'
import SmtpPage from './Apps/Configuration/SmtpPage'
import AcrsPage from './Apps/Configuration/AcrsPage'
import LoggingPage from './Apps/Configuration/LoggingPage'
import JwksPage from './Apps/Configuration/JwksPage'
import Fido2Page from './Apps/Configuration/Fido2Page'
import CachePage from './Apps/Configuration/CachePage'
import LdapPage from './Apps/Configuration/LdapPage'
import CouchbasePage from './Apps/Configuration/CouchbasePage'

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
  return (
    <Switch>
      <Redirect from="/" to="/home/reports" exact />
      <Route path="/home/analytics" exact component={ Analytics } />
      <Route path="/home/reports" exact component={Reports} />

      {/*    Layouts     */}
      <Route path="/layouts/navbar" component={NavbarOnly} />
      <Route path="/layouts/sidebar" component={SidebarDefault} />
      <Route path="/layouts/sidebar-a" component={SidebarA} />
      <Route
        path="/layouts/sidebar-with-navbar"
        component={SidebarWithNavbar}
      />
      <Route path="/layouts/dnd-layout" component={DragAndDropLayout} />

      {/*    Apps Routes     */}

      <Route component={AttributeListPage} path="/attributes" />
      <Route component={AttributeAddPage} path="/attribute/new" />
      <Route component={AttributeEditPage} path="/attribute/edit:gid" />

      <Route component={ClientListPage} path="/clients" />
      <Route component={ClientAddPage} path="/client/new" />
      <Route component={ClientEditPage} path="/client/edit:gid" />

      <Route component={ScopeListPage} path="/scopes" />
      <Route component={ScopeAddPage} path="/scope/new" />
      <Route component={ScopeEditPage} path="/scope/edit:gid" />

      <Route component={CustomScriptListPage} path="/scripts" />
      <Route component={CustomScriptAddPage} path="/script/new" />
      <Route component={CustomScriptEditPage} path="/script/edit:gid" />

      <Route component={SmtpPage} path="/config/smtp" />
      <Route component={AcrsPage} path="/config/acrs" />
      <Route component={LoggingPage} path="/config/logging" />
      <Route component={JwksPage} path="/config/jwks" />
      <Route component={Fido2Page} path="/config/fido" />
      <Route component={CachePage} path="/config/cache" />
      <Route component={LdapPage} path="/config/ldap" />
      <Route component={CouchbasePage} path="/config/couchbase" />

      {/*    Pages Routes    */}
      <Route component={ProfilePage} path="/profile" />
      <Route component={ByeBye} path="/logout" />

      {/*    404    */}
      <Redirect to="/error-404" />
    </Switch>
  )
}

//------ Custom Layout Parts --------
export const RoutedNavbars = () => (
  <Switch>
    {/* Default Navbar: */}
    <Route
      component={() => (
        <GluuNavBar themeStyle="color" themeColor="primary" navStyle="accent" />
      )}
    />
  </Switch>
)

export const RoutedSidebars = () => (
  <Switch>
    {/* Default Sidebar: */}
    <Route component={DefaultSidebar} />
  </Switch>
)
