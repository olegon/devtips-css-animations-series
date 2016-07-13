# Minhas anotações

## CSS Transition (CSS Animations Series Part 1)

```
animação
s.f
Vivacidade no falar, no olhar, nos movimentos.
```

A ideia central de animação é movimento. Movimento com CSS pode ser obtido de duas maneiras:

1. Propriedade `transition`
2. Propriedade `animation` + `keyframes`

### A propriedade `transition`

#### Síntaxe

```css
.element {
    transition: [propriedade] [duração] [função-de-timing] [atraso], [propriedade-2] [duração-2] [função-de-timing-2] [atraso-2], ...;
}
```

As propriedades `[função-de-timing]` e `[atraso]` têm, respectivamente, como valor padrão `ease` e `0ms`.

#### Mas o que pode ser animado?

Uma boa regra de ouro é pensar que qualquer propriedade que tenha um valor intermediário pode ser animada. Propriedades como `font-size`, `background-color` e `width`, por exemplo, possuem valores intermediários; pense em animar `font-size` de `10px` para `16px`: há os valores `11px`, `12px`, `12.25px` etc. O mesmo acontece para `background-color` e `width`. Aqui pode ser encontrada [uma lista de propriedades animáveis](http://oli.jp/2010/css-animatable-properties/).

#### Mas o que deve ser animado?

As propriedades mais performáticas para animação são `transform (translate, scale, rotation etc)` e `opacity`.

> If you animate anything else, it's at your own risk, and the chances are you're not going to hit a silky smooth 60fps. - Paul Lewis & Irish

*Repare que `transition` e `transform` são coisas **diferentes**!*

#### Como disparar as animações?

É muito comum animar um elemento quando:

1. A pseudo-class `:hover` é acionada
2. Ao alterar sua classe


#### Exemplos

```html
<div class="trigger-container">
    <div class="box"></div>
</div>
```

```css
.trigger-container {
    border: 10px solid #ccc;
    display: inline-block;
    width: 200px;
    height: 200px;
}

.box {
    display: inline-block;
    background-color: pink;
    width: 200px;
    height: 200px;
    transition: transform 1s cubic-bezier(0, 0.47, 0.32, 1.97);
    pointer-events: none;
}

.trigger-container:hover .box {
    transform: translate(200px, 100px) rotate(35deg);
}
```

A grande dica aqui é a propriedade `pointer-events: none;`. Como `.box` é parte de `.trigger-container`, o `:hover` de `.box` **também** ativará a animação. Essa propriedade serve justamente para impedir eventos de pointer! ;)

A segunda dica é usar o `Chrome Dev Tools` para criar *timing-functions* na forma de `cubic-bezier` etc.

> Uma transição ocorre quando há mudança de valor em alguma propriedade configurada para ser animada.
