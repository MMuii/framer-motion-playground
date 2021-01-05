import React from "react"
import Guide from '../../components/Guide';
import CodeRenderer from '../../components/CodeRenderer';
import { data } from '../../tutorials-data/switch-button';
import FullPageContainer from '../../components/FullPageContainer';

const SwitchButtonTutorial = (props) => (
    <FullPageContainer className="tutorial">
        <Guide url={props.location.href} identifier="dw1d12ckec1cda219kc" title="Switch button tutorial">
            {data.content()}
        </Guide>
        <div className="code__wrapper">
            <CodeRenderer files={data.files} />
        </div>
    </FullPageContainer>
)

export default SwitchButtonTutorial
