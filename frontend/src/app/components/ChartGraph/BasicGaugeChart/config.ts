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
      label: 'metrics',
      key: 'metrics',
      required: true,
      type: 'aggregate',
      limit: 1,
    },
    {
      label: 'filter',
      key: 'filter',
      type: 'filter',
    },
  ],
  styles: [
    {
      label: 'gauge.title',
      key: 'gauge',
      comType: 'group',
      rows: [
        {
          label: 'gauge.max',
          key: 'max',
          default: 100,
          comType: 'inputNumber',
        },
        {
          label: 'gauge.prefix',
          key: 'prefix',
          default: '',
          comType: 'input',
        },
        {
          label: 'gauge.suffix',
          key: 'suffix',
          default: '%',
          comType: 'input',
        },
        {
          label: 'gauge.radius',
          key: 'radius',
          default: '75%',
          comType: 'marginWidth',
        },
        {
          label: 'common.splitNumber',
          key: 'splitNumber',
          default: 10,
          comType: 'inputNumber',
        },
        {
          label: 'gauge.startAngle',
          key: 'startAngle',
          default: 225,
          comType: 'inputNumber',
        },
        {
          label: 'gauge.endAngle',
          key: 'endAngle',
          default: -45,
          comType: 'inputNumber',
        },
      ],
    },
    {
      label: 'label.title',
      key: 'label',
      comType: 'group',
      rows: [
        {
          label: 'label.showLabel',
          key: 'showLabel',
          default: true,
          comType: 'checkbox',
        },
        {
          label: 'viz.palette.style.font',
          key: 'font',
          comType: 'font',
          default: {
            fontFamily: 'PingFang SC',
            fontSize: '12',
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: '#495057',
          },
        },
        {
          label: 'common.detailOffsetLeft',
          key: 'detailOffsetLeft',
          default: '0%',
          comType: 'marginWidth',
        },
        {
          label: 'common.detailOffsetTop',
          key: 'detailOffsetTop',
          default: '-40%',
          comType: 'marginWidth',
        },
      ],
    },
    {
      label: 'data.title',
      key: 'data',
      comType: 'group',
      rows: [
        {
          label: 'data.showData',
          key: 'showData',
          default: true,
          comType: 'checkbox',
        },
        {
          label: 'viz.palette.style.font',
          key: 'font',
          comType: 'font',
          default: {
            fontFamily: 'PingFang SC',
            fontSize: '12',
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: '#495057',
          },
        },
        {
          label: 'common.detailOffsetLeft',
          key: 'detailOffsetLeft',
          default: '0%',
          comType: 'marginWidth',
        },
        {
          label: 'common.detailOffsetTop',
          key: 'detailOffsetTop',
          default: '40%',
          comType: 'marginWidth',
        },
      ],
    },
    {
      label: 'pointer.title',
      key: 'pointer',
      comType: 'group',
      rows: [
        {
          label: 'pointer.showPointer',
          key: 'showPointer',
          default: true,
          comType: 'checkbox',
        },
        {
          label: 'pointer.customPointerColor',
          key: 'customPointerColor',
          default: true,
          comType: 'checkbox',
        },
        {
          label: 'pointer.pointerColor',
          key: 'pointerColor',
          default: '#509af2',
          comType: 'fontColor',
        },
        {
          label: 'pointer.pointerLength',
          key: 'pointerLength',
          default: '80%',
          comType: 'marginWidth',
        },
        {
          label: 'pointer.pointerWidth',
          key: 'pointerWidth',
          default: 8,
          comType: 'inputNumber',
        },
        {
          label: 'pointer.lineStyle',
          key: 'lineStyle',
          comType: 'line',
          default: {
            type: 'solid',
            width: 0,
            color: '#D9D9D9',
          },
        },
      ],
    },
    {
      label: 'axis.title',
      key: 'axis',
      comType: 'group',
      rows: [
        {
          label: 'axis.axisLineSize',
          key: 'axisLineSize',
          default: 30,
          comType: 'inputNumber',
        },
        {
          label: 'axis.axisLineColor',
          key: 'axisLineColor',
          default: '#ddd',
          comType: 'fontColor',
        },
        {
          label: 'axis.axisRoundCap',
          key: 'axisRoundCap',
          default: true,
          comType: 'checkbox',
        },
      ],
    },
    {
      label: 'axisTick.title',
      key: 'axisTick',
      comType: 'group',
      rows: [
        {
          label: 'axisTick.showAxisTick',
          key: 'showAxisTick',
          default: true,
          comType: 'checkbox',
        },
        {
          label: 'common.lineStyle',
          key: 'lineStyle',
          comType: 'line',
          default: {
            type: 'solid',
            width: 1,
            color: '#63677A',
          },
        },
        {
          label: 'common.distance',
          key: 'distance',
          default: 10,
          comType: 'inputNumber',
        },
        {
          label: 'common.splitNumber',
          key: 'splitNumber',
          default: 5,
          comType: 'inputNumber',
        },
      ],
    },
    {
      label: 'axisLabel.title',
      key: 'axisLabel',
      comType: 'group',
      rows: [
        {
          label: 'axisLabel.showAxisLabel',
          key: 'showAxisLabel',
          default: true,
          comType: 'checkbox',
        },
        {
          label: 'viz.palette.style.font',
          key: 'font',
          comType: 'font',
          default: {
            fontFamily: 'PingFang SC',
            fontSize: '12',
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: '#495057',
          },
        },
        {
          label: 'common.distance',
          key: 'distance',
          default: 35,
          comType: 'inputNumber',
        },
      ],
    },
    {
      label: 'splitLine.title',
      key: 'splitLine',
      comType: 'group',
      rows: [
        {
          label: 'splitLine.showSplitLine',
          key: 'showSplitLine',
          default: true,
          comType: 'checkbox',
        },
        {
          label: 'splitLine.splitLineLength',
          key: 'splitLineLength',
          default: 10,
          comType: 'inputNumber',
        },
        {
          label: 'common.distance',
          key: 'distance',
          default: 10,
          comType: 'inputNumber',
        },
        {
          label: 'common.lineStyle',
          key: 'lineStyle',
          comType: 'line',
          default: {
            type: 'solid',
            width: 3,
            color: '#63677A',
          },
        },
      ],
    },
    {
      label: 'progress.title',
      key: 'progress',
      comType: 'group',
      rows: [
        {
          label: 'progress.showProgress',
          key: 'showProgress',
          default: true,
          comType: 'checkbox',
        },
        {
          label: 'progress.roundCap',
          key: 'roundCap',
          default: true,
          comType: 'checkbox',
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
        common: {
          detailOffsetLeft: '????????????',
          detailOffsetTop: '????????????',
          distance: '????????????',
          lineStyle: '??????',
          splitNumber: '????????????',
        },
        gauge: {
          title: '?????????',
          max: '?????????',
          prefix: '??????',
          suffix: '??????',
          radius: '??????',
          startAngle: '????????????',
          endAngle: '????????????',
        },
        label: {
          title: '??????',
          showLabel: '????????????',
        },
        data: {
          title: '??????',
          showData: '????????????',
        },
        pointer: {
          title: '??????',
          showPointer: '????????????',
          customPointerColor: '??????????????????',
          pointerColor: '??????',
          pointerLength: '??????',
          pointerWidth: '??????',
          lineStyle: '??????',
        },
        axis: {
          title: '???',
          axisLineSize: '??????',
          axisLineColor: '??????',
          axisRoundCap: '??????????????????',
        },
        axisTick: {
          title: '??????',
          showAxisTick: '????????????',
        },
        axisLabel: {
          title: '??????',
          showAxisLabel: '????????????',
        },
        progress: {
          title: '?????????',
          showProgress: '???????????????',
          roundCap: '??????????????????',
        },
        splitLine: {
          title: '?????????',
          showSplitLine: '???????????????',
          splitLineLength: '??????',
        },
      },
    },
    {
      lang: 'en-US',
      translation: {
        common: {
          detailOffsetLeft: 'Offset Left',
          detailOffsetTop: 'Offset Top',
          distance: 'Distance',
          lineStyle: 'Line Style',
          splitNumber: 'Split Number',
        },
        gauge: {
          title: 'Gauge',
          max: 'Max',
          prefix: 'Prefix',
          suffix: 'Suffix',
          radius: 'Radius',
          startAngle: 'Start Angle',
          endAngle: 'End Angle',
        },
        label: {
          title: 'Label',
          showLabel: 'Show Label',
        },
        data: {
          title: 'Data',
          showData: 'Show Data',
        },
        pointer: {
          title: 'Pointer',
          showPointer: 'Show Pointer',
          customPointerColor: 'Show Customize Pointer Color',
          pointerColor: 'Pointer Color',
          pointerLength: 'Pointer Length',
          pointerWidth: 'Pointer Width',
          lineStyle: 'Line Style',
        },
        axis: {
          title: 'Axis',
          axisLineSize: 'Axis Line Size',
          axisLineColor: 'Axis Line Color',
          axisRoundCap: 'Axis Round Cap',
        },
        axisTick: {
          title: 'Axis Tick',
          showAxisTick: 'Show Axis Tick',
        },
        axisLabel: {
          title: 'Axis Label',
          showAxisLabel: 'Show Axis Label',
        },
        progress: {
          title: 'Progress',
          showProgress: 'Show Progress',
          roundCap: 'Round Cap',
        },
        splitLine: {
          title: 'Split Line',
          showSplitLine: 'Show Split Line',
          splitLineLength: 'Split Line Length',
        },
      },
    },
  ],
};

export default config;
