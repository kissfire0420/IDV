/**
 * Datart
 *
 * Copyright 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ChartConfig } from 'app/types/ChartConfig';

const config: ChartConfig = {
  datas: [
    {
      label: 'column',
      key: 'column',
      type: 'group',
      options: {
        sortable: { backendSort: false },
      },
    },
    {
      label: 'row',
      key: 'row',
      type: 'group',
      options: {
        sortable: { backendSort: false },
      },
      drillable: false,
      drillContextMenuVisible: true,
    },
    {
      label: 'metrics',
      key: 'metrics',
      type: 'aggregate',
      actions: {
        NUMERIC: ['aggregate', 'alias', 'format', 'sortable'],
        STRING: ['aggregate', 'alias', 'format', 'sortable'],
      },
      options: {
        sortable: { backendSort: false },
      },
    },
    {
      label: 'filter',
      key: 'filter',
      type: 'filter',
    },
    {
      label: 'info',
      key: 'info',
      type: 'info',
    },
  ],
  styles: [
    {
      label: 'style.title',
      key: 'style',
      comType: 'group',
      rows: [
        {
          label: 'style.enableExpandRow',
          key: 'enableExpandRow',
          default: false,
          comType: 'checkbox',
        },
        {
          label: 'style.enableHoverHighlight',
          key: 'enableHoverHighlight',
          default: true,
          comType: 'checkbox',
        },
        {
          label: 'style.enableSelectedHighlight',
          key: 'enableSelectedHighlight',
          default: false,
          comType: 'checkbox',
        },
        {
          label: 'style.metricNameShowIn.label',
          key: 'metricNameShowIn',
          default: true,
          comType: 'radio',
          watcher: {
            deps: ['enableExpandRow'],
            action: props => {
              return {
                disabled: props.enableExpandRow,
              };
            },
          },
          options: {
            translateItemLabel: true,
            items: [
              {
                key: 'inCol',
                label: '@global@.style.metricNameShowIn.inCol',
                value: true,
              },
              {
                key: 'inRow',
                label: '@global@.style.metricNameShowIn.inRow',
                value: false,
              },
            ],
          },
        },
      ],
    },
    {
      label: 'style.tableHeaderStyle',
      key: 'tableHeaderStyle',
      comType: 'group',
      rows: [
        {
          label: 'style.font',
          key: 'font',
          comType: 'font',
          default: {
            fontFamily: 'PingFangSC',
            fontSize: 12,
            fontWeight: 'normal',
          },
          options: {
            fontFamilies: [
              'Roboto',
              'PingFangSC',
              'BlinkMacSystemFont',
              'Microsoft YaHei',
              'Arial',
              'sans-serif',
            ],
            showFontStyle: false,
            showFontColor: false,
          },
        },
        {
          label: 'style.align',
          key: 'align',
          default: 'right',
          comType: 'fontAlignment',
        },
        {
          label: 'style.colHeight',
          key: 'height',
          default: 30,
          options: {
            min: 12,
          },
          comType: 'inputNumber',
        },
        {
          label: 'style.rowWidth',
          key: 'width',
          options: {
            min: 0,
          },
          comType: 'inputNumber',
        },
      ],
    },
    {
      label: 'style.tableBodyStyle',
      key: 'tableBodyStyle',
      comType: 'group',
      rows: [
        {
          label: 'style.font',
          key: 'font',
          comType: 'font',
          default: {
            fontFamily: 'PingFangSC',
            fontSize: 12,
            fontWeight: 'normal',
          },
          options: {
            fontFamilies: [
              'Roboto',
              'PingFangSC',
              'BlinkMacSystemFont',
              'Microsoft YaHei',
              'Arial',
              'sans-serif',
            ],
            showFontStyle: false,
            showFontColor: false,
          },
        },
        {
          label: 'style.align',
          key: 'tableAlign',
          default: 'left',
          comType: 'fontAlignment',
        },
        {
          label: 'style.height',
          key: 'height',
          default: 30,
          options: {
            min: 12,
          },
          comType: 'inputNumber',
        },
        {
          label: 'style.width',
          key: 'width',
          options: {
            min: 0,
          },
          comType: 'inputNumber',
        },
      ],
    },
    {
      label: 'theme.title',
      key: 'theme',
      comType: 'group',
      rows: [
        {
          label: 'theme.themeType',
          key: 'themeType',
          comType: 'pivotSheetTheme',
        },
      ],
    },
  ],
  settings: [
    {
      label: 'viz.palette.setting.paging.title',
      key: 'paging',
      comType: 'group',
      rows: [
        {
          label: 'viz.palette.setting.paging.pageSize',
          key: 'pageSize',
          default: 1000,
          comType: 'inputNumber',
          options: {
            needRefresh: true,
            step: 1,
            min: 0,
          },
        },
      ],
    },
    {
      label: 'summary.summaryAggregation',
      key: 'summaryAggregation',
      comType: 'group',
      rows: [
        {
          label: 'summary.aggregation',
          key: 'aggregation',
          default: 'SUM',
          comType: 'select',
          options: {
            translateItemLabel: true,
            items: [
              { label: '@global@.summary.aggregations.sum', value: 'SUM' },
              { label: '@global@.summary.aggregations.min', value: 'MIN' },
              { label: '@global@.summary.aggregations.max', value: 'MAX' },
              { label: '@global@.summary.aggregations.avg', value: 'AVG' },
            ],
          },
        },
      ],
    },
    {
      label: 'summary.calcSubAggregation',
      key: 'calcSubAggregation',
      comType: 'group',
      rows: [
        {
          label: 'summary.aggregation',
          key: 'aggregation',
          default: 'SUM',
          comType: 'select',
          options: {
            translateItemLabel: true,
            items: [
              { label: '@global@.summary.aggregations.sum', value: 'SUM' },
              { label: '@global@.summary.aggregations.min', value: 'MIN' },
              { label: '@global@.summary.aggregations.max', value: 'MAX' },
              { label: '@global@.summary.aggregations.avg', value: 'AVG' },
            ],
          },
        },
      ],
    },
    {
      label: 'summary.rowSummary',
      key: 'rowSummary',
      comType: 'group',
      rows: [
        {
          label: 'summary.enableTotal',
          key: 'enableTotal',
          default: false,
          comType: 'checkbox',
        },
        {
          label: 'summary.totalPosition',
          key: 'totalPosition',
          default: true,
          comType: 'select',
          options: {
            translateItemLabel: true,
            items: [
              { label: '@global@.summary.totalPositionType.top', value: true },
              {
                label: '@global@.summary.totalPositionType.bottom',
                value: false,
              },
            ],
          },
        },
        {
          label: 'summary.enableSubTotal',
          key: 'enableSubTotal',
          default: false,
          comType: 'checkbox',
        },
        {
          label: 'summary.subTotalPosition',
          key: 'subTotalPosition',
          default: true,
          comType: 'select',
          options: {
            translateItemLabel: true,
            items: [
              { label: '@global@.summary.totalPositionType.top', value: true },
              {
                label: '@global@.summary.totalPositionType.bottom',
                value: false,
              },
            ],
          },
        },
      ],
    },
    {
      label: 'summary.colSummary',
      key: 'colSummary',
      comType: 'group',
      rows: [
        {
          label: 'summary.enableTotal',
          key: 'enableTotal',
          default: false,
          comType: 'checkbox',
        },
        {
          label: 'summary.totalPosition',
          key: 'totalPosition',
          default: true,
          comType: 'select',
          options: {
            translateItemLabel: true,
            items: [
              { label: '@global@.summary.totalPositionType.left', value: true },
              {
                label: '@global@.summary.totalPositionType.right',
                value: false,
              },
            ],
          },
        },
        {
          label: 'summary.enableSubTotal',
          key: 'enableSubTotal',
          default: false,
          comType: 'checkbox',
        },
        {
          label: 'summary.subTotalPosition',
          key: 'subTotalPosition',
          default: true,
          comType: 'select',
          options: {
            translateItemLabel: true,
            items: [
              { label: '@global@.summary.totalPositionType.left', value: true },
              {
                label: '@global@.summary.totalPositionType.right',
                value: false,
              },
            ],
          },
        },
      ],
    },
  ],
  interactions: [
    {
      label: 'drillThrough.title',
      key: 'drillThrough',
      comType: 'checkboxModal',
      default: false,
      options: { modalSize: 'middle' },
      rows: [
        {
          label: 'drillThrough.title',
          key: 'setting',
          comType: 'interaction.drillThrough',
        },
      ],
    },
    {
      label: 'viewDetail.title',
      key: 'viewDetail',
      comType: 'checkboxModal',
      default: false,
      options: { modalSize: 'middle' },
      rows: [
        {
          label: 'viewDetail.title',
          key: 'setting',
          comType: 'interaction.viewDetail',
        },
      ],
    },
  ],
  i18ns: [
    {
      lang: 'zh-CN',
      translation: {
        style: {
          title: '????????????',
          enableExpandRow: '???????????????',
          enableHoverHighlight: '??????????????????',
          enableSelectedHighlight: '??????????????????',
          enableAdjustRowHeight: '??????????????????',
          enableAdjustColumnWidth: '??????????????????',
          metricNameShowIn: {
            label: '??????????????????',
            inCol: '?????????',
            inRow: '?????????',
          },
          tableSize: '????????????',
          tableHeaderStyle: '????????????',
          tableBodyStyle: '????????????',
          bgColor: '????????????',
          font: '??????',
          align: '????????????',
          colHeight: '???????????????',
          rowWidth: '???????????????',
          height: '???????????????',
          width: '???????????????',
        },
        theme: {
          title: '??????',
          themeType: '????????????',
          colHeaderFontColor: '?????????????????????',
          evenBgColor: '?????????????????????',
          oddBgColor: '?????????????????????',
          cellBgColorHover: '???????????????????????????',
          colHeaderBgColorHover: '???????????????????????????',
          colHeaderBgColor: '?????????????????????',
          prepareSelectMaskBgColor: '?????????????????????',
          linkTextColor: '?????????????????????',
          resizeAreaColor: '??????????????????',
          cellBorderColor: '?????????????????????',
          colHeaderBorderColor: '?????????????????????',
          verticalSplitLineColor: '?????????????????????',
          horizontalSplitLineColor: '?????????????????????',
          cellFontColor: '?????????????????????',
          rowHeaderFontColor: '?????????????????????',
          type: {
            default: '??????',
            gray: '?????????',
            colorful: '?????????',
          },
        },
        summary: {
          title: '????????????',
          rowSummary: '?????????',
          colSummary: '?????????',
          enableTotal: '????????????',
          enableSubTotal: '????????????',
          totalPosition: '????????????',
          totalPositionTop: '??????',
          totalPositionBottom: '??????',
          subTotalPosition: '????????????',
          subTotalPositionTop: '??????',
          subTotalPositionBottom: '??????',
          aggregateFields: '?????????',
          summaryAggregation: '????????????',
          calcSubAggregation: '????????????',
          aggregation: '????????????',
          aggregations: {
            sum: '??????',
            min: '?????????',
            max: '?????????',
            avg: '?????????',
          },
          totalPositionType: {
            top: '??????',
            bottom: '??????',
            left: '??????',
            right: '??????',
          },
          subTotal: '??????',
          total: '??????',
          number: '??????',
        },
      },
    },
    {
      lang: 'en-US',
      translation: {
        style: {
          title: 'Table Style',
          enableExpandRow: 'Fold Row',
          enableHoverHighlight: 'Enable Hover Highlight',
          enableSelectedHighlight: 'Enable Selected Highlight',
          enableAdjustRowHeight: 'Enable Adjust Row Height',
          enableAdjustColumnWidth: 'Enable Adjust Column Width',
          metricNameShowIn: {
            label: 'Metric Name Position',
            inCol: 'Col Header',
            inRow: 'Row Header',
          },
          tableSize: 'Table Size',
          tableHeaderStyle: 'Table Header Style',
          tableBodyStyle: 'Table Body Style',
          bgColor: 'Background Color',
          font: 'Font',
          align: 'Align',
          colHeight: 'Col Header Height',
          rowWidth: 'Row Header Width',
          height: 'Height',
          width: 'Width',
        },
        theme: {
          title: 'Theme',
          themeType: 'Theme Type',
          colHeaderFontColor: 'Col Header Font Color',
          evenBgColor: 'Even Row Background Color',
          oddBgColor: 'Odd Row Background Color',
          cellBgColorHover: 'Selected Cell Background Color',
          colHeaderBgColorHover: 'Selected Col Header Background Color',
          colHeaderBgColor: 'Col Header Background Color',
          prepareSelectMaskBgColor: 'Prepare Select Mask Color',
          linkTextColor: 'Link Text Color',
          resizeAreaColor: 'Resize Area Color',
          cellBorderColor: 'Cell Border Color',
          colHeaderBorderColor: 'Col Header Border Color',
          verticalSplitLineColor: 'Vertical Split Line Color',
          horizontalSplitLineColor: 'Horizontal Split Line Color',
          cellFontColor: 'Cell Font Color',
          rowHeaderFontColor: 'Row Header Font Color',
          type: {
            default: 'Default',
            gray: 'Gray',
            colorful: 'Colorful',
          },
        },
        summary: {
          title: 'Summary',
          rowSummary: 'Row Total',
          colSummary: 'Column Total',
          enableTotal: 'Enable Total',
          totalPosition: 'Total Position',
          totalPositionTop: 'Top',
          totalPositionBottom: 'Bottom',
          enableSubTotal: 'Enable Sub Total',
          subTotalPosition: 'Sub Total Position',
          subTotalPositionTop: 'Top',
          subTotalPositionBottom: 'Bottom',
          aggregateFields: 'Summary Fields',
          summaryAggregation: 'Summary Aggregation',
          calcSubAggregation: 'Calc Sub Aggregation',
          aggregation: 'Aggregation Type',
          aggregations: {
            sum: 'Sum',
            min: 'Min',
            max: 'Max',
            avg: 'Avg',
          },
          totalPositionType: {
            top: 'Top',
            bottom: 'Bottom',
            left: 'Left',
            right: 'Right',
          },
          subTotal: 'Sub Total',
          total: 'Total',
          number: 'Metric',
        },
      },
    },
  ],
};

export default config;
