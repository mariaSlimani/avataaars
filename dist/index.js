var PropTypes = require('prop-types')
var React = require('react')
var avatar_1 = require('./avatar')
var options_1 = require('./options')
var avatar_2 = require('./avatar')
var options_2 = require('./options')
var piece_1 = require('./avatar/piece')

class AvatarComponent extends React.Component {
  constructor(props) {
    super(props)
    this.optionContext = new options_1.OptionContext(options_1.allOptions)
    this.updateOptionContext(props)
  }

  static getDerivedStateFromProps(nextProps) {
    this.updateOptionContext(nextProps)
    return null
  }

  updateOptionContext(props) {
    var data = {}
    for (var option of options_1.allOptions) {
      var value = props[option.key]
      if (value) {
        data[option.key] = value
      }
    }
    this.optionContext.setData(data)
  }

  render() {
    var { avatarStyle, style, className } = this.props
    return React.createElement(avatar_1.default, {
      avatarStyle: avatarStyle,
      style: style,
      className: className,
    })
  }

  render() {
    var { avatarStyle, style, pieceType, pieceSize, viewBox } = this.props
    return React.createElement(piece_1.default, {
      avatarStyle: avatarStyle,
      style: style,
      pieceType: pieceType,
      pieceSize: pieceSize,
      viewBox: viewBox,
    })
  }

  getChildContext() {
    return { optionContext: this.optionContext }
  }
}

AvatarComponent.childContextTypes = {
  optionContext: PropTypes.instanceOf(options_1.OptionContext),
}

exports.Avatar = avatar_2.default
exports.AvatarStyle = avatar_2.AvatarStyle
exports.Option = options_2.Option
exports.OptionContext = options_2.OptionContext
exports.allOptions = options_2.allOptions

class Piece extends React.Component {
  constructor(props) {
    super(props)
    this.optionContext = new options_1.OptionContext(options_1.allOptions)
    this.updateOptionContext(props)
  }

  static getDerivedStateFromProps(nextProps) {
    this.updateOptionContext(nextProps)
    return null
  }

  updateOptionContext(props) {
    var data = {}
    for (var option of options_1.allOptions) {
      var value = props[option.key]
      if (value) {
        data[option.key] = value
      }
    }
    this.optionContext.setData(data)
  }

  render() {
    var { avatarStyle, style, pieceType, pieceSize, viewBox } = this.props
    return React.createElement(piece_1.default, {
      avatarStyle: avatarStyle,
      style: style,
      pieceType: pieceType,
      pieceSize: pieceSize,
      viewBox: viewBox,
    })
  }

  getChildContext() {
    return { optionContext: this.optionContext }
  }
}

Piece.childContextTypes = {
  optionContext: PropTypes.instanceOf(options_1.OptionContext),
}

exports.Piece = Piece
