import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// ...import statements
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MySecondCounterComponent } from './my-second-counter/my-second-counter.component';
import { CounterService } from './services/counter.service';
import { ContactService } from './contact.service'

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponent },
  { path: 'about', component: MyAboutComponent },
  // { path: 'contact', component: ContactListComponent },
  { path: '', component: ContactListComponent },
  { path: 'contact/:id', component: ContactComponent },
  // { path: '', component: MyCounterComponent },
  // { path: '', component: MySecondCounterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyAboutComponent,
    ContactListComponent,
    ContactComponent,
    MyCounterComponent,
    MySecondCounterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  //  <!-- "routes" is the array defined above
  ],
  providers: [ CounterService, ContactService ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
