//vendors
import ReactDOM from 'react-dom/client';

//components
import { MainPage } from 'pages';

//styles
import 'styles/style.scss';
import 'styles/colors.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<MainPage />);
