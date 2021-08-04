import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetService } from '../../services/budget.service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfirmComponent } from 'src/app/shared/confirm/confirm.component';
import { ConfirmButton } from 'src/app/shared/interfaces/confirm-button';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {

  modalRef!: BsModalRef;
  message: string = '';
  budgets?: any[];

  bottons = ['Bien', 'Mal', 'Regular'];

  constructor(
    private _formBld: FormBuilder,
    private _budgetsSvc: BudgetService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.initialize();
  }

  async initialize() {
        
    try {
      
      this.budgets = await this._budgetsSvc.all().toPromise();
      console.log('despues');
      
    } catch (error) {
      console.log(error);
    }
  }

  goTo(budget: any): void {
    this._router.navigate(['/budgets', budget.id])
  }

  async delete(id: number) {

    try {
      const response = await this._budgetsSvc.delete(id).toPromise();

      if (response) {
        this.initialize();
      }

      this.modalRef.hide();
    } catch (error) {
      console.error("Deleting failed");
    }

  }

  openModal(id: number) {
    this.modalRef = this._modalService.show(ConfirmComponent, {
      initialState: {
        title: 'Are you sure?',
        description: 'This will delete the budget ' + id + ' '
      }
    });
    this.modalRef.content.text = 'Desea eliminar el presupuesto con id ' + id + '?';
    const buttons: ConfirmButton[] = [{
      title: 'Cancelar'
    }, {
      title: 'Borrar',
      color: 'danger',
      handler: () => {
        this.delete(id);
      }
    }]
    this.modalRef.content.buttons = buttons;
  }


}