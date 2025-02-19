import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { DashboardHospitalmanagerComponent } from './components/hospitalmanager/dashboard-hospitalmanager/dashboard-hospitalmanager.component';
import { RegistrationhomeComponent } from './components/admin/hospital-registration/registration-home/registrationhome.component';
import { HomepgComponent } from './components/patient/homepg/homepg.component';
import { SelectAppointmentComponent } from './components/patient/select-appointment/select-appointment.component';
import { BookAppointmentComponent } from './components/patient/book-appointment/book-appointment.component';
import { HospitalmanagerComponent } from './components/hospitalmanager/hospitalmanager/hospitalmanager.component';
import { DoctorsComponent } from './components/hospitalmanager/doctors/doctors.component';
import { AddDoctorComponent } from './components/hospitalmanager/add-doctor/add-doctor.component';

import { SingleDoctorComponent } from './components/hospitalmanager/single-doctor/single-doctor.component';
import { RegisterHospitalmanagerComponent } from './components/hospitalmanager/register-hospitalmanager/register-hospitalmanager.component';

import { HomeComponentsComponent } from './components/patient/home-components/home-components.component';
import { LoginComponent } from './components/labassistant/login/login.component';
import { SignupComponent } from './components/labassistant/signup/signup.component';
import { DashboardComponent } from './components/labassistant/dashboard/dashboard.component';
import { MaindhashboardComponent } from './components/labassistant/maindhashboard/maindhashboard.component';
import { AddlabtestComponent } from './components/labassistant/addlabtest/addlabtest.component';
import { ManageappoinemtnsComponent } from './components/labassistant/manageappoinemtns/manageappoinemtns.component';
import { ManageresultsComponent } from './components/labassistant/manageresults/manageresults.component';
import { ManagetestsComponent } from './components/labassistant/managetests/managetests.component';
import { ReportdashboardComponent } from './components/labassistant/reportdashboard/reportdashboard.component';
import { ReportdeliveryComponent } from './components/labassistant/reportdelivery/reportdelivery.component';
import { UpdatelabtestComponent } from './components/labassistant/updatelabtest/updatelabtest.component';
import { UploadresultComponent } from './components/labassistant/uploadresult/uploadresult.component';
import { UploadresultenquryComponent } from './components/labassistant/uploadresultenqury/uploadresultenqury.component';
import { HospitalManagerRegistrationComponent } from './components/admin/hospital-manager-registration/hospital-manager-registration.component';
import { LabAssistantRegistrationComponent } from './components/admin/lab-assistant-registration/lab-assistant-registration.component';
import { PatientDetailsComponent } from './components/patient/patient-details/patient-details.component';
import { PatientCheckOutComponent } from './components/patient/patient-check-out/patient-check-out.component';
import { MyAppointmentsComponent } from './components/patient/my-appointments/my-appointments.component';
import { PatientProfileComponent } from './components/patient/patient-profile/patient-profile.component';

import { HomePgLoggedComponent } from './components/patient/home-pg-logged/home-pg-logged.component';
import { SearchDocsComponent } from './components/patient/search-docs/search-docs.component';
import { AppointmentsComponent } from './components/hospitalmanager/appointments/appointments.component';
import { SingleAppointmentComponent } from './components/hospitalmanager/single-appointment/single-appointment.component';
import { LoginHospitalmanagerComponent } from './components/hospitalmanager/login-hospitalmanager/login-hospitalmanager.component';
import { HospitalProfileComponent } from './components/hospitalmanager/hospital-profile/hospital-profile.component';
import { ManagerProfileComponent } from './components/hospitalmanager/manager-profile/manager-profile.component';



const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {
    path: 'registerhospitalmanager',
    component: RegisterHospitalmanagerComponent,
  },
  {
    path: 'loginhospitalmanager',
    component: LoginHospitalmanagerComponent
  },
  {
    path: 'hospitalmanager',
    redirectTo: 'hospitalmanager/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'hospitalmanager',
    component: HospitalmanagerComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardHospitalmanagerComponent,
      },
      {
        path: 'doctors',
        component: DoctorsComponent,
      },
      {
        path: 'adddoctor',
        component: AddDoctorComponent,
      },
      {
        path: 'doctors/:id',
        component: SingleDoctorComponent,
      },
      {
        path: 'appointments',
        component: AppointmentsComponent
      },
      {
        path: 'appointments/:id',
        component: SingleAppointmentComponent
      },
      {
        path: 'hospitalprofile',
        component: HospitalProfileComponent
      },
      {
        path: 'managerprofile',
        component: ManagerProfileComponent
      }
    ],
  },
  {
    path: 'admin',
    component: RegistrationhomeComponent,
  },
  {
    path: 'admin/hospital-managers',
    component: HospitalManagerRegistrationComponent,
  },
  {
    path: 'admin/lab-assistants',
    component: LabAssistantRegistrationComponent,
  },
  {
    path: 'patient/home',
    component: HomepgComponent,
  },
  {
    path: 'labassistant/login',
    component: LoginComponent,
  },
  {
    path: 'labassistant/signup',
    component: SignupComponent,
  },
  {
    path: 'labassistant/dashboard',
    component: MaindhashboardComponent,
  },
  {
    path: 'labassistant/addlabtest',
    component: AddlabtestComponent,
  },
  {
    path: 'labassistant/manageappoinemtns',
    component: ManageappoinemtnsComponent,
  },
  {
    path: 'labassistant/manageresults',
    component: ManageresultsComponent,
  },
  {
    path: 'labassistant/managetests',
    component: ManagetestsComponent,
  },
  {
    path: 'labassistant/reporthome',
    component: ReportdashboardComponent,
  },
  {
    path: 'labassistant/reportdelivery',
    component: ReportdeliveryComponent,
  },
  {
    path: 'labassistant/reportdemand',
    component: ReportdeliveryComponent,
  },
  {
    path: 'labassistant/updatelabtest',
    component: UpdatelabtestComponent,
  },
  {
    path: 'labassistant/uploadresult',
    component: UploadresultComponent,
  },
  {
    path: 'labassistant/uploadresulten',
    component: UploadresultenquryComponent,
  },
  {
    path: 'patient/select-doctor',
    component: SelectAppointmentComponent,
  },
  {
    path: 'patient/time-slots',
    component: BookAppointmentComponent,
  },
  {
    path: 'patient/pd',
    component: PatientDetailsComponent,
  },
  {
    path: 'patient/checkout',
    component: PatientCheckOutComponent,
  },
  {
    path: 'patient/my-appointments',
    component: MyAppointmentsComponent,
  },
  {
    path: 'patient/my-profile',
    component: PatientProfileComponent,
  },
  {
    path: 'patient/my',
    component: HomePgLoggedComponent,
  },
  {
    path: 'patient/search',
    component: SearchDocsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
