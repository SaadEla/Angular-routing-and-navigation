import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

@NgModule({
  declarations: [//contient tous les component utilisé par le module
    AppComponent,
    TestComponent,
    EmployeeDetailComponent,
    routingComponents,
    PageNotFoundComponent,
    DepartmentDetailComponent//hna routing components kat 3ewad lik ghi douk les components li declariti f routing sinn ila ma declaritich chi component f routing khassek declarih hna
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule//hawaa
  ],
  providers: [EmployeeService],//hawa service
  bootstrap: [AppComponent]
})
export class AppModule { }
