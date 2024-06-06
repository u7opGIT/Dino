function copyText() {
    // Отримуємо текст, який потрібно скопіювати
    var textToCopy = document.getElementById("textToCopy").innerText;

    // Створюємо тимчасовий текстовий елемент
    var tempElement = document.createElement("textarea");
    tempElement.value = textToCopy;
    document.body.appendChild(tempElement);

    // Виділяємо текст в елементі
    tempElement.select();
    tempElement.setSelectionRange(0, 99999); // Для мобільних пристроїв

    // Копіюємо текст
    document.execCommand("copy");

    // Видаляємо тимчасовий елемент
    document.body.removeChild(tempElement);

    // Показуємо повідомлення про успішне копіювання
    alert("Текст скопійовано: ");
}
