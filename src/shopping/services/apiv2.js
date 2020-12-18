import allData from './data-1';
import detailData from './data';

export const getDataProducts = () => {
    return allData;
}
export const getDataProductById = (id) => {
    const data = detailData.filter(item => item.id === id)[0];
    return data;
}