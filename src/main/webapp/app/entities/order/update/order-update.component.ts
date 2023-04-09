import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { OrderFormService, OrderFormGroup } from './order-form.service';
import { IOrder } from '../order.model';
import { OrderService } from '../service/order.service';
import { IPlat } from 'app/entities/plat/plat.model';
import { PlatService } from 'app/entities/plat/service/plat.service';
import { IClient } from 'app/entities/client/client.model';
import { ClientService } from 'app/entities/client/service/client.service';
import { IRestaurant } from 'app/entities/restaurant/restaurant.model';
import { RestaurantService } from 'app/entities/restaurant/service/restaurant.service';
import { ILivreur } from 'app/entities/livreur/livreur.model';
import { LivreurService } from 'app/entities/livreur/service/livreur.service';
import { OrderStatus } from 'app/entities/enumerations/order-status.model';

@Component({
  selector: 'jhi-order-update',
  templateUrl: './order-update.component.html',
})
export class OrderUpdateComponent implements OnInit {
  isSaving = false;
  order: IOrder | null = null;
  orderStatusValues = Object.keys(OrderStatus);

  platsSharedCollection: IPlat[] = [];
  clientsSharedCollection: IClient[] = [];
  restaurantsSharedCollection: IRestaurant[] = [];
  livreursSharedCollection: ILivreur[] = [];

  editForm: OrderFormGroup = this.orderFormService.createOrderFormGroup();

  constructor(
    protected orderService: OrderService,
    protected orderFormService: OrderFormService,
    protected platService: PlatService,
    protected clientService: ClientService,
    protected restaurantService: RestaurantService,
    protected livreurService: LivreurService,
    protected activatedRoute: ActivatedRoute
  ) {}

  comparePlat = (o1: IPlat | null, o2: IPlat | null): boolean => this.platService.comparePlat(o1, o2);

  compareClient = (o1: IClient | null, o2: IClient | null): boolean => this.clientService.compareClient(o1, o2);

  compareRestaurant = (o1: IRestaurant | null, o2: IRestaurant | null): boolean => this.restaurantService.compareRestaurant(o1, o2);

  compareLivreur = (o1: ILivreur | null, o2: ILivreur | null): boolean => this.livreurService.compareLivreur(o1, o2);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ order }) => {
      this.order = order;
      if (order) {
        this.updateForm(order);
      }

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const order = this.orderFormService.getOrder(this.editForm);
    if (order.id !== null) {
      this.subscribeToSaveResponse(this.orderService.update(order));
    } else {
      this.subscribeToSaveResponse(this.orderService.create(order));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IOrder>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(order: IOrder): void {
    this.order = order;
    this.orderFormService.resetForm(this.editForm, order);

    this.platsSharedCollection = this.platService.addPlatToCollectionIfMissing<IPlat>(this.platsSharedCollection, ...(order.plats ?? []));
    this.clientsSharedCollection = this.clientService.addClientToCollectionIfMissing<IClient>(this.clientsSharedCollection, order.client);
    this.restaurantsSharedCollection = this.restaurantService.addRestaurantToCollectionIfMissing<IRestaurant>(
      this.restaurantsSharedCollection,
      order.restaurant
    );
    this.livreursSharedCollection = this.livreurService.addLivreurToCollectionIfMissing<ILivreur>(
      this.livreursSharedCollection,
      order.livreur
    );
  }

  protected loadRelationshipsOptions(): void {
    this.platService
      .query()
      .pipe(map((res: HttpResponse<IPlat[]>) => res.body ?? []))
      .pipe(map((plats: IPlat[]) => this.platService.addPlatToCollectionIfMissing<IPlat>(plats, ...(this.order?.plats ?? []))))
      .subscribe((plats: IPlat[]) => (this.platsSharedCollection = plats));

    this.clientService
      .query()
      .pipe(map((res: HttpResponse<IClient[]>) => res.body ?? []))
      .pipe(map((clients: IClient[]) => this.clientService.addClientToCollectionIfMissing<IClient>(clients, this.order?.client)))
      .subscribe((clients: IClient[]) => (this.clientsSharedCollection = clients));

    this.restaurantService
      .query()
      .pipe(map((res: HttpResponse<IRestaurant[]>) => res.body ?? []))
      .pipe(
        map((restaurants: IRestaurant[]) =>
          this.restaurantService.addRestaurantToCollectionIfMissing<IRestaurant>(restaurants, this.order?.restaurant)
        )
      )
      .subscribe((restaurants: IRestaurant[]) => (this.restaurantsSharedCollection = restaurants));

    this.livreurService
      .query()
      .pipe(map((res: HttpResponse<ILivreur[]>) => res.body ?? []))
      .pipe(map((livreurs: ILivreur[]) => this.livreurService.addLivreurToCollectionIfMissing<ILivreur>(livreurs, this.order?.livreur)))
      .subscribe((livreurs: ILivreur[]) => (this.livreursSharedCollection = livreurs));
  }
}
