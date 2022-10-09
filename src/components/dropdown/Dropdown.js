import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import '../../assets/css/drop-down.css'

export class Item extends Component {
  render() {
    const {children, clickable, ...rest} = this.props
    return <li {...rest}>{children}</li>
  }
}

class Menu extends Component {
  getStyle() {
    const {left, top, width, length} = this.props
    return {
      left: `${left}px`,
      top: `${top}px`,
      width: width || `${length}px`
    }
  }
  getItems = (item, key) => {
    const ref = li => this.items.push(li)
    return item.props.clickable
      ? React.cloneElement(item, {key, ref})
      : item
  }
  render () {
    const {visible} = this.props
    const children = Array.isArray(this.props.children)
      ? this.props.children
      : []
    this.items = []
    return  visible &&
      <ul className="buttondown" style={this.getStyle()}>
        {children.map(this.getItems)}
      </ul>
  }
}

class Dropmenu extends Component {
  constructor(props) {
    super(props)
    this.state = {visible: false}
  }
  getBounds = () => {
    const pos = ReactDOM
      .findDOMNode(this.refs.link)
      .getBoundingClientRect()
    return {
      left: pos.left,
      top: pos.bottom + 3,
      length: pos.width
    }
  }
  getTrigger = () => {
    const trigger = this.props.trigger || `click`
    if (trigger === `click`) return {onClick: this.onMouseEvent}
    if (trigger === `contextMenu`) return {
      onContextMenu: event => {
        event.preventDefault()
        this.onMouseEvent()
      }
    }
    if (trigger === `hover`) return {
      onMouseEnter: this.onMouseEvent,
      onMouseLeave: this.hideDroplist
    }
  }
  hideDroplist = event => {
    this.setState({ visible: false })
    document.removeEventListener(`click`, this.onClickOutside)
  }
  onMouseEvent = event => {
    if (!this.state.visible) {
      this.setState({ visible: true, ...this.getBounds() })
      document.addEventListener(`click`, this.onClickOutside)
    }    
  }
  onClickOutside = event => {
    if (!this.refs.menu.items) return
    for (let item of this.refs.menu.items) {
      const css = item.props ? item.props.clickable : ``
      const popup = document.getElementsByClassName(css)
      const hasPopupSomewhere = popup.length && popup[0].contains(event.target)
      const element = ReactDOM.findDOMNode(item)
      if (hasPopupSomewhere || element.contains(event.target)) {
        return
      }
    }
    this.hideDroplist()
  }
  render() {
    const {children, link, width, ...rest} = this.props
    return (
      <div {...rest} {...this.getTrigger() }>
        <div ref="link" >
          {link}
        </div>
        <Menu ref="menu" width={width} {...this.state}>
          {children}
        </Menu>
      </div>
    )
  }
}
  
export default Dropmenu