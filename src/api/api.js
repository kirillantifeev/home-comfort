const url = 'https://67e25aa897fc65f53535a29b.mockapi.io/api/';

export const getProductsApi = async (category) => {


    try {
        const response = await fetch(`${url}products${category ? `?category=${category}` : ''}`);
        if (!response.ok) {
            throw new Error('Ошибка в получении данных!');
        }
        return await response.json(); // Возвращаем результат json
    } catch (err) {
        console.error(err);
    }
};