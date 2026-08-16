export interface ICVChartData {
  cvChartData: ICVChartDataData;
  yAxisValues: ICVChartDataYAxisValue[];
  xAxisValues: ICVChartDataXAxisValue[];
  yearTicks: string[];
}

export interface ICVChartDataData {
  companies: ICVChartDataCompany[];
  languages: ICVChartDataLanguage[];
}

export interface ICVChartDataCompany {
  name: string;
  span: [string, string | typeof Infinity];
}

export interface ICVChartDataLanguage {
  name: string;
  span: [string, string | typeof Infinity];
  fill: string;
  type: 'primary' | 'secondary' | 'personal';
}

export interface ICVChartDataYAxisValue {
  name: string;
  pos: string;
}

export interface ICVChartDataXAxisValue {
  name: string;
  span: [string, string | typeof Infinity];
}
