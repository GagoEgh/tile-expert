import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SearchSettingsComponent } from './search-settings/search-settings.component';
import { SearchComponent } from './search/search.component';
import { BindBoxDirective } from './directives/bind-box.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    UserProfileComponent,
    SearchSettingsComponent,
    SearchComponent,
    BindBoxDirective,
  ],
  imports: [
    CommonModule,

  ],
  exports:[
    HeaderComponent,
    NavigationComponent,
    UserProfileComponent
  ]
})
export class HeaderModule { }
