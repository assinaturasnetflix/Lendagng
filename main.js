// Este arquivo importa App.js e renderiza no DOM.
// Como estamos evitando JSX e um sistema de build complexo para este exemplo,
// vamos assumir que App.js define um componente globalmente ou é importado.
// Para um projeto real, você usaria importações ES6 e um bundler.

// Importa App.js como um módulo. `App` será o default export.
import App from './App.js';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Renderiza o componente App
// Como App é uma função que retorna React.createElement(...), podemos usá-la diretamente.
root.render(React.createElement(App));
