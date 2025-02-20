document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('data-container');

    // Пример данных
    const data = {
        name: "Вадим",
        description: "Тестовая запись #004"
    };

    // Создание текстового поля
    const textField = document.createElement('input');
    textField.type = 'text';
    textField.placeholder = 'Введите текст';
    textField.className = 'data-item';

    // Создание элемента для имени
    const nameElement = document.createElement('div');
    nameElement.className = 'data-item';
    nameElement.textContent = `Имя: ${data.name}`;

    // Создание элемента для описания
    const descriptionElement = document.createElement('div');
    descriptionElement.className = 'data-item';
    descriptionElement.textContent = `Описание: ${data.description}`;

    // Добавление элементов в контейнер
    container.appendChild(textField);
    container.appendChild(nameElement);
    container.appendChild(descriptionElement);
});