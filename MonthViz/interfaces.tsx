
export interface ITagContainer {
  handleTagRemove: (arg:string) => void
  tags: string[];
}
export interface LineGraphInterface {
  labels: string[];
  datasets: LineData[];
}

export interface LineData {
  data: number[];
  label: string;
  borderColor: string;
  fill: boolean;
}

export interface GraphControlInterface {
  monthApiCall: (arg:any, arg2:any) => Promise<any>
}

export interface MonthOptionSetInterface {
  handleSetMonth: (arg:string) => void
}

export interface ITestOptionSet {
  handleSetTest: (arg: string) => void
  optionSet: any[] 
}

export interface ITagItem {
  name: string;
  handleToggle: (name: string) => void;
  handleRemove: (name: string) => void
}

export interface IDummyData {
  data: {
    [key: string]: IDummyDataMonth[];
  }
}

export interface IDummyDataMonth{ 
  name: number;
  total: number;
  blood: number;
  hemoglobin: number;
  corona: number
}


export interface ILineChartData {
  value: ILineRechartsDataNode[];
}

export interface IReturnDataNode {
  dueDate: string,
  name: string,
  invoice_details: [{[key:string]: string}]
}

export interface IReturnData {
  value: IReturnDataNode[];
}

export interface ILineRechartsData {
  data: ILineRechartsDataNode[];
}

export interface ILineRechartsDataNode {
  [key:string]: any;
}

export interface IAccumulatedLineBuildMatrix { 
  [key:number] : {
    orderDetails: {[key:string]: number}
  }
}

export interface IAccumulatedLineBuildMatrixNode {
  [key:string]: number
}




