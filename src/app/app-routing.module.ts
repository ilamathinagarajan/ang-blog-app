import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { CatecoryNavbarComponent } from './layout/catecory-navbar/catecory-navbar.component';
import { SingleCatecoryComponent } from './page/single-catecory/single-catecory.component';
import { SinglePostComponent } from './page/single-post/single-post.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { TermsAndConditionComponent } from './page/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'category', component: SingleCatecoryComponent},
  {path: 'post', component: SinglePostComponent},
  {path: 'about', component: AboutUsComponent },
  {path: 'term-conditions', component: TermsAndConditionComponent},
  {path: 'contact', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
