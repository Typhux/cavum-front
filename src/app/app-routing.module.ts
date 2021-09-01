import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CardDetailsComponent } from './features/card/card-details/card-details.component';
import { CardComponent } from './features/card/card.component';
import { NewCardComponent } from './features/card/new-card/new-card.component';
import { EditionDetailsComponent } from './features/edition/edition-details/edition-details.component';
import { EditionComponent } from './features/edition/edition.component';
import { NewEditionComponent } from './features/edition/new-edition/new-edition.component';
import { EmulatorComponent } from './features/emulator/emulator.component';
import { SearchComponent } from './features/search/search.component';
import { TreatmentComponent } from './features/treatment/treatment.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './game/board/board.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FightComponent } from './game/fight/fight.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EmulatorFightComponent } from './features/emulator/emulatorFight/emulatorFight.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

const routes: Routes = [
  { path: '',   redirectTo: 'game', pathMatch: 'full' },
  { path: 'game', component: GameComponent },
  { path: 'game/:id', component: BoardComponent },
  { path: 'game/:id/:guid', component: FightComponent },
  { path: 'admin/edition', component: EditionComponent},
  {  path: 'admin/edition/new', component: NewEditionComponent},
  {  path: 'admin/edition/:id', component: EditionDetailsComponent},
  { path: 'admin/card', component: CardComponent },
  {  path: 'admin/card/new/:id', component: NewCardComponent},
  {  path: 'admin/card/update/:cardId', component: NewCardComponent},
  {  path: 'admin/card/new', component: NewCardComponent},
  {  path: 'admin/search', component: SearchComponent},
  {  path: 'admin/emulator', component: EmulatorComponent},
  {  path: 'admin/emulator/:id', component: EmulatorFightComponent},
  {  path: 'admin/treatment', component: TreatmentComponent},
  {  path: 'admin/card/:id', component: CardDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatDialogModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule]
})
export class AppRoutingModule { }
