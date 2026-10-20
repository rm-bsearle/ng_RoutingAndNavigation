import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { RouterLink } from '@angular/router';
import { Category } from '../../models/pie';
import { DETAIL_ROUTE } from '../../app.routes';
import { WrapperComponent } from '../wrapper.component';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
  imports: [RouterLink, WrapperComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllProductsComponent {
  readonly pieService = inject(PieService);
  protected readonly DETAIL_ROUTE = DETAIL_ROUTE;
  pies = this.pieService.filteredPies;

  categoryId = input<Category>('All Pies');

  categoryEffect = effect(() => {
    this.pieService.setSelectedCategory(this.categoryId());
  });

}
