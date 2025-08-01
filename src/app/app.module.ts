import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatInputModule} from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PropepertylistComponent } from './propepertylist/propepertylist.component';
import { FilterComponent } from './propepertylist/filter/filter.component'
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component'
import {MatTableModule} from '@angular/material/table'
import {MatSelectModule} from '@angular/material/select'

@NgModule({
  declarations: [
    AppComponent,
    PropepertylistComponent,
    FilterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
