import React from "react"

import { Respo } from "react-respo"

import hoc from './../hocs/main'

class Stack extends React.Component {
	constructor(props) {
		super(props)
	}
    render() {
        return (
            <Respo container md={600} lg={900}>
                <Respo md={6} lg={3}>
                    <div>
                        <h5>Front</h5>

                        <ul>
                            <li>React.JS</li>
                            <li>Redux</li>
                            <li>Redux Thunk</li>
                            <li>Jquery</li>
                            <li>Javascript</li>
                            <li>Twig</li>
                            <li>TwigJs</li>
                            <li>Nunjunk</li>
                            <li>EJS</li>
                            <li>Mustache</li>
                            <li>Handlebars</li>
                            <li>CSS - SASS - LESS</li>
                            <li>Webpack</li>
                        </ul>
                    </div>
                </Respo>
                <Respo md={6} lg={3}>
                    <div>
                        <h5>Back</h5>

                        <ul>
                            <li>NodeJS</li>
                            <li>Express JS</li>
                            <li>PHP 5 & 7</li>
                            <li>Symfony 3 & 4</li>
                        </ul>
                    </div>
                </Respo>
                <Respo md={6} lg={3}>
                    <div>
                        <h5>Base de données / Cache</h5>

                        <ul>
                            <li>PostgreSQL</li>
                            <li>MySQL</li>
                            <li>Redis Cache</li>
                            <li>Doctrine</li>
                            <li>Sequelize</li>
                        </ul>
                    </div>
                </Respo>
                <Respo md={6} lg={3}>
                    <div>
                        <h5>Infographie</h5>

                        <ul>
                            <li>GIMP</li>
                        </ul>
                    </div>
                </Respo>
            </Respo>
        )
    }
}



export default hoc()(Stack)
