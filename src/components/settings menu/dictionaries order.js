import { useEffect, useState } from "react";
import styled from "styled-components";
import {
    getJsonFromLocalStorage, 
    setInLocalStorage 
} from "../../local storage";
import { 
    DraggableCard, 
    ZeroIndexSpace, 
    DisabledCard 
} from "./draggable cards";

const SelectionBox = styled.div`
    margin: 10px 15%;
    border-radius: 5px;
`;

const SpaceBetween = styled.div`
    height: 10px;
`;

export const DictionariesOrder = ({
    dictionaryNames,
    visible
}) => {
    const checkInLocalStorageOrThenIt = (
        key,
        defaultValue
    ) => {
        const result = getJsonFromLocalStorage(key);
        if (result) {
            defaultValue.forEach(name => {
                if (!result.includes(name)) {
                    result[result.length] = name;
                }
            });
            return result;
        }
        return defaultValue;
    }

    const [draggingObject, setDraggingObject] = useState(0);
    const [dropIndex, setDropIndex] = useState(0);
    const [cards, setCards] = useState({
        enabled: [],
        disabled: []
    });
    const [listRendersAttemps, setListRendersAttemps] = useState(0);

    const removeTargetToList = ({
        list,
        targetIndex
    }) => {

         if (targetIndex > -1) {
            list.splice(targetIndex, 1);
        }
    }

    const updateListsInLocalStorage = () => {
        const setListsInLocalStorage = true;

        if (setListsInLocalStorage) {
            setInLocalStorage(
                'enabledCardsGroup',
                JSON.stringify(cards.enabled)
            );
            setInLocalStorage(
                'disabledCardsGroup',
                JSON.stringify(cards.disabled)
            );
        }
    }

    const moveToIndex = ({
        cardIndex,
        dropZoneIndex
    }) => {

        let originList = cards.enabled;
        let cardslist = cards.enabled;
        let setInList = setCards;

        if (cardslist.length === 0) {
            cardslist[cardslist.length] = originList[cardIndex];
        } else if (cardslist.length > 0) {
            let targetValue = originList[cardIndex];
            removeTargetToList({
                list: originList,
                targetIndex: cardIndex
            });
            cardslist.splice(dropZoneIndex, 0, targetValue);

            setInList({
                enabled: cardslist,
                disabled: cards.disabled
            });
        }
        setDropIndex(0);
        setDraggingObject(0);
        updateListsInLocalStorage();
    }

    const moveCardToDisabledList = (cardIndex) => {
        if (cards.enabled.length > 1) {
            let list = cards.disabled;
            list[list.length] = cards.enabled[cardIndex];
            removeTargetToList({
                list: cards.enabled,
                targetIndex: cardIndex
            })
            setCards({
                enabled: cards.enabled,
                disabled: list
            });
            updateListsInLocalStorage();
        }
    }

    const moveCardToEnabledList = (cardIndex) => {
        let list = cards.enabled;
        list[list.length] = cards.disabled[cardIndex];
        removeTargetToList({
            list: cards.disabled,
            targetIndex: cardIndex
        })
        setCards({
            enabled: list,
            disabled: cards.disabled
        });
        updateListsInLocalStorage();
    }

    useEffect(() => {
        if (cards.enabled.length === 0 && dictionaryNames.length !== 0) {
            setCards({
                enabled: checkInLocalStorageOrThenIt(
                    'enabledCardsGroup', 
                    dictionaryNames),
                disabled: checkInLocalStorageOrThenIt(
                    'disabledCardsGroup',
                    [])
            });
            setListRendersAttemps(listRendersAttemps + 1);
        }
    }, [cards, dictionaryNames, listRendersAttemps]);

    return (
        <SelectionBox>
            <SpaceBetween/>
            {visible ? 
                cards.enabled.map((name, index) => {
                    return <DraggableCard
                        name={name}
                        index={index}
                        key={index}
                        onlyInTheList={cards.enabled.length === 1 ?
                            true
                            : false
                        }
                        draggingObject={draggingObject}
                        setDragIndex={setDraggingObject}
                        dropIndex={dropIndex}
                        setDropIndex={setDropIndex}
                        moveToIndex={moveToIndex}
                        groupToMove="enabledCardsGroup"
                        moveCardToDisabledList={moveCardToDisabledList}
                    />})
            : null}
            <ZeroIndexSpace
                setDropIndex={() => {
                    setDropIndex(cards.enabled.length)
                }}
                groupToMove="enabledCardsGroup"
            />
            {visible ?
                cards.disabled.map((name, index) => {
                    return <DisabledCard
                        name={name}
                        index={index}
                        key={index}
                        moveCardToEnabledList
                            ={moveCardToEnabledList}
                    />
                    })
                : null}
        </SelectionBox>
    );
}