export const getImage = (imageName) => require(`../asset/icons/${imageName}.png`);

export const convertToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5 / 9).toFixed(0);