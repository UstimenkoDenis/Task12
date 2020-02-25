// 2) Используя синтаксис ES6 в отдельном документе:

// ·        Создать класс options

// ·        Он должен содержать свойства: height, width, bg, fontSize, textAlign

// ·        Он должен содержать метод, создающий новый div на странице, записывающий в него любой текст и при помощи cssText 
//          изменять свой стиль из переданных параметров

// ·        Создать новый объект через класс

// ·        Вызвать его метод и получить элемент на странице

class Options {
    constructor(height = 200, width = 500, bg = 'red', fontSize = '30pt', textAlign = 'center') {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    newDiv(text) {
        let div = document.createElement('div');
        // div.style.width = this.width; ..!!!!можно было сделать так но в задании написано что мы должны задать свойства через cssText 
        // div.style.height = this.height;
        // div.style.backgroundColor = this.bg;
        // div.style.textAlign = this.textAlign;
        // div.style.fontSize = this.fontSize;
        // поэтому 
        // Для задания нескольких стилей в одной строке используется специальное свойство style.cssText:
        div.style.cssText = `
            width: ${this.width}px;
            height: ${this.height}px;
            background-Color: ${this.bg};
            text-Align: ${this.textAlign}; 
            font-Size: ${this.fontSize};
         `; // здесь обратить внимание свойства пишутся через тире!!!
        document.body.appendChild(div); //..добавляем созданный элемент в конец
        div.textContent = text;         // добавляем текст в элемент
    }
}
let opt = new Options(300, 200, 'blue', '30pt', 'center');
opt.newDiv(' Hello Denis! ');