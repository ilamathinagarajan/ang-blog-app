import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { CatecoryNavbarComponent } from './layout/catecory-navbar/catecory-navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { SingleCatecoryComponent } from './page/single-catecory/single-catecory.component';
import { SinglePostComponent } from './page/single-post/single-post.component';
import { TermsAndConditionComponent } from './page/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';
import { SubscribtionFormComponent } from './subscribtion-form/subscribtion-form.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { PostCardComponent } from './layout/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatecoryNavbarComponent,
    FooterComponent,
    HomeComponent,
    SingleCatecoryComponent,
    SinglePostComponent,
    TermsAndConditionComponent,
    ContactUsComponent,
    SubscribtionFormComponent,
    CommentFormComponent,
    CommentListComponent,
    AboutUsComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
