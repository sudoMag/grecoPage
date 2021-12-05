import { Setting } from "./setting";

export const ReferenceMarkerSetting = (props) => {

    return (
        <Setting 
            enabled={true}
            switchState={props.wordsMarking}
            TitleSetting="Marcar Referencias"
            description="marca las palabras que tengan una referencia"
            trigger={props.handleMarked}
        />
    );
}