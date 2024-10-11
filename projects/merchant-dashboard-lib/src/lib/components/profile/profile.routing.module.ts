import { Routes } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";

export const ProfileRouting: Routes = [
{
    path: 'profile',
    component: ProfileComponent,
   
},
{
    path: 'edit-profile',
    component: EditProfileComponent
  }
    
]