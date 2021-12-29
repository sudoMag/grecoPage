var scrollPosition = {
  axisX: 0,
  axisY: 0,
};

var callbackList = [];

export const updateScrollPosition = (axisX, axisY) => {
  scrollPosition = {
    axisX: axisX,
    axisY: axisY,
  };
  callbackList.forEach((callbackFn) => {
    callbackFn(scrollPosition);
  });
};

export const addScrollFx = (callback) => {
  callbackList[callbackList.length] = callback;
};
