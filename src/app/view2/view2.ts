import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
import NorthwindService from '../service/Northwind-service';

@customElement('app-view2')
export default class View2 extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .grid {
      min-width: 600px;
      min-height: 300px;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  constructor() {
    super();
    this.northwindEmployees = this.northwindService.getData('Employees');
  }

  private northwindService: NorthwindService = new NorthwindService();

  @property()
  private northwindEmployees?: any[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <link rel='stylesheet' href='node_modules/@infragistics/igniteui-webcomponents-grids/grids/themes/light/material.css'>
      <igc-grid .data="${this.northwindEmployees}" primary-key="employeeID" display-density="cosy" allow-filtering="true" filter-mode="excelStyleFilter" auto-generate="false" class="ig-typography ig-scrollbar grid">
        <igc-column field="employeeID" data-type="number" header="employeeID" sortable="true" selectable="false"></igc-column>
        <igc-column field="lastName" data-type="string" header="lastName" sortable="true" selectable="false"></igc-column>
        <igc-column field="firstName" data-type="string" header="firstName" sortable="true" selectable="false"></igc-column>
        <igc-column field="title" data-type="string" header="title" sortable="true" selectable="false"></igc-column>
        <igc-column field="titleOfCourtesy" data-type="string" header="titleOfCourtesy" sortable="true" selectable="false"></igc-column>
        <igc-column field="birthDate" data-type="date" header="birthDate" sortable="true" selectable="false"></igc-column>
        <igc-column field="hireDate" data-type="date" header="hireDate" sortable="true" selectable="false"></igc-column>
        <igc-column field="address.street" data-type="string" header="address street" sortable="true" selectable="false"></igc-column>
        <igc-column field="address.city" data-type="string" header="address city" sortable="true" selectable="false"></igc-column>
        <igc-column field="address.region" data-type="string" header="address region" sortable="true" selectable="false"></igc-column>
        <igc-column field="address.postalCode" data-type="string" header="address postalCode" sortable="true" selectable="false"></igc-column>
        <igc-column field="address.country" data-type="string" header="address country" sortable="true" selectable="false"></igc-column>
        <igc-column field="address.phone" data-type="string" header="address phone" sortable="true" selectable="false"></igc-column>
        <igc-column field="managerID" data-type="number" header="managerID" sortable="true" selectable="false"></igc-column>
        <igc-column field="notes" data-type="string" header="notes" sortable="true" selectable="false"></igc-column>
        <igc-column field="avatarUrl" data-type="string" header="avatarUrl" sortable="true" selectable="false"></igc-column>
      </igc-grid>
    `;
  }
}
