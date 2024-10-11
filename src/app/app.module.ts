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
import { ShoppingComponent } from './components/exos/shoppingList/shopping/shopping.component';
import { AffichageComponent } from './components/exos/shoppingList/affichage/affichage.component';
import { AjoutComponent } from './components/exos/shoppingList/ajout/ajout.component';
import { LivreServiceComponent } from './components/demos/livre-service/livre-service.component';
import { AffichageLivreComponent } from './components/demos/livre-service/affichage-livre/affichage-livre.component';
import { ShoppingListServiceComponent } from './components/exos/shopping-list-service/shopping-list-service.component';
import { FormulaireComponent } from './components/demos/formulaire/formulaire.component';
import { ProfilUserComponent } from './components/demos/routing/profil-user/profil-user.component';
import { RoutingComponent } from './components/demos/routing/routing/routing.component';
import { ListComponent } from './components/exos/fan-de-serie/list/list.component';
import { DetailsComponent } from './components/exos/fan-de-serie/details/details.component';
import { CreateComponent } from './components/exos/fan-de-serie/create/create.component';
import { UpdateComponent } from './components/exos/fan-de-serie/update/update.component';

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
        EnfantComponent,
        ShoppingComponent,
        AffichageComponent,
        AjoutComponent,
        LivreServiceComponent,
        AffichageLivreComponent,
        ShoppingListServiceComponent,
        FormulaireComponent,
        ProfilUserComponent,
        RoutingComponent,
        ListComponent,
        DetailsComponent,
        CreateComponent,
        UpdateComponent
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
