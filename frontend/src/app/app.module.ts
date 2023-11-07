import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { AdminComponent } from './admin/admin.component';
import { CitalacComponent } from './citalac/citalac.component';
import { ModComponent } from './mod/mod.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { GlavnaComponent } from './glavna/glavna.component';
import { AdminPrijavaComponent } from './admin-prijava/admin-prijava.component';
import { ProfilComponent } from './profil/profil.component';
import { PromenaComponent } from './promena/promena.component';
import { PretragaComponent } from './pretraga/pretraga.component';
import { KnjigaComponent } from './knjiga/knjiga.component';
import { PregledComponent } from './pregled/pregled.component';
import { IstorijaComponent } from './istorija/istorija.component';
import { KnjigaprComponent } from './knjigapr/knjigapr.component';
import { KorisnikprComponent } from './korisnikpr/korisnikpr.component';

@NgModule({
  declarations: [
    AppComponent,
    PrijavaComponent,
    AdminComponent,
    CitalacComponent,
    ModComponent,
    RegistracijaComponent,
    GlavnaComponent,
    AdminPrijavaComponent,
    ProfilComponent,
    PromenaComponent,
    PretragaComponent,
    KnjigaComponent,
    PregledComponent,
    IstorijaComponent,
    KnjigaprComponent,
    KorisnikprComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
