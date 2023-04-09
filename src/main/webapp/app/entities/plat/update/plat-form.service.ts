import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IPlat, NewPlat } from '../plat.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IPlat for edit and NewPlatFormGroupInput for create.
 */
type PlatFormGroupInput = IPlat | PartialWithRequiredKeyOf<NewPlat>;

type PlatFormDefaults = Pick<NewPlat, 'id' | 'orders'>;

type PlatFormGroupContent = {
  id: FormControl<IPlat['id'] | NewPlat['id']>;
  name: FormControl<IPlat['name']>;
  price: FormControl<IPlat['price']>;
  quantity: FormControl<IPlat['quantity']>;
  restaurant: FormControl<IPlat['restaurant']>;
  orders: FormControl<IPlat['orders']>;
};

export type PlatFormGroup = FormGroup<PlatFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class PlatFormService {
  createPlatFormGroup(plat: PlatFormGroupInput = { id: null }): PlatFormGroup {
    const platRawValue = {
      ...this.getFormDefaults(),
      ...plat,
    };
    return new FormGroup<PlatFormGroupContent>({
      id: new FormControl(
        { value: platRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      name: new FormControl(platRawValue.name, {
        validators: [Validators.required, Validators.minLength(4)],
      }),
      price: new FormControl(platRawValue.price, {
        validators: [Validators.required, Validators.min(0)],
      }),
      quantity: new FormControl(platRawValue.quantity, {
        validators: [Validators.required, Validators.min(0)],
      }),
      restaurant: new FormControl(platRawValue.restaurant),
      orders: new FormControl(platRawValue.orders ?? []),
    });
  }

  getPlat(form: PlatFormGroup): IPlat | NewPlat {
    return form.getRawValue() as IPlat | NewPlat;
  }

  resetForm(form: PlatFormGroup, plat: PlatFormGroupInput): void {
    const platRawValue = { ...this.getFormDefaults(), ...plat };
    form.reset(
      {
        ...platRawValue,
        id: { value: platRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): PlatFormDefaults {
    return {
      id: null,
      orders: [],
    };
  }
}
