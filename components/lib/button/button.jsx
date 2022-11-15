import Icon from '../icon'
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar)

import buttonTypes from './buttonTypes'
const props = buttonTypes()
export default {
  name: 'LButton',
  props: {
    ...props,
  },
  data() {
    return {
      clicked: false,
      sLoading: !!this.loading,
      hasTwoCNChar: false,
    }
  },
  computed: {
    classes() {
      const { prefixCls, sLoading } = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-loading`]: sLoading,
      }
    },
    iconType() {
      const { sLoading, icon } = this
      return sLoading ? 'loading' : icon
    },
  },
  watch: {
    loading(val) {
      clearTimeout(this.delayTimeout)
      if (typeof val !== 'boolean' && val && val.delay) {
        this.delayTimeout = setTimeout(() => {
          this.sLoading = !!val
        }, val.delay)
      } else {
        this.sLoading = !!val
      }
    },
  },
  mounted() {
    this.fixTwoCNChar()
    console.log('mounted')
  },
  updated() {
    this.fixTwoCNChar()
    console.log('updated')
  },
  methods: {
    fixTwoCNChar() {
      // Fix for HOC usage like <FormatMessage />
      const node = this.$el
      const buttonText = node.textContent || node.innerText
      if (this.isNeedInserted() && isTwoCNChar(buttonText)) {
        if (!this.hasTwoCNChar) {
          this.hasTwoCNChar = true
        }
      } else if (this.hasTwoCNChar) {
        this.hasTwoCNChar = false
      }
    },
    handleClick() {
      this.$emit('click', event)
    },
    insertSpace(child, needInserted) {
      const SPACE = needInserted ? ' ' : ''
      if (typeof child.text === 'string') {
        let text = child.text.trim()
        if (isTwoCNChar(text)) {
          text = text.split('').join(SPACE)
        }
        return <span>{text}</span>
      }
      return child
    },
    isNeedInserted() {
      const { loading, icon, $slots } = this
      const iconType = loading ? 'loading' : icon
      return $slots.default && $slots.default.length === 1 && (!iconType || iconType === 'loading')
    },
  },
  render() {
    const { iconType, htmlType, classes, disabled, handleClick, $slots, $attrs, $listeners } = this
    const buttonProps = {
      props: {},
      attrs: {
        ...$attrs,
        type: htmlType,
        disabled,
      },
      class: classes,
      on: {
        ...$listeners,
        click: handleClick,
      },
    }
    const kids =
      $slots.default && $slots.default.length === 1
        ? this.insertSpace($slots.default, this.isNeedInserted())
        : $slots.default
    return (
      <button {...buttonProps}>
        {iconType ? <Icon type={iconType}></Icon> : null}
        {kids}
      </button>
    )
  },
}
