# Minhas anotações

Anotações do [vídeo Notifications, Alerts, Menus — CSS Animations](https://www.youtube.com/watch?v=evaN55xnXG4)

[Codepen](http://codepen.io/olegon/pen/QKWmoK?editors=1100) das anotações.

## *Notifications, Alerts, Menus*


### Dicas


#### Borda inferior para destacar elementos

Uma boa técnica para adicionar uma borda na parte inferior de um elemento para destacá-lo como ativo, por exemplo, não é através de `border`, mas sim através de `box-shadow inset`!

```css
li.--active {
    box-shadow: 0px -4px 0px #0097A7 inset;
}
```

A grande vantagem dessa técnica é que que o tamanho do elemento não é modificado! ;) E claro, `box-shadow` também á animável!


#### Perspectiva 3D

> The perspective CSS property determines the distance between the z=0 plane and the user in order to give to the 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property. - [MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/perspective)


#### Origem da transformação

A propriedade `transform-origin` indica pode ser muito útil com rotações!

```css
.item {
    transform-origin: center 60px;
}
```


#### Cuidado com `scale(0.0)`

Começar com um `scale(0.0)` pode ser problemático em alguns navegadores. Use, então, `scale(0.1)`.


#### Simular o mundo real.

Para se inspirar, assista esse [vídeo](https://www.youtube.com/watch?v=jn5OB12u8Pw).

Usar uma animação que rotaciona um objeto de *0deg* até *90deg* pode ficar muito estático. Pode ficar melhor se o objeto voltasse um pouco até *-10deg*, avançasse até *100deg* e finalmente voltasse até *90deg*. Pense em um ônibus saindo do repouso e parando.

Outra dica é combinar rotações como acontece em `0%`. Foi combinado `rotate(30deg)` com `rotateX(90deg)`.

```css
@keyframes note {
    0% {
        opacity: 0;
        transform: scale(0.1) rotate(30deg) translateY(50px) rotateX(90deg);
    }

    50% {
      transform: rotate(-10deg) rotateX(-3deg);
      opacity: 1;
    }

    70% {
        transform: rotate(3deg);
    }

    100% {
        transform: scale(1)
    }
}
```


#### Crescimento horizontal/vertical

Uma boa técnica para simular o crescimento horizontal ou vertical de um elemento é através da rotação no eixo Y (`rotateY`) ou no eixo Y (`rotateY`), respectivamente, junto com `transform-origin`.

```css
div {
  padding: 1em;
  border: 1px solid #ccc;
  margin: 1em 0;
  animation: grow 1000ms ease-in-out;
  transform-origin: left center;
}

@keyframes grow {
  0% {
    transform: rotateY(90deg);
  }

  100% {
    transform: rotateY(0deg);
  }
}
```



















.
