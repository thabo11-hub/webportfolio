import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './components/myeducation/education.component';
import { SectionComponent } from './components/herosection/section.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ScrolltopComponent } from './components/scrolltop/scrolltop.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    EducationComponent,
    LoaderComponent,
    SkillsComponent,
    FooterComponent,
    ProjectsComponent,
    ScrolltopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule,
    NgxScrollTopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
