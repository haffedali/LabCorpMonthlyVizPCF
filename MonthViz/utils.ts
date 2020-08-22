import { IReturnData, ILineRechartsData, ILineRechartsDataNode, IReturnDataNode, IAccumulatedLineBuildMatrix } from './interfaces';
import * as moment from 'moment';

//Dummy Data Utils
function parseDueDateDummyData(obj: IReturnDataNode): number {
    const date: number = parseInt(obj.dueDate.slice(8))
    return date;
}

function accumulateLineChartDataDummyData(data: ILineRechartsData): ILineRechartsData {
    let accumulatedLineChartData: ILineRechartsData = {
        data: []
    };

    let accumulatedLineChartBuildMatrix: IAccumulatedLineBuildMatrix = {
    }

    data.data.forEach((x: ILineRechartsDataNode) => {
        if (!(x.name in accumulatedLineChartBuildMatrix)) {
            accumulatedLineChartBuildMatrix[x.name] = { orderDetails: {} };
            accumulatedLineChartBuildMatrix[x.name].orderDetails[x.order] = 0;
        }
        else if (!(x.order in accumulatedLineChartBuildMatrix[x.name].orderDetails)) {
            accumulatedLineChartBuildMatrix[x.name].orderDetails[x.order] = 0
        }
        else {
            accumulatedLineChartBuildMatrix[x.name].orderDetails[x.order] += 1
        }
    }
    )

    for (let x in accumulatedLineChartBuildMatrix) {
        let name = parseInt(x)
        let daysOrderDetails = accumulatedLineChartBuildMatrix[x]
        let lineChartNode: { [key: string]: any } = { name: name }
        for (let x in daysOrderDetails.orderDetails) {
            console.log(x)
            lineChartNode[x] = daysOrderDetails.orderDetails[x]
        }

        accumulatedLineChartData.data.push(lineChartNode)
    }
    return accumulatedLineChartData;
}

export const buildLineChartDataFromResponseDummyData = (data: IReturnData): ILineRechartsData => {
    let builtReturnData: ILineRechartsData =
        { data: [] }

    data.value.forEach((x: IReturnDataNode) => {
        let lineChartNode: ILineRechartsDataNode = {
            name: parseDueDateDummyData(x),
            order: x.invoice_details[0].productName
        }
        builtReturnData.data.push(lineChartNode)
    })

    builtReturnData = accumulateLineChartDataDummyData(builtReturnData)
    return builtReturnData;
}


export function buildMonthApiQuery(month: string) {
    let startDate = moment().month(month).startOf("month").format('YYYY-MM-DD');
    let endDate = moment().month(month).endOf("month").format('YYYY-MM-DD');
    let fetchXMLString = `<fetch top="100" >
    <entity name="new_appointmentorders" >
      <attribute name="new_duedate" />
      <attribute name="new_name" />
      <filter>
        <condition attribute="new_duedate" operator="on-or-after" value="${startDate}" />
      </filter>
      <filter>
        <condition attribute="new_duedate" operator="on-or-before" value="${endDate}" />
      </filter>
    </entity>
  </fetch>`

    fetchXMLString = "?fetchXml=" + encodeURIComponent(fetchXMLString);
    return (fetchXMLString)
}



//Live Data Utils
export const buildLineChartDataFromResponse = (data: any): ILineRechartsData => {
    let builtReturnData: ILineRechartsData =
        { data: [] }

    data.entities.forEach((x: any) => {
        let lineChartNode: ILineRechartsDataNode = {
            name: parseDueDate(x),
            order: x.new_name
        }
        builtReturnData.data.push(lineChartNode)
    })

    builtReturnData = accumulateLineChartDataDummyData(builtReturnData)
    return builtReturnData;
}

function accumulateLineChartData(data: ILineRechartsData): ILineRechartsData {
    let accumulatedLineChartData: ILineRechartsData = {
        data: []
    };

    let accumulatedLineChartBuildMatrix: IAccumulatedLineBuildMatrix = {
    }

    data.data.forEach((x: ILineRechartsDataNode) => {
        if (!(x.name in accumulatedLineChartBuildMatrix)) {
            accumulatedLineChartBuildMatrix[x.name] = { orderDetails: {} };
            accumulatedLineChartBuildMatrix[x.name].orderDetails[x.order] = 0;
        }
        else if (!(x.order in accumulatedLineChartBuildMatrix[x.name].orderDetails)) {
            accumulatedLineChartBuildMatrix[x.name].orderDetails[x.order] = 0
        }
        else {
            accumulatedLineChartBuildMatrix[x.name].orderDetails[x.order] += 1
        }
    }
    )

    for (let x in accumulatedLineChartBuildMatrix) {
        let name = parseInt(x)
        let daysOrderDetails = accumulatedLineChartBuildMatrix[x]
        let lineChartNode: { [key: string]: any } = { name: name }
        for (let x in daysOrderDetails.orderDetails) {
            console.log(x)
            lineChartNode[x] = daysOrderDetails.orderDetails[x]
        }

        accumulatedLineChartData.data.push(lineChartNode)
    }
    return accumulatedLineChartData;
}

function parseDueDate(obj: any): number {
    const dueDate = new Date(obj.new_duedate);
    const date = dueDate.getDate()
    return date
}