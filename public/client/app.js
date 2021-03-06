window.Shortly = Backbone.View.extend({
  template: Templates['layout'],

  events: {
    'click li a.index': 'renderIndexView',
    'click li a.create': 'renderCreateView',
    'click li a.login': 'renderLoginView',
    'click li a.signup': 'renderSignupView',
    'click li a.logout': 'renderLogoutView'
  },

  initialize: function() {
    console.log( 'Shortly is running' );
    $('body').append(this.render().el);

    this.router = new Shortly.Router({ el: this.$el.find('#container') });
    this.router.on('route', this.updateNav, this);

    Backbone.history.start({ pushState: true });
  },

  render: function() {
    this.$el.html( this.template() );
    return this;
  },

  renderIndexView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/', { trigger: true });
  },

  renderCreateView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/create', { trigger: true });
  },

  renderLoginView: function(e) {
    this.router.route('/login', 'login');
  },

  renderSignupView: function(e) {
    this.router.route('/signup', 'signup');
  },

  renderLogoutView: function(e) {
    this.router.route('/logout', 'logout');
  },

  updateNav: function(routeName) {

    this.$el.find('.navigation li a')
      .removeClass('selected')
      .filter('.' + routeName)
      .addClass('selected');
  }
});
