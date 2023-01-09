import Identity from "./../windows/Identity"
import Experience from "./../windows/Experience"
import Jobs from "./../windows/Jobs"
import Stack from "./../windows/Stack"
import Hobby from "./../windows/Hobby"
import Contact from "./../windows/Contact"
import { useApp } from "../redux/appSlice"

const useWindowManager = () => {
    const app = useApp()

    return {
        openContact() {
            const data = {
                uuid: "contact",
                title: "title_contact",
                component: <Contact />,
                options: {
                    resizable: false,
                    size: [300, 241],
                },
            }
    
            app.addWindow(data)
        },
    openIdentity() {
        const data = {
            uuid: "identity",
            title: "title_identity",
            component: <Identity />,
            options: {
                minSize: [300, 100],
                size: [600, 680],
            },
        }

        app.addWindow(data)
    },
    openJobs() {
        const data = {
            uuid: "jobs",
            title: "title_jobs",
            component: <Jobs />,
            options: {
                minSize: [300, 100],
                size: [600, 400],
            },
        }

        app.addWindow(data)
    },

    openExperience() {
        const data = {
            uuid: "xp",
            title: "title_experience",
            component: <Experience />,
            options: {
                size: [665, 350],
                minSize: [300, 100],
            },
        }

        app.addWindow(data)
    },

    openStack() {
        const data = {
            uuid: "stack",
            title: "title_stack",
            component: <Stack />,
            options: {
                minSize: [300, 100],
                size: [930, 350],
            },
        }

        app.addWindow(data)
    },

    openHobby() {
        const data = {
            uuid: "hobby",
            title: "title_hobby",
            component: <Hobby />,
            options: {
                minSize: [300, 100],
                size: [580, 400],
            },
        }

        app.addWindow(data)
    },
}
}

export default useWindowManager
