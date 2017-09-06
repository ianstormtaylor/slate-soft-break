
/**
 * A Slate plugin to add soft breaks on return.
 *
 * @param {Object} options
 *   @property {Array} onlyIn (optional)
 *   @property {Array} ignoreIn (optional)
 * @return {Object}
 */

function SoftBreak(options = {}) {
  return {
    onKeyDown(e, data, change) {
      if (data.key != 'enter') return null
      if (options.shift && e.shiftKey == false) return null

      const { startBlock } = state
      const { type } = startBlock
      if (options.onlyIn && !options.onlyIn.includes(type)) return null
      if (options.ignoreIn && options.ignoreIn.includes(type)) return null

      return change.insertText('\n')
    }
  }
}

/**
 * Export.
 */

export default SoftBreak
