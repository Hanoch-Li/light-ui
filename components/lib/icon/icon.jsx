export default {
  name: 'LIcon',
  props: {
    prefixCls: {
      type: String,
      default: 'lighticon',
    },
    type: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      clicked: false,
    }
  },
  computed: {
    classes() {
      const { prefixCls, type } = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${type}`]: type,
      }
    },
  },
  beforeDestroy() {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  },
  methods: {
    handleClick() {
      // 防止多次点击
      if (this.clicked) {
        return
      }
      this.clicked = true
      this.timeout = setTimeout(() => (this.clicked = false), 500)
      this.$emit('click', event)
    },
  },
  render() {
    const { title, classes, handleClick, $listeners } = this
    const iconProps = {
      attrs: {
        title,
      },
      class: classes,
      on: {
        ...$listeners,
        click: handleClick,
      },
    }
    return <i {...iconProps} />
  },
}
