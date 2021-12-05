import { useState } from "react";
import styled from "styled-components";
import hideIcon from "./icons/hide icon.svg"
import showIcon from "./icons/show icon.svg"

const RankCard = styled.div`
    color: var(--font-color);
    background-color: var(--bg-color-4);
    border: 1px solid var(--bg-color-5);
    text-align: right;
    cursor: grab;
    font-size: 0.9em;
    display: flex;
    flex-direction: row;
    border-top: 3px solid transparent;
    ${({dragging, dragOver, inDisabledList}) => {
        if (dragging) {
            return `opacity: 0;
                    cursor: grabbing;`;
        }
        if (dragOver) {
            return `border-top: 3px solid #8bb1d0;`;
        }
        if (inDisabledList) {
            return `color: var(--font-color-ngtv);
                    cursor: default;`;
        }
    }}
    transition-duration: 200ms;
`;

const CardName = styled.div`
    padding: 10px 20px;
    width: 80%;
`;
const HidedButton = styled.div`
    width: 20%;
    background-color: ${({bgColor}) => bgColor};
    border: 1px solid ${({borderColor}) => borderColor};
    cursor: pointer;
    display: flex;
    opacity: 0;
    transform: translateX(-10px) scaleX(0.6);
    transition-duration: 200ms;

    &:hover {
        opacity: 1;
        transform: translateY(0) scaleX(1);

        & img {
            opacity: 1;
        }
    }
`;

const Icon = styled.img`
    width: 65%;
    max-height: 70%;
    margin: auto auto;
    transition-duration: 150ms;
    opacity: 0;
`;

export const DraggableCard = ({
    name,
    index,
    onlyInTheList,
    draggingObject,
    setDragIndex,
    dropIndex,
    setDropIndex,
    moveToIndex,
    groupToMove,
    moveCardToDisabledList
}) => {
    const [dragOver, setDragOver] = useState(false);
    const [dragging, setDragging] = useState(false);

    const dragStartHandler = () => {
        setDragging(true);
        setDragIndex(index);
    }
    
    const dragEnterHandler = () => {
        setDragOver(true);
        setDropIndex(index);
    }
    const dragExitHandler = () => {
        setDragOver(false);
    }

    const dragEndHandler = async () => {
        await moveToIndex({
            listFrom: groupToMove,
            cardIndex: draggingObject,
            dropZoneIndex: dropIndex
        });
        setDragging(false);
    }

    const DisableButton = ({action, icon}) => {
        return <HidedButton
            bgColor="#ab1f1f"
            borderColor="#612e2e"
            onClick={action}
        >
            <Icon src={icon}/>
        </HidedButton>;
    }
    
    return <RankCard 
        id={'rank-card-' + index}
        draggable='true'
        dragging={dragging}
        dragOver={dragOver}
        onDragStart={dragStartHandler}
        onDragEnd={dragEndHandler}
        onDragEnter={dragEnterHandler}
        onDragLeave={dragExitHandler}
        inDisabledList={
            groupToMove === 'disabledCardsGroup' ? 
            true : 
            false
        }
    >

        {onlyInTheList ? 
            null
            : <DisableButton
                action={() => {moveCardToDisabledList(index)}}
                icon={hideIcon}
            />
        }
        <CardName>
            {name}
        </CardName>
    </RankCard>;
}

const Space = styled.div`
    height: 15px;
    padding: 2px 20px;
    border-top: 3px solid transparent;
    ${({dragOver}) => {
        if (dragOver) {
            return `border-top: 3px solid #8bb1d0;
                    height: 30px;`;
        }
    }}
    transition-duration: 200ms;
`;

export const ZeroIndexSpace = ({
    setDropIndex,
    groupToMove
}) => {

    const [dragOver, setDragOver] = useState(false);

    const dragEnterHandler = () => {
        setDragOver(true);
        setDropIndex();
    }
    const dragExitHandler = () => {
        setDragOver(false);
    }

    return (
        <Space
            onDragEnter={dragEnterHandler}
            onDragLeave={dragExitHandler}
            dragOver={dragOver}
        />
    )
}

export const DisabledCard = ({
    name,
    index,
    moveCardToEnabledList
}) => {
    const EnableButton = ({action, icon}) => {
        return <HidedButton
            bgColor="#395839"
            borderColor="#235423"
            onClick={action}
        >
            <Icon src={icon}/>
        </HidedButton>
    }

    return <RankCard 
        id={'rank-card-disabled-' + index}
        inDisabledList={true}
    >
        <EnableButton
            action={() => {moveCardToEnabledList(index)}}
            icon={showIcon}
        >
        </EnableButton>
        <CardName>
            {name}
        </CardName>
    </RankCard>; 
}