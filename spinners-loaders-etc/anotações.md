# Minhas anotações

Anotações do [vídeo Spinners, Loaders, and Junk — CSS Animations](https://www.youtube.com/watch?v=lQxt6TdzsAo)

[Codepen](http://codepen.io/olegon/pen/NRzZob) das anotações.

## _Tips_

Para essas anitamações, é muito usado a técnica de animar os pseudo-elementos `::before` e `::after`. O _setup_ básico fica:

```css
.spinner {    
    width: 100px;
    height: 100px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;

    position: relative;
}

.spinner::before {
    content: '';  
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 8px solid transparent;
    border-top-color: orangered;
    border-bottom-color: orangered;

    position: absolute;
    top: -8px;
    left: -8px;
}
```

### Pacman _pure CSS_

```css
.pacman {
  position: relative;
}

.pacman::before,
.pacman::after {
  content: '';
  width: 0;
  height: 0;

  border: 30px solid goldenrod;
  border-right-color: transparent;
  border-radius: 50%;

  position: absolute;
  top: 0;
  left: 0;
}

.pacman::before {
  animation: pacTop 500ms linear infinite;
}

.pacman::after {
  animation: pacBottom 500ms linear infinite;
}

@keyframes pacTop {
  0%, 100% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(45deg);
  }
}

@keyframes pacBottom {
  0%, 100% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(-45deg);
  }
}
```
