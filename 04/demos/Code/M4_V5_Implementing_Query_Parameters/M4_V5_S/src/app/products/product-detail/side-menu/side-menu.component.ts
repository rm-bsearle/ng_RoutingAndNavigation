import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PieService } from '../../../services/pie.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, RouterLinkActive],
})
export class SideMenuComponent {
  protected readonly pieService = inject(PieService);
}
