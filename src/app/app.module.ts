import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { BindingComponent } from './components/demos/binding/binding.component';
import { PipeComponent } from './components/demos/pipe/pipe.component';
import { DirectiveComponent } from './components/demos/directive/directive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReductionPipe } from './tools/pipes/reduction.pipe';
import { FormatStringPipe } from './tools/pipes/format-string.pipe';
import { ListeProduitsComponent } from './components/exos/liste-produits/liste-produits.component';
import { ParentComponent } from './components/demos/inputOutput/parent/parent.component';
import { EnfantComponent } from './components/demos/inputOutput/enfant/enfant.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent,
        BindingComponent,
        PipeComponent,
        DirectiveComponent,
        ReductionPipe,
        FormatStringPipe,
        ListeProduitsComponent,
        ParentComponent,
        EnfantComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
