import * as React from "react";
import {
  ComboBox,
  IComboBox,
  IComboBoxOption,
  SelectableOptionMenuItemType,
} from "office-ui-fabric-react/lib/index";
import { MonthOptionSetInterface } from "../interfaces";

const comboBoxBasicOptions: IComboBoxOption[] = [
  {
    key: "Header1",
    text: "View by Month",
    itemType: SelectableOptionMenuItemType.Header,
  },
  { key: "Jan", text: "January" },
  { key: "Feb", text: "Febuary" },
  { key: "Mar", text: "March" },
  { key: "Apr", text: "April" },
  { key: "May", text: "May" },
  { key: "Jun", text: "June" },
  { key: "Jul", text: "July" },
  { key: "Aug", text: "August" },
  { key: "Sep", text: "September" },
  { key: "Oct", text: "October" },
  { key: "Nov", text: "November" },
  { key: "Dec", text: "December" },
];


export const MonthOptionSet: React.FC<MonthOptionSetInterface> = (props) => {
  const comboBoxRef = React.useRef<IComboBox>(null);
  
  
  function handleRefChange(event: React.FormEvent<IComboBox>) {
    let monthChoice: string;
    if (comboBoxRef.current?.selectedOptions[0].text !== undefined && typeof comboBoxRef.current?.selectedOptions[0].text !== "number"){
      monthChoice = comboBoxRef.current?.selectedOptions[0].text;
      console.log(monthChoice)
      props.handleSetMonth(monthChoice)
    }
  }

  return (
    <div>
      <ComboBox
        componentRef={comboBoxRef}
        defaultSelectedKey={"Jan"}
        label="Select Month"
        allowFreeform
        autoComplete="on"
        options={comboBoxBasicOptions}
        onChange={(event) => handleRefChange(event)}
      />
    </div>
  );
};
