import React from "react"

import Button from "@material-ui/core/Button"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"


const Contact = () => (
            <div>
                <p>
                    <Button
                        startIcon={<LinkedInIcon />}
                        variant='contained'
                        component='a'
                        rel='noreferrer'
                        href='https://www.linkedin.com/in/patrick-benard-b6133886'
                        targer='_blank'
                        style={{ width: "100%" }}
                    >
                        Linked In
                    </Button>
                </p>
                <p>
                    <Button
                        variant='contained'
                        component='a'
                        href='https://github.com/pbenard73'
                        rel='noreferrer'
                        target='_blank'
                        startIcon={<GitHubIcon />}
                        style={{ width: "100%" }}
                    >
                        Github
                    </Button>
                </p>
                <p>
                    <a rel='noreferrer' target='_blank' href='https://stackoverflow.com/users/2454790/benard-patrick'>
                        <img
                            src='https://stackoverflow.com/users/flair/2454790.png?theme=dark'
                            width='208'
                            height='58'
                            alt='profile for BENARD Patrick at Stack Overflow, Q&amp;A for professional and enthusiast programmers'
                            title='profile for BENARD Patrick at Stack Overflow, Q&amp;A for professional and enthusiast programmers'
                        />
                    </a>
                </p>
            </div>
        )
    

export default Contact
