import {Fragment} from "react";
import "./home.styles.css";

interface Props{
    bgcol: string,
    data: {pId: string, pName: string, pDesc: string}
}

const Tooltip = ({bgcol, data}: Props) => {

    return(
        <Fragment>
            <div className="tooltipWrapper" id={data.pId} style={{backgroundColor: bgcol}}>
                <span className="tooltipHeader">{data.pName}</span><br/>
                <span className="tooltipText">{data.pDesc}</span>
            </div>
        </Fragment>
    )
}

export default Tooltip