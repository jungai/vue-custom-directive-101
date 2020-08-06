const resize = {
  bind(el, binding, vnode) {
    // element
    console.log('el from directive', el);

    // receive function as a value
    console.log('fn ->', binding.value);

    window.addEventListener('resize', () => {
      // we can call function from binding.value
      // can emit some event eg. string hello
      const msg = 'hello from directive';
      const options = {
        msg,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      };

      binding.value(options);

      // update value in vnode
      const component = vnode.context;
      component.msg = 'นัมจูรี 💕';
    });
  },
  unbind() {
    window.removeEventListener('resize', () => {});
  },
};

export default resize;
