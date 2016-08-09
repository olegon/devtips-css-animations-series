# Minhas anotações

Anotações do [vídeo Drop Down Menu — CSS Animations](https://www.youtube.com/watch?v=AIdslaUj9wg)

## *Dropdown Menu*


### Dicas


### Observações

Com *animations*, não *transitions*, os dois blocos abaixo produziram o mesmo efeito:

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
