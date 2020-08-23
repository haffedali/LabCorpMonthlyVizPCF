import * as React from 'react';
import {ITagContainer} from '../interfaces'
import { DefaultButton, Stack, IStackTokens} from 'office-ui-fabric-react';


const stackTokens: IStackTokens = {childrenGap: 40}

export const TagContainer: React.FC<ITagContainer> =(props) => {
    const colors = ["black","red", "blue", "green", "purple", "orange"];
    let count = 0;

    function handleTagRemove(event: any){
        props.handleTagRemove(event.target.textContent)
    }
    return(<Stack horizontal tokens={stackTokens}>
        {props.tags.map((x:string)=>{
            count++
            return <DefaultButton data={x} text={x} onClick={(event) => handleTagRemove(event)} style={{color: colors[count]}}/>
        })}
    </Stack>)
}