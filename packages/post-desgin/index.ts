import { Package } from '@idg/idg';
import components from './components';
import apis from './apis';
import locales from './locales';
import controllers from './controllers';
import pages from './pages';
import { routes } from './router';

const pkg: Package = {
  name: 'post-desgin',
  components,
  locales,
  routes,
  apis,
  pages,
  controllers,
};

export default pkg;
