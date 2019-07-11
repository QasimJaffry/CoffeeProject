import React from "react"
import { Link, graphql } from "gatsby"
import Info from '../components/Home/info'
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import BackgroundSection from '../components/globals/backgroundSection'
import Menu from '../components/Home/menu'
import Products from '../components/Home/products'
import Contact from '../components/Home/contact'
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={
      ['gatsby', 'application', 'react']
    } />
  <BackgroundSection img={data.img.childImageSharp.fluid} title="regular joe's" styleClass="default-background" />
  <Info />
  <Menu items={data.menu}/>
  <Products />
  <Contact />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath:{
      eq:"default-background.jpeg"
    }){
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem{
      edges{
        node{
          id
          title
          description{
            description
          }
          price
          category
          image{
            fixed(width: 50,height: 50){
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`;


export default IndexPage