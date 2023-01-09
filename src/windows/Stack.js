import React from "react"
import { useIntl } from "react-intl"

import { Respo } from "react-respo"

const Stack = () => {
    const intl = useIntl()

    const trans = (id, values = {}) => {
        return intl.formatMessage({ id }, values)
    }
    
        return (
            <Respo container md={450} lg={800}>
                <Respo md={6} lg={3}>
                    <div>
                        <h5>{trans("stack_front")}</h5>

                        <ul>
                            <li>CSS - SASS - LESS</li>
                            <li>EJS</li>
                            <li>Handlebars</li>
                            <li>Javascript</li>
                            <li>Jquery</li>
                            <li>Mustache</li>
                            <li>Nunjunk</li>
                            <li>React.JS</li>
                            <li>Redux Thunk</li>
                            <li>Redux</li>
                            <li>Twig</li>
                            <li>TwigJs</li>
                            <li>Webpack</li>
                        </ul>
                    </div>
                </Respo>
                <Respo md={6} lg={3}>
                    <div>
                        <h5>{trans("stack_back")}</h5>

                        <ul>
                            <li>Express JS</li>
                            <li>NodeJS</li>
                            <li>PHP 5 & 7</li>
                            <li>Symfony 3 & 4</li>
                        </ul>
                    </div>
                </Respo>
                <Respo md={6} lg={3}>
                    <div>
                        <h5>{trans("stack_db")}</h5>

                        <ul>
                            <li>Doctrine</li>
                            <li>MySQL</li>
                            <li>PostgreSQL</li>
                            <li>Redis Cache</li>
                            <li>Sequelize</li>
                        </ul>
                    </div>
                </Respo>
                <Respo md={6} lg={3}>
                    <div>
                        <h5>{trans("stack_misc")}</h5>

                        <ul>
                            <li>Docker</li>
                            <li>Nginx</li>
                            <li>Webpack</li>
                            <li>GIMP</li>
                            <li>Git</li>
                            <li>Jenkins</li>
                            <li>RocketChat Api</li>
                            <li>SVN</li>
                        </ul>
                    </div>
                </Respo>
            </Respo>
        )
    
}

export default Stack
