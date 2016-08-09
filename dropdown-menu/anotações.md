# Minhas anotações

Anotações do [vídeo Drop Down Menu — CSS Animations](https://www.youtube.com/watch?v=AIdslaUj9wg)

[Codepen](http://codepen.io/olegon/pen/AXmGLL?editors=1100#0) das anotações.

## *Dropdown Menu*



### Dicas

- Para animar itens sequencialmente, use a propriedade CSS `animation-delay` em um laço *for*;
- Ao animar itens sequencialmente, lembre-se de adicionar `opacity: 0.0;` em todos os itens para eles começarem invisíveis, independente do `animation-delay` aplicado;
- A propriedade `transform-origin` pode ser muito útil! :}
    - Exemplo: `transform-origin: right top;`


### Observações

Com *animations*, não *transitions*, os dois blocos abaixo produzem o mesmo efeito:

```css
ul.drop-menu li {
    visibility: hidden;
}

li:hover> ul.drop-menu li {
    visibility: visible;
}
```

```css
ul.drop-menu li {
    display: none;
}

li:hover> ul.drop-menu li {
    display: block;
}
```
