import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log('123');

root.render(<App />);
