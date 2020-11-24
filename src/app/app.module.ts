import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {AuthorizationInterceptor} from './services/interceptors/authorization.interceptor';
import {LanguageInterceptor} from './services/interceptors/language.interceptor';
import { AdminHomeComponent } from './admin-components/admin-home/admin-home.component';
import { CustomerHomeComponent } from './customer-components/customer-home/customer-home.component';
import { ImportExportComponent } from './admin-components/import-export/import-export.component';
import { RegisterAdminComponent } from './admin-components/register-admin/register-admin.component';
import { RegisterSmartDeviceComponent } from './admin-components/register-smart-device/register-smart-device.component';
import { AdminSmartDevicesComponent } from './admin-components/admin-smart-devices/admin-smart-devices.component';
import { AdminResetSmartDeviceComponent } from './admin-components/admin-reset-smart-device/admin-reset-smart-device.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminHomeComponent,
    CustomerHomeComponent,
    ImportExportComponent,
    RegisterAdminComponent,
    RegisterSmartDeviceComponent,
    AdminSmartDevicesComponent,
    AdminResetSmartDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LanguageInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
