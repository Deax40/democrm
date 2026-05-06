import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'

// Dashboard
import DashboardIndex from './pages/dashboard/Index'
import Analytics      from './pages/dashboard/Analytics'

// Applications
import Chat      from './pages/apps/Chat'
import Email     from './pages/apps/Email'
import Tasks     from './pages/apps/Tasks'
import Notes     from './pages/apps/Notes'
import Storage   from './pages/apps/Storage'
import Calendar  from './pages/apps/Calendar'

// Reports
import ReportSales       from './pages/reports/Sales'
import ReportLeads       from './pages/reports/Leads'
import ReportProjects    from './pages/reports/Projects'
import ReportTimesheets  from './pages/reports/Timesheets'

// Customers
import CustomersList   from './pages/customers/List'
import CustomerView    from './pages/customers/View'
import CustomerCreate  from './pages/customers/Create'

// Leads
import LeadsList   from './pages/leads/List'
import LeadView    from './pages/leads/View'
import LeadCreate  from './pages/leads/Create'

// Projects
import ProjectsList   from './pages/projects/List'
import ProjectView    from './pages/projects/View'
import ProjectCreate  from './pages/projects/Create'

// Proposals
import ProposalsList   from './pages/proposals/List'
import ProposalView    from './pages/proposals/View'
import ProposalCreate  from './pages/proposals/Create'

// Payments / Invoice
import PaymentsList   from './pages/payments/List'
import InvoiceView    from './pages/payments/InvoiceView'
import InvoiceCreate  from './pages/payments/InvoiceCreate'

// Widgets
import WidgetsLists      from './pages/widgets/Lists'
import WidgetsTables     from './pages/widgets/Tables'
import WidgetsCharts     from './pages/widgets/Charts'
import WidgetsStatistics from './pages/widgets/Statistics'
import WidgetsMisc       from './pages/widgets/Misc'

// Auth
import Login         from './pages/auth/Login'
import Register      from './pages/auth/Register'
import ResetPassword from './pages/auth/ResetPassword'
import VerifyOtp     from './pages/auth/VerifyOtp'
import Maintenance   from './pages/auth/Maintenance'
import NotFound404   from './pages/auth/NotFound404'

// Settings
import SettingsGeneral      from './pages/settings/General'
import SettingsSeo          from './pages/settings/Seo'
import SettingsTags         from './pages/settings/Tags'
import SettingsEmail        from './pages/settings/Email'
import SettingsFinance      from './pages/settings/Finance'
import SettingsLocalization from './pages/settings/Localization'
import SettingsGateways     from './pages/settings/Gateways'
import { SettingsTasks, SettingsLeads, SettingsCustomers, SettingsRecaptcha, SettingsSupport, SettingsMisc } from './pages/settings/SimpleSettings'

// Help
import Knowledgebase from './pages/help/Knowledgebase'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Dashboard */}
          <Route path="/"          element={<DashboardIndex />} />
          <Route path="/analytics" element={<Analytics />} />

          {/* Apps */}
          <Route path="/apps/chat"     element={<Chat />} />
          <Route path="/apps/email"    element={<Email />} />
          <Route path="/apps/tasks"    element={<Tasks />} />
          <Route path="/apps/notes"    element={<Notes />} />
          <Route path="/apps/storage"  element={<Storage />} />
          <Route path="/apps/calendar" element={<Calendar />} />

          {/* Reports */}
          <Route path="/reports/sales"       element={<ReportSales />} />
          <Route path="/reports/leads"       element={<ReportLeads />} />
          <Route path="/reports/projects"    element={<ReportProjects />} />
          <Route path="/reports/timesheets"  element={<ReportTimesheets />} />

          {/* Customers */}
          <Route path="/customers"        element={<CustomersList />} />
          <Route path="/customers/create" element={<CustomerCreate />} />
          <Route path="/customers/:id"    element={<CustomerView />} />
          <Route path="/customers/:id/edit" element={<CustomerCreate />} />

          {/* Leads */}
          <Route path="/leads"        element={<LeadsList />} />
          <Route path="/leads/create" element={<LeadCreate />} />
          <Route path="/leads/:id"    element={<LeadView />} />
          <Route path="/leads/:id/edit" element={<LeadCreate />} />

          {/* Projects */}
          <Route path="/projects"        element={<ProjectsList />} />
          <Route path="/projects/create" element={<ProjectCreate />} />
          <Route path="/projects/:id"    element={<ProjectView />} />

          {/* Proposals */}
          <Route path="/proposals"        element={<ProposalsList />} />
          <Route path="/proposals/create" element={<ProposalCreate />} />
          <Route path="/proposals/:id"    element={<ProposalView />} />

          {/* Payments / Invoice */}
          <Route path="/payments"        element={<PaymentsList />} />
          <Route path="/invoice/create"  element={<InvoiceCreate />} />
          <Route path="/invoice/:id"     element={<InvoiceView />} />

          {/* Widgets */}
          <Route path="/widgets/lists"       element={<WidgetsLists />} />
          <Route path="/widgets/tables"      element={<WidgetsTables />} />
          <Route path="/widgets/charts"      element={<WidgetsCharts />} />
          <Route path="/widgets/statistics"  element={<WidgetsStatistics />} />
          <Route path="/widgets/misc"        element={<WidgetsMisc />} />

          {/* Auth – Cover */}
          <Route path="/auth/login-cover"      element={<Login variant="cover" />} />
          <Route path="/auth/login-minimal"    element={<Login variant="minimal" />} />
          <Route path="/auth/login-creative"   element={<Login variant="creative" />} />
          <Route path="/auth/register-cover"   element={<Register variant="cover" />} />
          <Route path="/auth/register-minimal" element={<Register variant="minimal" />} />
          <Route path="/auth/register-creative"element={<Register variant="creative" />} />
          <Route path="/auth/reset-cover"      element={<ResetPassword variant="cover" />} />
          <Route path="/auth/reset-minimal"    element={<ResetPassword variant="minimal" />} />
          <Route path="/auth/reset-creative"   element={<ResetPassword variant="creative" />} />
          <Route path="/auth/verify-cover"     element={<VerifyOtp variant="cover" />} />
          <Route path="/auth/verify-minimal"   element={<VerifyOtp variant="minimal" />} />
          <Route path="/auth/verify-creative"  element={<VerifyOtp variant="creative" />} />
          <Route path="/auth/maintenance"      element={<Maintenance />} />
          <Route path="/auth/404"              element={<NotFound404 />} />

          {/* Settings */}
          <Route path="/settings/general"      element={<SettingsGeneral />} />
          <Route path="/settings/seo"          element={<SettingsSeo />} />
          <Route path="/settings/tags"         element={<SettingsTags />} />
          <Route path="/settings/email"        element={<SettingsEmail />} />
          <Route path="/settings/tasks"        element={<SettingsTasks />} />
          <Route path="/settings/leads"        element={<SettingsLeads />} />
          <Route path="/settings/customers"    element={<SettingsCustomers />} />
          <Route path="/settings/finance"      element={<SettingsFinance />} />
          <Route path="/settings/gateways"     element={<SettingsGateways />} />
          <Route path="/settings/localization" element={<SettingsLocalization />} />
          <Route path="/settings/recaptcha"    element={<SettingsRecaptcha />} />
          <Route path="/settings/support"      element={<SettingsSupport />} />
          <Route path="/settings/misc"         element={<SettingsMisc />} />

          {/* Help */}
          <Route path="/help" element={<Knowledgebase />} />

          {/* 404 fallback */}
          <Route path="*" element={<NotFound404 internal />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
