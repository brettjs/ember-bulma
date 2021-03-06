import Ember from 'ember';
import layout from '../templates/components/bulma-nav-center';
import { _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  classNames: ['nav-center'],
  classNameBindings: _responsiveHelpers
});
