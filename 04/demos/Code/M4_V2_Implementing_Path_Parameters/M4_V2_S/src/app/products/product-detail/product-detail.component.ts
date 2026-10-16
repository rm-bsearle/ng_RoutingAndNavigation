import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { BreadcrumbsComponent } from '../../shared-ui/breadcrumbs/breadcrumbs.component';
import { PieService } from '../../services/pie.service';
import { Category } from '../../models/pie';

@Component({
  selector: 'app-product-detail',
  imports: [SideMenuComponent, DetailCardComponent, BreadcrumbsComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {
  categoryId = input<Category>('All Pies');
  pieService = inject(PieService);

  categoryEffect = effect(() => {
    this.pieService.setSelectedCategory(this.categoryId());
  })
}
