import { Package } from '@idg/idg';
import components from './components';
import apis from './apis';
import locales from './locales';
import store from './store';
import controllers from './controllers';
import pages from './pages';
import { routes } from './router';

const pkg: Package = {
  name: 'example',
  components,
  locales,
  store,
  routes,
  apis,
  pages,
  controllers,
};

export default pkg;
