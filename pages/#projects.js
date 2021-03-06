/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

import styles from '../styles/Projects/Projects.module.scss'
import Project from '../components/projects/project'
import { projectsData } from '../components/projects/projectsData'
import useCurrentSection from '../components/hooks/useCurrentSection'
import useIntersection from '../components/hooks/useIntersection'

export default function Projects() {
    const projectsRef = useRef()
    const projectsContainerRef = useRef()
    const projectsVisible = useIntersection(projectsContainerRef, '-300px')
    const animation = useAnimation()

    useEffect(() => {
        if (projectsVisible) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: 2,
                },
            })
            return
        }

        animation.start({
            x: '-50vw',
            transition: {
                type: 'spring',
                duration: 2,
            },
        })
    }, [projectsVisible])

    useCurrentSection(projectsRef, '-50%', '/#projects')

    const Projects = projectsData.map(
        ({ id, imgSrc, imgAlt, projectTitle, projectDesc }) => {
            return (
                <Project
                    key={id}
                    imgSrc={imgSrc}
                    imgAlt={imgAlt}
                    projectTitle={projectTitle}
                    projectDesc={projectDesc}
                />
            )
        }
    )

    return (
        <section className={styles.Projects} id="projects" ref={projectsRef}>
            <h2 className={styles.title}>My Projects</h2>
            <div
                className={styles.projectContainer}
                ref={projectsContainerRef}
                // animate={animation}
            >
                {Projects}
            </div>
        </section>
    )
}
