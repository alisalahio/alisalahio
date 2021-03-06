/**
 * Projects component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { scale } from "../utils/typography"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      site {
        siteMetadata {
          projects {
            title
            url
            description
          }
        }
      }
    }
  `)

  const { projects } = data.site.siteMetadata
  return (
    <div>
      <div>
        <h3
          style={{
            ...scale(0.2),
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            marginBottom: 0,
            color: "grey",
            textTransform: "uppercase",
          }}
        >
          Current projects
        </h3>
      </div>
      <div style={{ marginTop: 40 }}>
        {projects.map(project => {
          const { title, description, url, moreLinks } = project
          return (
            <div 
              key={title} 
              style={{ 
                display: `flex`,
              }}
            >
              <p>
                <a
                  href={url}
                  style={{ 
                    fontWeight: 900,
                    boxShadow: `none`, 
                    textDecoration: `none`, 
                    ...scale(0.4),
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {title}
                </a>
                <p>
                  {description}
                </p>
                {moreLinks &&
                  moreLinks.map(link => (
                    <a
                      key={link.url}
                      href={link.url}
                      style={{ marginLeft: 10 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.type}
                    </a>
                  ))}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
