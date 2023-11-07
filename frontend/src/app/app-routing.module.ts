import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PrijavaComponent } from './prijava/prijava.component';
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

const routes: Routes = [
  { path: '', component: GlavnaComponent },
  { path: 'citalac', component: CitalacComponent },
  { path: 'mod', component: ModComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'prijava', component: PrijavaComponent },
  { path: 'admin-prijava', component: AdminPrijavaComponent },
  { path: 'registracija', component: RegistracijaComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'promena', component: PromenaComponent },
  { path: 'pretraga', component: PretragaComponent },
  { path: 'knjiga', component: KnjigaComponent },
  { path: 'pregled', component: PregledComponent },
  { path: 'istorija', component: IstorijaComponent },
  { path: 'knjigapr', component: KnjigaprComponent },
  { path: 'korisnikpr', component: KorisnikprComponent },
  { path: '**', component: GlavnaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

