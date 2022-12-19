import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpateContactComponent } from './upate-contact/upate-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  // to redirect automatically from localhost:4200 to contactManager
  {
    path:'', redirectTo:'/contacts/admin',pathMatch:'full'
  },
  // path for contact managerComponent - home
  {
    path:'contacts/admin',component:ContactManagerComponent
  },
  // AddContactComponent
  {
    path:'contacts/add',component:AddContactComponent
  },
  // UpateContactComponent
{
  path:'contacts/edit/:contactId', component:UpateContactComponent
},
{
  path:'contacts/view/:contactId', component:ViewContactComponent
},
{
path:'**', component:PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
