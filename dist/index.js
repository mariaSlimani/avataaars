import PropTypes from 'prop-types'
import React, { Component } from 'react'
import AvatarComponent from './avatar'
import { allOptions, Option, OptionContext } from './options'
import PieceComponent from './avatar/piece'

class AvatarWrapper extends Component {
  constructor(props) {
    super(props)
    this.optionContext = new OptionContext(allOptions)
    this.updateOptionContext(props)
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.updateOptionContext(this.props)
    }
  }

  updateOptionContext(props) {
    const data = {}
    for (const option of allOptions) {
      const value = props[option.key]
      if (value) {
        data[option.key] = value
      }
    }
    this.optionContext.setData(data)
  }

  render() {
    const { avatarStyle, style, className } = this.props
    return (
      <OptionContext.Provider value={this.optionContext}>
        <AvatarComponent
          avatarStyle={avatarStyle}
          style={style}
          className={className}
        />
      </OptionContext.Provider>
    )
  }
}

AvatarWrapper.propTypes = {
  avatarStyle: PropTypes.any,
  style: PropTypes.any,
  className: PropTypes.string,
}

class PieceWrapper extends Component {
  constructor(props) {
    super(props)
    this.optionContext = new OptionContext(allOptions)
    this.updateOptionContext(props)
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.updateOptionContext(this.props)
    }
  }

  updateOptionContext(props) {
    const data = {}
    for (const option of allOptions) {
      const value = props[option.key]
      if (value) {
        data[option.key] = value
      }
    }
    this.optionContext.setData(data)
  }

  render() {
    const { avatarStyle, style, pieceType, pieceSize, viewBox } = this.props
    return (
      <OptionContext.Provider value={this.optionContext}>
        <PieceComponent
          avatarStyle={avatarStyle}
          style={style}
          pieceType={pieceType}
          pieceSize={pieceSize}
          viewBox={viewBox}
        />
      </OptionContext.Provider>
    )
  }
}

PieceWrapper.propTypes = {
  avatarStyle: PropTypes.any,
  style: PropTypes.any,
  pieceType: PropTypes.string,
  pieceSize: PropTypes.string,
  viewBox: PropTypes.string,
}

export {
  AvatarWrapper as Avatar,
  PieceWrapper as Piece,
  allOptions,
  Option,
  OptionContext,
}
