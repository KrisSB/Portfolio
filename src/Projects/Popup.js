import React, { Component } from 'react';
import { Keyframes, Spring , animated } from 'react-spring'; //React spring is used for the animations on the page

const Content = Keyframes.Trail({
    open: { opacity: 1, from: { opacity: 0 }, delay: 1700 },
    close: { opacity: 0, delay: 0 },
})

export default class Popup extends Component {
    constructor() {
        super();
        this.state = {
            popupWidth: 1100,
            popupHeight: 600,
        }
    }
    render() {
        return (
            <Spring
                native
                force
                config= {{ tension: 90, friction: 40, precision: 1 }}
                from= {{
                    position: 'absolute',
                    top: this.props.popupInfo.top,
                    left: this.props.popupInfo.left,
                    height: this.props.popupInfo.height,
                    width: this.props.popupInfo.width,
                    background: '#F0F0F0',
                }}
                to= {{
                    //Centers the inner popup
                    top: ((window.innerHeight - this.state.popupHeight) / 2) + this.props.popupInfo.scrollOffset, 
                    left: (window.innerWidth - this.state.popupWidth) / 2,
                    //Determines the size of the popup
                    height: this.state.popupHeight,
                    width: this.state.popupWidth,
                }}
            >

                {props => (
                    <animated.div className='projectPopUp' style={props}>
                        {/* Content is a keyframe trail from react spring */}
                        <div className='popUpClose' onClick={this.props.handleClickPopup}>X</div>
                        <div className='popUpContainer'>
                            <Content
                                native
                                items={this.props.items}
                                keys={this.props.items.map((_, i) => i)}
                                state={this.props.state}>
                                {(item, i) => ({ x, ...props }) => (
                                <animated.div className={'popUp' + i}
                                    style={{ ...props }}>
                                    {item}
                                </animated.div>
                                )}
                            </Content>
                        </div>
                    </animated.div>
                )}
            </Spring>
        );
    }
    
}