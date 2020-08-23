import * as React from "react";
import { GraphControlInterface, ILineRechartsData } from "../interfaces";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { MonthOptionSet } from "./MonthOptionSet";
import { TagOptionSet } from "./TestOptionSet";
import { TagContainer } from "./TagContainer";
import builtData from "../dummData";

export const GraphControl: React.FC<GraphControlInterface> = (props) => {
  const [activeTags, setActiveTags] = React.useState<string[]>([]);
  const [activeMonth, setActiveMonth] = React.useState<string>("January");
  const [monthData, setMonthData] = React.useState(
    builtData.jan.data
  );
  const [tagOptionSet, setTagOptionSet] = React.useState<string[]>([])
  //Not currently used
  // const [activeMonthQuery, setActiveMonthQuery] = React.useState<string>("");

  React.useEffect(()=>{
    if (activeMonth === "January"){
      setMonthData(builtData.jan.data)
    }else{
      setMonthData(builtData.feb.data)
    }
  },[activeMonth])

  function handleSetTest(testChoice: string) {
    const newActiveTags = [...activeTags];
    if (!activeTags.includes(testChoice)) {
      newActiveTags.push(testChoice);
      setActiveTags(newActiveTags);
    }
  }

  function handleTagRemove(testChoice: string) {
    const newActiveTags = activeTags.filter((x: string) => x !== testChoice);
    setActiveTags(newActiveTags);
  }

  function handleSetMonth(monthChoice: string) {
    setActiveMonth(monthChoice)
  }
  
  const colors = ["black","red", "blue", "green", "purple", "orange"];
  let count = 0;

  return (
    <div className="graph-control-container">
      <div className="option-set-container">
        <div className="month-option-set">
          <MonthOptionSet handleSetMonth={handleSetMonth} />
        </div>
        <div className="test-option-set">
          <div className="tag-option-set">
            <TagOptionSet optionSet={tagOptionSet} handleSetTest={handleSetTest} />
          </div>
        </div>
      </div>
      <div className="tag-container">
        <TagContainer handleTagRemove={handleTagRemove} tags={activeTags} />
      </div>
      <div className="graph-container">
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={monthData}>
            {activeTags.map((x: string) => {
              count++;
              return (
                <Line type="monotone" dataKey={x} stroke={colors[count]} />
              );
            })}
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
