# React, этапы жизненного цикла. 

1. constructor(props): конструктор, начальная инициализация компонента
2. static getDerivedStateFromProps(props, state): вызывается перед рендерингом компонента. 
   Возвращает объект для обновления состояния. 
3. render(): рендеринг компонента
4. componentDidMount() 
   Монтирование используется для добавления узлов (элементов) в DOM  
5. componentWillUnmount()
   Размонтирование (unmounting)для удаления узлов(элементов) из DOM

Для обновления дополнительные состояния:

1. static getDerivedStateFromProps(props, state)
   вернуть объект для обновления состояния или null, чтобы указать, что ничего не изменилось.
2. shouldComponentUpdate(nextProps, nextState): true (надо делать обновление, по умолчанию),
false (игнорировать обновление). 
3. render(): рендеринг компонента (если shouldComponentUpdate возвращает true)
4. getSnapshotBeforeUpdate(prevProps, prevState): возвращает из DOM отдельный элемент, 
 который передается в качестве третьего параметра в метод componentDidUpdate() 
5. componentDidUpdate(prevProps, prevState, snapshot):  вызывается после обновления компонента 
prevProps, prevState - старые значения объектов props и state. 
snapshot - то что вернуло getSnapshotBeforeUpdate

# Компонент класса требует расширения от React.Component и создает функцию рендеринга, которая возвращает элемент React.
Классовый компонент должен содержать метод render(), который возвращает React-элемент.
Доступ к props осуществляется через this.
Классовый компонент имеет возможность хранения внутреннего состояния.

Функциональный компонент — это обычная функция на чистом JavaScript, которая принимает свойства (props) 
в качестве аргумента и возвращает элемент React (JSX).
Для получения возможностей класса используются хуки.
Например: useState() — это хук, который позволяет получить доступ к состоянию.
useEffect()- заменил componentDidMount(), componentWillUnmount() и componentDidUpdate() для обновления состояния.


