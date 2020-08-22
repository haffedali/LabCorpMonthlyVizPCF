import * as React from "react";
import {
  ComboBox,
  IComboBox,
  IComboBoxOption,
  SelectableOptionMenuItemType,
} from "office-ui-fabric-react/lib/index";
import {realData} from '../dummData';
import { ITestOptionSet } from "../interfaces";

function buildComboBoxBasicOptions(): IComboBoxOption[] {
  let basicOptions: IComboBoxOption[]=[
    {
      key: "Header1",
      text: "Available Tests",
      itemType: SelectableOptionMenuItemType.Header,
    },
  ]
  let key = 0;
  let basicOptionSetValues:string[] = [];

  realData.value.forEach((x: any) =>{
    let productName = x.invoice_details[0].productName
    if (!basicOptionSetValues.includes(productName)){
      basicOptionSetValues.push(productName)
    }
  })


  basicOptionSetValues.forEach((value: string)=>{
    let comboBoxPayload = {key: key, text:value}
    basicOptions.push(comboBoxPayload);
    key++
  })
  
  return basicOptions;
}


export const TagOptionSet: React.FC<ITestOptionSet> = (props) => {
  const comboBoxOptionSet = buildComboBoxBasicOptions();
  const comboBoxRef = React.useRef<IComboBox>(null);
  const onOpenClick = React.useCallback(
    () => comboBoxRef.current?.focus(true),
    []
  );

  function handleOptionClick(){
    if (comboBoxRef.current?.selectedOptions[0].key !== undefined){
      let testOption = comboBoxRef.current?.selectedOptions[0].text;
      console.log(testOption)
      props.handleSetTest(testOption);
    }
  }

  return (
    <div>
      <ComboBox
        componentRef={comboBoxRef}
        defaultSelectedKey="0"
        label="Select Tag"
        allowFreeform
        autoComplete="on"
        options={comboBoxOptionSet}
        onChange={()=> handleOptionClick()}
      />
    </div>
  );
};
