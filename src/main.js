
// Данные курса
const lessons = [
  {
    id: 'intro',
    title: '1. Введение в Jest',
    description: 'Основные понятия и установка Jest',
    content: {
      theory: `Jest -  популярная тестовая платформа для JavaScript/TypeScript. Упрощает написание и исполнение тестов, обеспечивает единый интерфейс для написания тестов.
      Работает "из коробки" с JS и большинством современных фреймворков (React, Vue и пр.), поддерживает асинхронные тесты и промисы, автоматически настраивает тестовую среду (например, jsdom для тестирования DOM). 
                </br>    Он предоставляет все необходимое для написания, запуска и анализа тестов.
                    
                    <h3>Основные концепции:</h3>
                    <ul>
                   <li><strong>Матчеры</strong> - функции для проверки значений (toBe, toEqual, toContain)</li>
                   <li><strong>Моки (Mocks)</strong> - замена реальных функций тестовыми заглушками для изоляции кода</li>
                   <li><strong>Схема теста</strong>: импорт → вызов → проверка результата</li>
                   </ul>
                   
                   <h3>Как установить Jest:</h3>
                    <ul>
                    <li>Инициализируйте проект:</br> <span class="code-ex">npm init -y</span></li>
                    <li>Установите Jest:</br> <span class="code-ex">npm i --save-dev jest</span></li>
                    <li>Добавьте скрипт в package.json:</br> <span class="code-ex">"test": "jest"</span></li>
                    <li>Запустите тесты:</br> <span class="code-ex">npm test</span></li>
                    </ul>
                    
                  <h3>Основные матчеры Jest</h3>
                  <p>Mатчер (matcher) — набор правил, которые говорят Jest, как сравнить ожидаемое и реальное значение.</p>
                  <ul class="mat">
                  <li><b>toBe(value)</b> — строгая равность (===).</br>
Пример: expect(2 + 2).toBe(4)</li>
                  <li><b>toEqual(value)</b> — глубокое сравнение объектов/массивов.</br>
Пример: expect({ a: 1 }).toEqual({ a: 1 })</li>
                  <li><b>toBeNull()</b> — проверить на null</li>
                  <li><b>toBeUndefined()</b> — проверить на undefined</li>
                  <li><b>toBeTruthy() / toBeFalsy()</b> — проверить, приводится ли к true/false в логическом контексте.</li>
                  <li><b>toContain(item)</b> — проверить, содержит ли массив или строка элемент/подстроку.</br>
Пример: expect([1,2,3]).toContain(2)</br>
Пример: expect('abc').toContain('b')</li>
                  <li><b>toHaveLength(n)</b> — проверить длину массива/строки.</br>
Пример: expect([1,2,3]).toHaveLength(3)</li>
                  </ul>
                  ` ,

      example: `// sum.js</br>
export const sum = (a, b) => a + b; </br>

// sum.test.js</br>
import { sum } from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});</br></br>

// temp.js</br>
export const toFahrenheit = (c) => (c * 9) / 5 + 32;</br>

// temp.test.js</br>
import { toFahrenheit } from './temp';

test('converts 0C to 32F', () => {
  expect(toFahrenheit(0)).toBe(32);
});

test('converts 100C to 212F', () => {
  expect(toFahrenheit(100)).toBe(212);
});`,

      task: {
        description: 'Напишите тест для функции multiply, которая умножает два числа:',
        initialCode: `// Ваш код здесь
test('multiply 3 * 4 to equal 12', () => {
  // Напишите ассерцию
});`,
        solution: `test('multiply 3 * 4 to equal 12', () => {
  expect(multiply(3, 4)).toBe(12);
});`,
        testFunction: (code) => {
          try {
            // Имитация функции multiply
            const multiply = (a, b) => a * b;

            // Проверяем наличие expect и toBe
            if (code.includes('expect') && code.includes('toBe') &&
              code.includes('multiply(3, 4)') && code.includes('12')) {
              return { success: true, message: '✅ Отлично! Тест написан правильно!' };
            }
            return { success: false, message: '❌ Проверьте синтаксис теста' };
          } catch (e) {
            return { success: false, message: `❌ Ошибка: ${e.message}` };
          }
        }
      },

      quiz: {
        question: 'Какой матчер используется для точного сравнения примитивных значений?',
        options: ['toEqual', 'toBe', 'toMatch', 'toContain'],
        correct: 1,
        explanation: 'toBe используется для точного сравнения (===), toEqual - для глубокого сравнения объектов'
      }
    }
  },

  {
    id: 'structure',
    title: '2. Структура тестов',
    description: 'Группировка с describe и хуки',
    content: {
      theory: `Describe позволяет группировать связанные тесты. Хуки beforeEach, afterEach, 
                    beforeAll, afterAll помогают подготавливать и очищать данные для тестов.`,

      example: `describe('Calculator', () => {
  let calculator;
  
  beforeEach(() => {
    calculator = new Calculator();
  });
  
  test('should add numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  
  test('should subtract numbers', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });
});`,

      task: {
        description: 'Создайте группу тестов для функций работы с массивами:',
        initialCode: `// Напишите describe для группы Array Utils
// Добавьте beforeEach для создания тестового массива
// Напишите тест для функции getLength`,
        solution: `describe('Array Utils', () => {
  let testArray;
  
  beforeEach(() => {
    testArray = [1, 2, 3, 4, 5];
  });
  
  test('should return array length', () => {
    expect(getLength(testArray)).toBe(5);
  });
});`,
        testFunction: (code) => {
          if (code.includes('describe') && code.includes('beforeEach') &&
            code.includes('test') && code.includes('expect')) {
            return { success: true, message: '✅ Структура тестов правильная!' };
          }
          return { success: false, message: '❌ Добавьте describe, beforeEach и test' };
        }
      },

      quiz: {
        question: 'Когда выполняется beforeEach?',
        options: ['Один раз перед всеми тестами', 'Перед каждым тестом', 'После каждого теста', 'В конце всех тестов'],
        correct: 1,
        explanation: 'beforeEach выполняется перед каждым отдельным тестом в группе'
      }
    }
  },

  {
    id: 'matchers',
    title: '3. Матчеры Jest',
    description: 'Различные виды проверок',
    content: {
      theory: `<p>Mатчер (matcher) — набор правил, которые говорят Jest, как сравнить ожидаемое и реальное значение.</p>
      Jest предоставляет множество матчеров для разных типов проверок.
                    
                    <h3>Советы по выбору матчеров:</h3>
                    <ul>
                   <li><strong>Для примитивов и строгой равности</strong> - чаще используйте toBe</li>
                   <li><strong>Для объектов/массивов</strong> -  — toEqual</li>
                   <li><strong>Чтобы проверить вызовы моков</strong>: — toHaveBeenCalled и toHaveBeenCalledWith</li>
                   <li><strong>Для ошибок</strong>: — toThrow/toThrowError</li>
                   <li><strong>Для асинхронного кода</strong>: — возвращайте промисы и используйте async/await в тестах</li>
                   </ul>

                  <h3>Матчеры Jest для проверки чисел и строк</h3>
                  
                  <ul class="mat">
                  <li><b>toBe(value)</b> — строгая равность (===).</br>
Пример: expect(2 + 2).toBe(4)</li>
                  <li><b>toEqual(value)</b> — глубокое сравнение объектов/массивов.</br>
Пример: expect({ a: 1 }).toEqual({ a: 1 })</li>
                  <li><b>toBeNull()</b> — проверить на null</li>
                  <li><b>toBeUndefined()</b> — проверить на undefined</li>
                  <li><b>toBeTruthy() / toBeFalsy()</b> — проверить, приводится ли к true/false в логическом контексте.</li>
                  <li><b>toContain(item)</b> — проверить, содержит ли массив или строка элемент/подстроку.</br>
Пример: expect([1,2,3]).toContain(2)</br>
Пример: expect('abc').toContain('b')</li>
                  <li><b>toHaveLength(n)</b> — проверить длину массива/строки.</br>
Пример: expect([1,2,3]).toHaveLength(3)</li>
                  </ul>

                  <h3>Матчеры Jest для проверки функций и вызовов</h3>
                  
                  <ul class="mat">
                  <li><b>toHaveBeenCalled()</b> — проверить, что функция-мок была вызвана.</br>
Пример: expect(someFunc).toHaveBeenCalled()</li>
                  <li><b>toHaveBeenCalledTimes(n)</b> — сколько раз вызвана.</br>
Пример: expect(someFunc).toHaveBeenCalledTimes(2)</li>
                  <li><b>toHaveBeenCalledWith(...args)</b> — проверить, что вызывалась с такими аргументами.</li>
                  <li><b>toHaveBeenLastCalledWith(...args)</b> — последний вызов с такими аргументами.</li>
                  <li><b>toHaveReturned() / toHaveReturnedTimes(n)</b> — проверить возвращение значения.</li>
                  <li><b>toHaveLastReturnedWith(value)</b> — последнее возвращаемое значение.
                  </ul>

<h3>Специализированные matcher’ы </h3>
<ul class="mat">
                  <li><b>toThrow() / toThrowError()</b> — проверить, что функция выбрасывает исключение.</br>
Пример: expect(() => { throw new Error('oops') }).toThrow('oops')</li>
                  <li><b>toMatch(regexp)</b> — для строк, проверить соответствие регулярному выражению.</br></li>
                  <li><b>toBeLessThan(n) / toBeGreaterThan(n)</b> числовые сравнения.</li>
                  <li><b>toBeCloseTo(number, digits?)</b> — сравнение чисел с учётом погрешности.</li>
                  </ul>

<h3>Способы расширения матчеров</h3>

<p>Можно добавлять свои матчеры через расширение expect:</p>
 <span class="code-exp">
 expect.extend({</br>
  toBeDivisibleBy(received, argument) {</br>
    const pass = received % argument === 0;</br>
    if (pass) {</br>
      return { message: () => \`expected \${received} not to be divisible by \${argument}\`, pass: true };</br>
    } else {</br>
      return { message: () => \`expected \${received} to be divisible by \${argument}\`, pass: false };</br>
    }}</br>
});</br>

// использование</br>
expect(6).toBeDivisibleBy(3); // true</br>
expect(6).not.toBeDivisibleBy(3); // false</br>
</span>
                  `,

      example: `test('different matchers', () => {</br>
  expect(2 + 2).toBe(4);                    // проверка примитивов, точное равенство </br></br>

  expect({name: 'John'}).toEqual({name: 'John'}); </br>
  const a = { x: 1, y: 2 };</br>
  const b = { x: 1, y: 2 };</br>
  expect(a).toEqual(b); // глубокое сравнение объектов </br></br>

  expect('hello world').toContain('world');  // проверка на содержание </br></br>  

  expect('test').toBeTruthy();              // проверка на истинность</br></br>  

  test('мок функция вызывается и получает аргументы', () => {</br>
  const fn = jest.fn();</br>
  fn(10, 'test');</br>
  expect(fn).toHaveBeenCalled();</br>
  expect(fn).toHaveBeenCalledWith(10, 'test');</br>
  expect(fn).toHaveBeenCalledTimes(1);</br>
}); </br></br>

// __mocks__/module.js</br>
export const foo = jest.fn().mockReturnValue(42);</br>
jest.mock('../module'); // подвязать мок</br>
import { foo } from '../module';</br>
test('мок возвращает 42', () => {</br>
  expect(foo()).toBe(42);</br>
});</br></br>


});`,

      task: {
        description: 'Используйте правильные матчеры для каждой проверки:',
        initialCode: `test('various checks', () => {
  const user = { name: 'Alice', age: 25 };
  const numbers = [1, 2, 3, 4, 5];
  
  expect(user)./* матчер */({ name: 'Alice', age: 25 });
  expect(numbers)./* матчер */(5);
  expect(numbers)./* матчер */(3);
  expect(undefined)./* матчер */();
});`,
        solution: `test('various checks', () => {
  const user = { name: 'Alice', age: 25 };
  const numbers = [1, 2, 3, 4, 5];
  
  expect(user).toEqual({ name: 'Alice', age: 25 });
  expect(numbers).toHaveLength(5);
  expect(numbers).toContain(3);
  expect(undefined).toBeUndefined();
});`,
        testFunction: (code) => {
          const requiredMatchers = ['toEqual', 'toHaveLength', 'toContain'];
          const hasAll = requiredMatchers.every(matcher => code.includes(matcher));

          if (hasAll) {
            return { success: true, message: '✅ Все матчеры использованы правильно!' };
          }
          return { success: false, message: '❌ Проверьте использование матчеров' };
        }
      },

      quiz: {
        question: 'Какой матчер лучше использовать для сравнения объектов?',
        options: ['toBe', 'toEqual', 'toMatch', 'toBeTruthy'],
        correct: 1,
        explanation: 'toEqual выполняет глубокое сравнение объектов, toBe сравнивает ссылки'
      }
    }
  },

  {
    id: 'mocks',
    title: '4. Моки и Spy',
    description: 'Изоляция зависимостей',
    content: {
      theory: `Моки позволяют заменить реальные функции и модули тестовыми заглушками. 
                    Это помогает изолировать тестируемый код и контролировать поведение зависимостей.`,

      example: `// Мок функции
const mockCallback = jest.fn();
mockCallback('arg1', 'arg2');

expect(mockCallback).toHaveBeenCalledWith('arg1', 'arg2');
expect(mockCallback).toHaveBeenCalledTimes(1);

// Мок модуля
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({ data: 'test' })
}));`,

      task: {
        description: 'Создайте мок функции и проверьте её вызов:',
        initialCode: `test('should call callback', () => {
  // Создайте мок функцию
  const mockFn = /* ваш код */;
  
  // Вызовите функцию processData с моком
  processData('test', mockFn);
  
  // Проверьте, что мок был вызван с 'PROCESSED: test'
});`,
        solution: `test('should call callback', () => {
  const mockFn = jest.fn();
  
  processData('test', mockFn);
  
  expect(mockFn).toHaveBeenCalledWith('PROCESSED: test');
});`,
        testFunction: (code) => {
          if (code.includes('jest.fn()') && code.includes('toHaveBeenCalledWith')) {
            return { success: true, message: '✅ Мок создан и проверен правильно!' };
          }
          return { success: false, message: '❌ Создайте мок с jest.fn() и проверьте вызов' };
        }
      },

      quiz: {
        question: 'Для чего используются моки в тестах?',
        options: ['Ускорения тестов', 'Изоляции зависимостей', 'Проверки вызовов', 'Все перечисленное'],
        correct: 3,
        explanation: 'Моки используются для всех перечисленных целей: изоляция, контроль и ускорение'
      }
    }
  },

  {
    id: 'async',
    title: '5. Асинхронные тесты',
    description: 'Тестирование Promise и async/await',
    content: {
      theory: `Для тестирования асинхронного кода используется async/await или возврат Promise. 
                    Также доступны resolves/rejects матчеры для Promise.`,

      example: `// С async/await
test('async test', async () => {
  const data = await fetchData();
  expect(data).toBe('result');
});

// С Promise
test('promise test', () => {
  return expect(fetchData()).resolves.toBe('result');
});

// Ошибки
test('async error', async () => {
  await expect(failingFunction()).rejects.toThrow('Error');
});`,

      task: {
        description: 'Напишите асинхронный тест для функции getUserData:',
        initialCode: `// Функция возвращает Promise с данными пользователя
test('should get user data', /* добавьте async */ () => {
  // Используйте await для вызова getUserData(1)
  // Проверьте, что result.name равен 'John'
});`,
        solution: `test('should get user data', async () => {
  const result = await getUserData(1);
  expect(result.name).toBe('John');
});`,
        testFunction: (code) => {
          if (code.includes('async') && code.includes('await') && code.includes('expect')) {
            return { success: true, message: '✅ Асинхронный тест написан правильно!' };
          }
          return { success: false, message: '❌ Используйте async/await для асинхронного теста' };
        }
      },

      quiz: {
        question: 'Как правильно тестировать отклоненный Promise?',
        options: ['toThrow', 'rejects.toThrow', 'resolves.toThrow', 'toBe'],
        correct: 1,
        explanation: 'Для тестирования отклоненных Promise используется rejects.toThrow или await expect().rejects'
      }
    }
  },

  {
    id: 'timers',
    title: '6. Таймеры',
    description: 'Управление временем в тестах',
    content: {
      theory: `Фейковые таймеры позволяют контролировать время в тестах без реального ожидания. 
                    Используйте jest.useFakeTimers() и jest.advanceTimersByTime().`,

      example: `jest.useFakeTimers();

test('delayed callback', () => {
  const callback = jest.fn();
  
  setTimeout(callback, 1000);
  
  expect(callback).not.toBeCalled();
  
  jest.advanceTimersByTime(1000);
  
  expect(callback).toBeCalled();
});

afterEach(() => {
  jest.useRealTimers();
});`,

      task: {
        description: 'Протестируйте функцию с задержкой:',
        initialCode: `jest.useFakeTimers();

test('should call function after delay', () => {
  const mockFn = jest.fn();
  
  // Функция delayedCall вызывает колбек через 2000мс
  delayedCall(mockFn);
  
  // Проверьте, что функция еще не вызвана
  // Продвиньте время на 2000мс
  // Проверьте, что функция вызвана
});`,
        solution: `jest.useFakeTimers();

test('should call function after delay', () => {
  const mockFn = jest.fn();
  
  delayedCall(mockFn);
  
  expect(mockFn).not.toBeCalled();
  
  jest.advanceTimersByTime(2000);
  
  expect(mockFn).toBeCalled();
});`,
        testFunction: (code) => {
          const hasRequired = code.includes('jest.useFakeTimers') &&
            code.includes('advanceTimersByTime') &&
            code.includes('not.toBeCalled');

          if (hasRequired) {
            return { success: true, message: '✅ Тест с таймерами написан правильно!' };
          }
          return { success: false, message: '❌ Используйте fake timers и advanceTimersByTime' };
        }
      },

      quiz: {
        question: 'Зачем нужны фейковые таймеры в тестах?',
        options: ['Ускорить тесты', 'Контролировать время', 'Избежать реальных задержек', 'Все перечисленное'],
        correct: 3,
        explanation: 'Фейковые таймеры решают все эти проблемы одновременно'
      }
    }
  },

  {
    id: 'modules',
    title: '7. Мокирование модулей',
    description: 'Manual и auto mocks',
    content: {
      theory: `Jest позволяет мокировать целые модули автоматически или вручную. 
                    Ручные моки размещаются в папке __mocks__.`,

      example: `// Автоматический мок
jest.mock('./api');

// Ручной мок с реализацией
jest.mock('./database', () => ({
  connect: jest.fn(),
  query: jest.fn().mockResolvedValue([])
}));

// __mocks__/api.js
export const fetchData = jest.fn(() => Promise.resolve('mocked'));`,

      task: {
        description: 'Замокайте модуль и настройте его поведение:',
        initialCode: `// Замокайте модуль './logger'
// jest.mock(/* ваш код */);

test('should use mocked logger', () => {
  const { logInfo } = require('./logger');
  
  someFunction();
  
  // Проверьте, что logInfo был вызван с 'Operation completed'
});`,
        solution: `jest.mock('./logger');

test('should use mocked logger', () => {
  const { logInfo } = require('./logger');
  
  someFunction();
  
  expect(logInfo).toHaveBeenCalledWith('Operation completed');
});`,
        testFunction: (code) => {
          if (code.includes("jest.mock('./logger')") && code.includes('toHaveBeenCalledWith')) {
            return { success: true, message: '✅ Модуль замокан правильно!' };
          }
          return { success: false, message: '❌ Используйте jest.mock() и проверьте вызов' };
        }
      },

      quiz: {
        question: 'Где размещаются ручные моки?',
        options: ['В корне проекта', 'В папке __mocks__', 'В папке tests', 'Рядом с тестами'],
        correct: 1,
        explanation: 'Ручные моки размещаются в папке __mocks__ рядом с мокируемым модулем'
      }
    }
  },

  {
    id: 'dom',
    title: '8. Тестирование DOM',
    description: 'Работа с элементами страницы',
    content: {
      theory: `Jest по умолчанию использует jsdom для эмуляции браузерного окружения. 
                    Можно тестировать манипуляции с DOM, события и изменения элементов.`,

      example: `// Тестирование DOM-манипуляций
test('should toggle element visibility', () => {
  document.body.innerHTML = \`
    <div id="box" style="display: none;">Content</div>
  \`;
  
  const element = document.getElementById('box');
  toggleVisibility('#box');
  
  expect(element.style.display).toBe('block');
});

// Тестирование событий
test('should handle click', () => {
  const button = document.createElement('button');
  const handler = jest.fn();
  
  button.addEventListener('click', handler);
  button.click();
  
  expect(handler).toHaveBeenCalled();
});`,

      task: {
        description: 'Протестируйте функцию изменения текста элемента:',
        initialCode: `test('should update text content', () => {
  // Создайте HTML с элементом id="title"
  document.body.innerHTML = /* ваш код */;
  
  // Вызовите функцию updateTitle('New Title')
  updateTitle('New Title');
  
  // Проверьте, что текст элемента изменился
  const element = document.getElementById('title');
  expect(element.textContent)./* ваш код */;
});`,
        solution: `test('should update text content', () => {
  document.body.innerHTML = \`
    <h1 id="title">Old Title</h1>
  \`;
  
  updateTitle('New Title');
  
  const element = document.getElementById('title');
  expect(element.textContent).toBe('New Title');
});`,
        testFunction: (code) => {
          if (code.includes('document.body.innerHTML') &&
            code.includes('getElementById') &&
            code.includes('textContent')) {
            return { success: true, message: '✅ DOM-тест написан правильно!' };
          }
          return { success: false, message: '❌ Используйте innerHTML и проверьте textContent' };
        }
      },

      quiz: {
        question: 'Какое окружение использует Jest для DOM по умолчанию?',
        options: ['browser', 'jsdom', 'node', 'puppeteer'],
        correct: 1,
        explanation: 'Jest использует jsdom для эмуляции браузерного окружения в тестах'
      }
    }
  },

  {
    id: 'config',
    title: '9. Конфигурация',
    description: 'Настройка Jest под проект',
    content: {
      theory: `Jest можно настроить через файл jest.config.js или секцию в package.json. 
                    Основные настройки: testEnvironment, transform, collectCoverage, testMatch.`,

      example: `// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  
  transform: {
    '^.+\\\\.[tj]s?: 'babel-jest'
  },
  
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    '!src/**/*.d.ts'
  ],
  
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};`,

      task: {
        description: 'Создайте базовую конфигурацию Jest:',
        initialCode: `// Создайте объект конфигурации
const config = {
  // Установите testEnvironment в 'jsdom'
  testEnvironment: /* ваш код */,
  
  // Включите сбор покрытия
  collectCoverage: /* ваш код */,
  
  // Установите порог покрытия 70% для всех метрик
  coverageThreshold: {
    global: {
      // ваш код
    }
  }
};`,
        solution: `const config = {
  testEnvironment: 'jsdom',
  
  collectCoverage: true,
  
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
};`,
        testFunction: (code) => {
          const hasRequired = code.includes("'jsdom'") &&
            code.includes('collectCoverage: true') &&
            code.includes('coverageThreshold');

          if (hasRequired) {
            return { success: true, message: '✅ Конфигурация создана правильно!' };
          }
          return { success: false, message: '❌ Проверьте настройки testEnvironment и coverage' };
        }
      },

      quiz: {
        question: 'Что означает coverageThreshold в конфигурации?',
        options: ['Минимальный процент покрытия', 'Максимальный размер файлов', 'Время выполнения тестов', 'Количество тестов'],
        correct: 0,
        explanation: 'coverageThreshold устанавливает минимальные требования к покрытию кода тестами'
      }
    }
  },

  {
    id: 'practice',
    title: '10. Практика',
    description: 'Комплексный проект',
    content: {
      theory: `Финальная практика объединяет все изученные концепции: 
                    структура тестов, моки, асинхронность, DOM и конфигурация в одном проекте.`,

      example: `// Пример комплексного теста
describe('TodoApp', () => {
  let todoApp;
  
  beforeEach(() => {
    document.body.innerHTML = \`
      <div id="app">
        <input id="input" />
        <button id="add">Add</button>
        <ul id="todos"></ul>
      </div>
    \`;
    todoApp = new TodoApp('#app');
  });
  
  test('should add todo item', async () => {
    const input = document.getElementById('input');
    const button = document.getElementById('add');
    
    input.value = 'Test todo';
    button.click();
    
    await jest.waitFor(() => {
      expect(document.querySelector('#todos li')).toBeTruthy();
    });
  });
});`,

      task: {
        description: 'Создайте комплексный тест для функции обработки формы:',
        initialCode: `describe('Form Handler', () => {
  // Добавьте моки для API
  
  beforeEach(() => {
    // Настройте DOM
  });
  
  test('should submit form data', async () => {
    // Заполните форму
    // Отправьте форму
    // Проверьте вызов API
    // Проверьте обновление UI
  });
  
  test('should show error on failure', async () => {
    // Настройте API мок на ошибку
    // Отправьте форму
    // Проверьте отображение ошибки
  });
});`,
        solution: `describe('Form Handler', () => {
  const mockSubmit = jest.fn();
  
  beforeEach(() => {
    jest.clearAllMocks();
    document.body.innerHTML = \`
      <form id="testForm">
        <input name="email" type="email" />
        <button type="submit">Submit</button>
        <div id="error"></div>
      </form>
    \`;
  });
  
  test('should submit form data', async () => {
    const form = document.getElementById('testForm');
    const email = form.querySelector('input[name="email"]');
    
    email.value = 'test@example.com';
    mockSubmit.mockResolvedValue({ success: true });
    
    await handleFormSubmit(form, mockSubmit);
    
    expect(mockSubmit).toHaveBeenCalledWith({ email: 'test@example.com' });
  });
  
  test('should show error on failure', async () => {
    const form = document.getElementById('testForm');
    const errorDiv = document.getElementById('error');
    
    mockSubmit.mockRejectedValue(new Error('Network error'));
    
    await handleFormSubmit(form, mockSubmit);
    
    expect(errorDiv.textContent).toContain('Error');
  });
});`,
        testFunction: (code) => {
          const hasRequired = code.includes('describe') &&
            code.includes('beforeEach') &&
            code.includes('mockSubmit') &&
            code.includes('document.body.innerHTML');

          if (hasRequired) {
            return { success: true, message: '🎉 Отличная работа! Комплексный тест готов!' };
          }
          return { success: false, message: '❌ Добавьте все необходимые элементы теста' };
        }
      },

      quiz: {
        question: 'Какие принципы важны при написании хороших тестов?',
        options: ['Изоляция и независимость', 'Читаемость и понятность', 'Быстрота выполнения', 'Все перечисленное'],
        correct: 3,
        explanation: 'Хорошие тесты должны быть изолированными, читаемыми и быстрыми одновременно'
      }
    }
  }
];

// Состояние приложения
let currentLesson = 0;
let completedLessons = JSON.parse(localStorage.getItem('jestCompletedLessons') || '[]');
let achievements = JSON.parse(localStorage.getItem('jestAchievements') || '[]');

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  renderNavigation();
  showLesson(0);
  updateProgress();
});

// Навигация
function renderNavigation() {
  const navItems = document.getElementById('navItems');
  navItems.innerHTML = lessons.map((lesson, index) => `
                <div class="nav-item ${index === currentLesson ? 'active' : ''} ${completedLessons.includes(index) ? 'completed' : ''}" 
                     onclick="showLesson(${index})">
                    ${lesson.title.split('.')[0]}
                </div>
            `).join('');
}

function showLesson(index) {
  currentLesson = index;
  const lesson = lessons[index];

  document.getElementById('content').innerHTML = `
                <div class="lesson active">
                    <div class="lesson-header">
                        <div class="lesson-title">${lesson.title}</div>
                        <div class="lesson-description">${lesson.description}</div>
                    </div>
                    
                    <div>
                        <p style="line-height: 1.6; margin-bottom: 20px;">${lesson.content.theory}</p>
                        
                        <h3>💡 Примеры</h3>
                        <div class="code-example">${lesson.content.example}</div>
                        
                        <div class="task">
                            <div class="task-title">🎯 Практическое задание</div>
                            <div class="task-description">${lesson.content.task.description}</div>
                            
                            <div class="code-editor">
                                <textarea id="codeInput" placeholder="Ваш код здесь...">${lesson.content.task.initialCode}</textarea>
                            </div>
                            
                            <div style="text-align: center; margin: 15px 0;">
                                <button class="btn" onclick="runTest()">🧪 Проверить код</button>
                                <button class="btn secondary" onclick="showSolution()">💡 Показать решение</button>
                                <button class="btn danger" onclick="resetCode()">🔄 Сбросить</button>
                            </div>
                            
                            <div id="testResult"></div>
                        </div>
                        
                        <div class="quiz">
                            <div class="quiz-question">❓ ${lesson.content.quiz.question}</div>
                            <div class="quiz-options" id="quizOptions">
                                ${lesson.content.quiz.options.map((option, i) => `
                                    <div class="quiz-option" onclick="selectOption(${i})">${option}</div>
                                `).join('')}
                            </div>
                            <div id="quizResult"></div>
                        </div>
                        
                        <div style="text-align: center; margin-top: 30px;">
                            ${index > 0 ? `<button class="btn secondary" onclick="showLesson(${index - 1})">← Предыдущий</button>` : ''}
                            ${index < lessons.length - 1 ? `<button class="btn" onclick="showLesson(${index + 1})">Следующий →</button>` : ''}
                        </div>
                    </div>
                </div>
            `;

  renderNavigation();
}

// Тестирование кода
function runTest() {
  const code = document.getElementById('codeInput').value;
  const lesson = lessons[currentLesson];
  const result = lesson.content.task.testFunction(code);

  const resultDiv = document.getElementById('testResult');
  resultDiv.className = `result ${result.success ? 'success' : 'error'}`;
  resultDiv.innerHTML = result.message;

  if (result.success && !completedLessons.includes(currentLesson)) {
    markLessonCompleted();
  }
}

function showSolution() {
  const lesson = lessons[currentLesson];
  document.getElementById('codeInput').value = lesson.content.task.solution;

  showModal(`
                <h3>💡 Решение</h3>
                <div class="code-example">${lesson.content.task.solution}</div>
                <p style="margin-top: 15px; color: #666;">
                    Код скопирован в редактор. Изучите решение и попробуйте понять логику.
                </p>
                <button class="btn" onclick="closeModal()">Понятно</button>
            `);
}

function resetCode() {
  const lesson = lessons[currentLesson];
  document.getElementById('codeInput').value = lesson.content.task.initialCode;
  document.getElementById('testResult').innerHTML = '';
}

// Квиз
function selectOption(selectedIndex) {
  const lesson = lessons[currentLesson];
  const options = document.querySelectorAll('.quiz-option');
  const resultDiv = document.getElementById('quizResult');

  // Очистка предыдущих состояний
  options.forEach(option => {
    option.classList.remove('selected', 'correct', 'incorrect');
  });

  // Отметка выбранного варианта
  options[selectedIndex].classList.add('selected');

  setTimeout(() => {
    // Показ правильного ответа
    options[lesson.content.quiz.correct].classList.add('correct');

    if (selectedIndex !== lesson.content.quiz.correct) {
      options[selectedIndex].classList.add('incorrect');
      resultDiv.innerHTML = `
                        <div class="result error">
                            ❌ Неправильно. ${lesson.content.quiz.explanation}
                        </div>
                    `;
    } else {
      resultDiv.innerHTML = `
                        <div class="result success">
                            ✅ Правильно! ${lesson.content.quiz.explanation}
                        </div>
                    `;

      if (!completedLessons.includes(currentLesson)) {
        markLessonCompleted();
      }
    }
  }, 500);
}

// Прогресс и достижения
function markLessonCompleted() {
  if (!completedLessons.includes(currentLesson)) {
    completedLessons.push(currentLesson);
    localStorage.setItem('jestCompletedLessons', JSON.stringify(completedLessons));

    updateProgress();
    checkAchievements();

    // Показать поздравление
    setTimeout(() => {
      showAchievement(`🎉 Урок "${lessons[currentLesson].title}" завершен!`);
    }, 1000);
  }
}

function updateProgress() {
  const progress = (completedLessons.length / lessons.length) * 100;
  document.getElementById('progressFill').style.width = `${progress}%`;
}

function checkAchievements() {
  const newAchievements = [];

  if (completedLessons.length === 1 && !achievements.includes('first')) {
    newAchievements.push({ id: 'first', title: '🎯 Первый шаг', desc: 'Завершен первый урок' });
  }

  if (completedLessons.length === Math.ceil(lessons.length / 2) && !achievements.includes('halfway')) {
    newAchievements.push({ id: 'halfway', title: '🏃‍♂️ Середина пути', desc: 'Половина курса пройдена' });
  }

  if (completedLessons.length === lessons.length && !achievements.includes('master')) {
    newAchievements.push({ id: 'master', title: '🏆 Jest Мастер', desc: 'Весь курс завершен!' });
  }

  newAchievements.forEach(achievement => {
    achievements.push(achievement.id);
    setTimeout(() => showAchievement(`${achievement.title}: ${achievement.desc}`),
      newAchievements.indexOf(achievement) * 2000);
  });

  if (newAchievements.length > 0) {
    localStorage.setItem('jestAchievements', JSON.stringify(achievements));
  }
}

function showAchievement(text) {
  const achievement = document.createElement('div');
  achievement.className = 'achievement';
  achievement.innerHTML = text;
  achievement.style.position = 'fixed';
  achievement.style.top = '20px';
  achievement.style.left = '50%';
  achievement.style.transform = 'translateX(-50%)';
  achievement.style.zIndex = '10000';

  document.body.appendChild(achievement);

  setTimeout(() => {
    achievement.remove();
  }, 3000);
}

// Модальные окна
function showModal(content) {
  document.getElementById('modalContent').innerHTML = content;
  document.getElementById('modal').classList.add('active');
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
}

// Дополнительные функции
function showHints() {
  const lesson = lessons[currentLesson];
  showModal(`
                <h3>💡 Подсказки для урока "${lesson.title}"</h3>
                <div style="text-align: left; line-height: 1.6;">
                    <p><strong>Основные концепции:</strong></p>
                    <ul style="margin: 10px 0; padding-left: 20px;">
                        <li>Внимательно читайте сообщения об ошибках</li>
                        <li>Используйте автодополнение IDE</li>
                        <li>Проверяйте синтаксис и скобки</li>
                        <li>Не забывайте про асинхронность</li>
                    </ul>
                    
                    <p><strong>Полезные ссылки:</strong></p>
                    <ul style="margin: 10px 0; padding-left: 20px;">
                        <li><a href="https://jestjs.io/docs/expect" target="_blank">Jest Matchers</a></li>
                        <li><a href="https://jestjs.io/docs/mock-functions" target="_blank">Mock Functions</a></li>
                        <li><a href="https://jestjs.io/docs/asynchronous" target="_blank">Async Testing</a></li>
                    </ul>
                </div>
                <button class="btn" onclick="closeModal()">Закрыть</button>
            `);
}

function resetProgress() {
  if (confirm('Сбросить весь прогресс? Это действие нельзя отменить.')) {
    completedLessons = [];
    achievements = [];
    localStorage.removeItem('jestCompletedLessons');
    localStorage.removeItem('jestAchievements');

    updateProgress();
    renderNavigation();

    showAchievement('🔄 Прогресс сброшен');
  }
}

// Закрытие модального окна по клику вне его
document.getElementById('modal').addEventListener('click', (e) => {
  if (e.target.id === 'modal') {
    closeModal();
  }
});

// Обработка escape для закрытия модального окна
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Touch events для мобильных устройств
let startX = 0;
let startY = 0;

document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
  if (!startX || !startY) return;

  const endX = e.changedTouches[0].clientX;
  const endY = e.changedTouches[0].clientY;

  const diffX = startX - endX;
  const diffY = startY - endY;

  // Swipe влево - следующий урок
  if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
    if (diffX > 0 && currentLesson < lessons.length - 1) {
      showLesson(currentLesson + 1);
    }
    // Swipe вправо - предыдущий урок  
    else if (diffX < 0 && currentLesson > 0) {
      showLesson(currentLesson - 1);
    }
  }

  startX = 0;
  startY = 0;
});