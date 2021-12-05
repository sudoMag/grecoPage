export const cssTranslate = ( AxisX, AxisY, object) => {
    object.style.transform
        = `translate(${AxisX}px ,${AxisY}px)`;
}

export const cssTranslateY = (AxisY, object) => {
    object.style.transform
        = `translateY(${AxisY}px)`;
}

export const cssTranslateX = () => {
    
}