import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { RouterModule } from '@angular/router';
import { LetModule } from '@rx-angular/template/let';
import { PushModule } from '@rx-angular/template/push';
import { UnpatchModule } from '@rx-angular/template/unpatch';
import { DirtyChecksModule } from '../../../shared/debug-helper/dirty-checks/index';
import { RenderCallbackComponent } from './render-callback.component';
import { RENDER_CALLBACK_ROUTES } from './render-callback.routes';

@NgModule({
  declarations: [RenderCallbackComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(RENDER_CALLBACK_ROUTES),
    MatProgressSpinnerModule,
    MatDividerModule,
    DirtyChecksModule,
    MatButtonModule,
    UnpatchModule,
    PushModule,
    LetModule,
  ],
})
export class RenderCallbackModule {}
