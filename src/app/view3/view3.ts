import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IgcCategoryChartModule } from '@infragistics/igniteui-webcomponents-charts';
import { ModuleManager } from '@infragistics/igniteui-webcomponents-core';
import FinancialService from '../service/Financial-service';

ModuleManager.register(IgcCategoryChartModule);

@customElement('app-view3')
export default class View3 extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .category-chart {
      min-width: 400px;
      min-height: 300px;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  constructor() {
    super();
    this.financialBoxOfficeRevenue = this.financialService.getData('BoxOfficeRevenue');
  }

  private financialService: FinancialService = new FinancialService();

  @property()
  private financialBoxOfficeRevenue?: any[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-category-chart .dataSource="${this.financialBoxOfficeRevenue}" computed-plot-area-margin-mode="series" class="category-chart"></igc-category-chart>
    `;
  }
}
