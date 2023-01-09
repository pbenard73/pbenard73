import React from "react"
import Translator from "./containers/Translator"

import { createGlobalStyle } from "styled-components"
import { Provider } from "react-redux"
import store from "./redux/store"

const GlobalStyle = createGlobalStyle`
    html,
    body {
        color: #c3c3c3;
    }

    .badge {
        padding: 5px 10px;
        margin: 5px;
        background: #19181e;
        border-radius: 5px;
        font-size: 9px;
        text-transform: uppercase;
        color: white;
        font-weight: 400;
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background: #262938;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #07060b;
    }

    .windows {
        .fullscreen {
            width: calc(100vw - 2px) !important;
            height: calc(100vh - 2px) !important;
            z-index: 1100;
        }
    
        .window_container:not(.window_active) {
            opacity: 0.58;
            filter: grayscale(1);
            .window_content {
                filter: blur(2px);
            }
        }
    
        .window_content {
            overflow: auto !important;
            padding: 10px;
            height: calc(100% - 44px) !important;
        }
    
        .window {
            border: 1px solid rgb(70, 70, 70) !important;
            box-shadow: 1px 2px 3px rgb(53, 57, 74);
            background: rgba(54, 56, 69, 0.93) !important;
            .decorator {
                display:flex;
                height: 20px;
                position:relative;
                background: linear-gradient(45deg, #393844, rgb(10, 9, 14));
                .decorator_close {
                    width: 15px;
                    height: 15px;
                    display: block;
                    cursor: pointer;
                    position: relative;
                    margin-right: 10px;

                    &:before{
                        content: "";
                        transform-origin: bottom center;
                        transition: background 0.6s ease;
                        background: #969696;
                        position: absolute;
                        width: 2px;
                        height: 125%;
                        bottom: 0;
                        left: 0;
                        transform: rotate(45deg);
                    }

                    &:after{
                        content: "";
                        transform-origin: bottom center;
                        transition: background 0.6s ease;
                        background: #969696;
                        position: absolute;
                        width: 2px;
                        height: 125%;
                        bottom: 0;
                        right: 0;
                        transform: rotate(-45deg);
                    }
    
                    &:hover {
                        &:before,
                        &:after {
                            background: #d6c2bb;
                        }
                    }
                }
                .decorator_toggle {
                    width: 15px;
                    height: 15px;
                    display: block;
                    cursor: pointer;
                    position: relative;
                    margin-right: 10px;
                    &:before {
                        content: "";
                        position: absolute;
                        border: 2px solid white;
                        width: 11px;
                        height: 11px;
                        bottom: 0;
                        left: 0;
                        border-color: #969696;
                    }
                    &:hover:before {
                        border-color: #d6c2bb;
                    }
                }
            }
        }
    }
    .MuiMenu-paper {
        background: #0f0f17 !important;
        box-shadow: 0px 5px 5px -3px rgba(255, 255, 255, 0.2), 0px 8px 10px 1px rgba(255, 255, 255, 0.14),
            0px 3px 14px 2px rgba(255, 255, 255, 0.12);
    }
    
    @media screen and (max-width: 768px) {
        .windows {
            .window_container {
                z-index: 1299;
                height: calc(100vh - 51px) !important;
                width: calc(100vw) !important;
                top: 51px !important;
                transform: none !important;
                left: 0 !important;
            }
    
            .decorator_toggle {
                display: none;
            }
        }
    
        #topbar {
            width: calc(100vw);
            .top_title span {
                position: absolute;
                left: 15px;
                bottom: -4px;
                transform: none;
                font-size: 16px;
            }
            div:last-child {
                margin-right: 10px;
            }
        }
    
        .dashboard .panel {
            flex-direction: row;
            flex-wrap: wrap;
            align-content: baseline;
            .icon {
                width: 33%;
                align-items: center;
                justify-content: center;
                display: flex;
                &:nth-child(3n + 2) {
                    margin-left: auto;
                    margin-right: auto;
                }
            }
        }
    
        .desktop_better {
            width: 100%;
            text-align: center;
            margin-top: 100px;
            font-size: 12px;
        }
    }
    

`

function App() {
    return (
        <>
            <GlobalStyle />
            <Provider store={store}>
                <Translator />
            </Provider>
        </>
    )
}

export default App
