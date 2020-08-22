import * as React from 'react';
import {ITagContainer} from '../interfaces'
import { PrimaryButton, Stack, IStackTokens} from 'office-ui-fabric-react';


const stackTokens: IStackTokens = {childrenGap: 40}

export const TagContainer: React.FC<ITagContainer> =(props) => {
    function handleTagRemove(event: any){
        props.handleTagRemove(event.target.textContent)
    }
    return(<Stack horizontal tokens={stackTokens}>
        {props.tags.map((x:string)=>{
            return <PrimaryButton data={x} text={x} onClick={(event) => handleTagRemove(event)} />
        })}
    </Stack>)
}