# Minhas anotações

Anotações do [vídeo CSS Transition (CSS Animations Series Part 2)](https://www.youtube.com/watch?v=f1WMjDx4snI)

## *CSS Animations* e *CSS Keyframes*

```
animação
s.f
Vivacidade no falar, no olhar, nos movimentos.
```

A ideia central de animação é movimento. Movimento com CSS pode ser obtido de duas maneiras:

1. Propriedade `transition` *[(link)](../transitions/anotações.md)*
2. Propriedade `animation` + `keyframes`

### CSS `@keyframes`

Keyframes permitem especificar o que acontecerá durante a animação por etapas. Há duas formas de trabalhar com elas:

- Através de `from`/`to`:

```css
@keyframes [nome] {
    from {
        [propriedade]: [valor];
    }

    to {
        [propriedade]: [valor];

    }
}
```

- Através de porcentagens:

```css
@keyframes [outroNome] {
    0% {
        [propriedade]: [valor];
    }

    80% {
        [propriedade]: [valor];
    }

    50%, 100% {
        [propriedade]: [valor];
    }

    100% {
        [prop]: [value];

    }
}
/* Caso estranho, mas funciona! :} */
```

### A propriedade `animation`

```css
    .element {
        animation: [name] [duration] [timing-function] [delay] [iteration-count] [direction] [fill-mode] [play-state];
    }

    .element {
        animation-name: myframes;
        animation-duration: 300ms;
        animation-timing-function: ease-in-out;
        animation-delay: 0s;
        animation-iteration-count: 1;
        animation-direction: normal;
        animation-fill-mode: none;
    }
```

#### Valores da propriedades

- *`animation-name`*: O nome do `@keyframes`.
- *`animation-iteration-count`*: Indica a quantidade de vezes que a animação se repetirá.
    - Aceita um inteiro ou a palavra `infinite`.
- *`animation-direction`*: Indica o sentido na animação.
    - Aceita os valores `normal` (default), `reverse` e `alternate`.
    - O valor alternate se comporta como uma sequência de `normal` e `reverse`. **Cada** execução de `normal` e `reverse` conta como uma iteração da animação, cuidado.
- *`animation-fill-mode`*: Indica o que acontecerá ao final da animação.
    - Aceita os valores `none` (default), `forwards` e `both`.
    - O valor `none` faz com que a animação seja resetada ao terminar.
    - O valor `forwards` faz com que a animação permaneça no último frame ao terminar.
- *`animation-play-state`*: Indica qual é o estado da animação.
    - Aceita os valores `running` e `paused`.

#### Como disparar as animations?

É muito comum disparar a animação de um elemento quando:

1. A pseudo-class `:hover` é acionada *(também se aplica à propriedade `transition`)*
2. Ao alterar sua classe *(também se aplica à propriedade `transition`)*
3. Um novo elemento é adicionado, e já é animado de cara. *(NÃO se aplica à propriedade `trasition`)*
