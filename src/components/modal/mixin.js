export default {
  methods: {
    enter(el, done) {
      this.$nextTick(() => {
        this.$refs.mask.classList.add('mask-enter');
        this.$refs.confirm.classList.add('confirm-enter');
      });
      setTimeout(() => {
        done();
      }, 200);
    },
    afterEnter() {
      this.$refs.mask.classList.remove('mask-enter');
      this.$refs.confirm.classList.remove('confirm-enter');
    },
    leave(el, done) {
      this.$refs.mask.classList.add('mask-leave');
      this.$refs.confirm.classList.add('confirm-leave');
      setTimeout(() => {
        done();
      }, 200);
    },
    afterLeave() {
      this.$refs.mask.classList.remove('mask-leave');
      this.$refs.confirm.classList.remove('confirm-leave');
    }
  }
};
