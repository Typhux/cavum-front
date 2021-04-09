import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { EditionComponent } from './features/edition/edition.component';
import { CardComponent } from './features/card/card.component';
import { NewEditionComponent } from './features/edition/new-edition/new-edition.component';
import { EditionDetailsComponent } from './features/edition/edition-details/edition-details.component';
import { CardDetailsComponent } from './features/card/card-details/card-details.component';
import { NewCardComponent } from './features/card/new-card/new-card.component';
import { EmulatorComponent } from './features/emulator/emulator.component';
import { LogBattleComponent } from './features/emulator/log-battle/log-battle.component';
import { SimulatorComponent } from './features/emulator/simulator/simulator.component';
import { SearchComponent } from './features/search/search.component';
import { TreatmentComponent } from './features/treatment/treatment.component';
import { HeaderComponent } from './layout/header/header.component';
import { CardService } from './features/card/card.service';
import { EditionService } from './features/edition/edition.service';
import { EmulatorService } from './features/emulator/emulator.service';
import { SearchService } from './features/search/search.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TreatmentService } from './features/treatment/treatment.service';
import { GameComponent } from './game/game.component';
import { GameService } from './game/game.service';
import { BoardComponent } from './game/board/board.component';
import { BoardService } from './game/board/board.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EditionComponent,
    CardComponent,
    NewEditionComponent,
    EditionDetailsComponent,
    NewCardComponent,
    CardDetailsComponent,
    SearchComponent,
    EmulatorComponent,
    SimulatorComponent,
    LogBattleComponent,
    TreatmentComponent,
    HeaderComponent,
    GameComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    EditionService,
    CardService,
    SearchService,
    EmulatorService,
    TreatmentService,
    GameService,
  BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
