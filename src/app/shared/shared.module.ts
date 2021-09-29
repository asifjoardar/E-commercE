import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatBadgeModule} from '@angular/material/badge';


import { FlexModule } from '@angular/flex-layout';
import { WordWrapPipe } from './pipe/word-wrap.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';

const MaterialComponents = [
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatTabsModule,
  MatGridListModule,
  MatPaginatorModule,
  ScrollingModule,
  MatBadgeModule,
  FlexModule
];

@NgModule({ 
  declarations: [
    WordWrapPipe
  ],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports: [
    MaterialComponents,
    WordWrapPipe
  ]
})
export class SharedModule { }
