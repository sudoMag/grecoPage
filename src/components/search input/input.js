import { Component } from "react";
import { SearchList } from "./searchList";
import { 
    SugerencyText, 
    TextBox, 
    InputFrame, 
    BoxContainer 
} from './styles';


class SearchInput extends Component {
    state = {
        enterKeyActivated: false,
        focused: false,
        activeKeyHandlers: false,
        text: "",
        sugerencies: [],
        sugerencyShowed: "",
        selectedId: null
    }

    async handleInputValueToTheState (e) {
        let inputValue = e.target.value;
        let machingSugerencies = await this.props.searchMach(inputValue);
        if (inputValue.length === 0) {
            this.setState({
                enterKeyActivated: false,
                activeKeyHandlers: false,
                text: "",
                sugerencies: [],
                sugerencyShowed: "",
                selectedId: 0
            });
        } else if (machingSugerencies.length === 0) {
            this.setState({
                enterKeyActivated: true,
                activeKeyHandlers: false,
                text: inputValue,
                sugerencies: [],
                sugerencyShowed: "",
                selectedId: 0
            });
        } else if (machingSugerencies) {
            this.setState({
                enterKeyActivated: true,
                activeKeyHandlers: true,
                text: inputValue,
                sugerencies: machingSugerencies.slice(0, 5),
                sugerencyShowed: machingSugerencies[0]
            });
        }
        
    }

    addSugerencyToInput () {
        const $input = document.querySelector(InputFrame);
        let value = this.state.text + this.state.sugerencyShowed;
        $input.value = value;
        this.setState({
            activeKeyHandlers: false,
            text: value,
            sugerencies: [],
            sugerencyShowed: "",
            selectedId: null
        });
    }

    moveBetweenSugerencies (direction) {
        const moveToUpSugerency = this.state.selectedId + 1;
        const moveToDownSugerency = this.state.selectedId - 1;
        var maxIndex, minIndex;
        
        if (direction === "up") {
            maxIndex = 4;
            minIndex = 0;
        } else if (direction === "down") {
            maxIndex = 0;
            minIndex = 4;
        }
        if (this.state.selectedId === maxIndex) {
            this.setState({
                activeKeyHandlers: false,
                selectedId: null,
                sugerencyShowed: ""
            });
        } else if (this.state.selectedId === null) {
            this.setState({
                activeKeyHandlers: true,
                selectedId: minIndex,
                sugerencyShowed: this.state.sugerencies[minIndex]
            });
        } else {
            this.setState({
                selectedId: 
                direction === "up"? 
                    moveToUpSugerency : moveToDownSugerency,
                sugerencyShowed: 
                this.state.sugerencies[
                        direction === "up"? 
                            moveToUpSugerency : moveToDownSugerency
                    ]
            });
        }
    }



    handleSolicitude (solicitude) {
        this.props.search(solicitude);
    }

    handleKeyEvent (e) {
        let keyPressed = e.key;
        if (keyPressed === "ArrowRight" && this.state.activeKeyHandlers === true) {
            this.addSugerencyToInput(this);
        } else if (keyPressed === "ArrowDown") {
            this.moveBetweenSugerencies("up", this);
        } else if (keyPressed === "ArrowUp") {
            this.moveBetweenSugerencies("down", this);
        } else if (keyPressed === "Enter" && this.state.enterKeyActivated === true) {
            const solicitudeText = this.state.text;
            this.handleSolicitude(solicitudeText, this);
            const $input = document.querySelector(InputFrame);
            let value = "";
            $input.value = value;
            this.setState({
                activeKeyHandlers: false,
                text: "",
                sugerencies: [],
                sugerencyShowed: ""
            });
        }
    }

    handleFocusEvent (e) {
        e.preventDefault();
        if (!this.state.focused) {
            this.setState({
                focused: true
            });
        } else if (this.state.focused) {
            this.setState({
                focused: false
            });
        }
    }

    handleSugerencyClickEvent (index) {
        let TextToSearch = this.state.text + this.state.sugerencies[index];
        const $input = document.querySelector(InputFrame);
        let value = "";
        $input.value = value;
        this.setState({
            activeKeyHandlers: false,
            text: "",
            sugerencies: [],
            sugerencyShowed: ""
        });
        this.handleSolicitude(TextToSearch);
    }

    render() {
        return (
            <BoxContainer>
                <TextBox
                    isFocused={this.state.focused}
                >
                    <InputFrame
                        placeholder="Buscar"
                        searchMach={this.props.searchMach}
                        onChange={this.handleInputValueToTheState.bind(this)}
                        onKeyDown={this.handleKeyEvent.bind(this)}
                        onFocus={this.handleFocusEvent.bind(this)}
                        onBlur={this.handleFocusEvent.bind(this)}
                    />
                    <SugerencyText>
                        <div>{ this.state.text }</div>
                        { this.state.sugerencyShowed }
                    </SugerencyText>
                </TextBox>
                <SearchList
                    textToSearch={this.state.text}
                    sugerencySelected={"sug" + this.state.selectedId}
                    inputIsFocused={this.state.focused}
                    sugerencies={this.state.sugerencies}
                    clickEventHandler={this.handleSugerencyClickEvent.bind(this)}
                    data-testid="search-list"
                />
            </BoxContainer>
        );
    }
}

export default SearchInput;