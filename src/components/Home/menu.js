import React, { Component } from 'react'
import Title from '../globals/title'
import Img from "gatsby-image"

const getCategories = items => {
    let temp = items.map(items => {
        return items.node.category
        
    })
    let cat = new Set(temp);
    let catArray = Array.from(cat);
    catArray = ["all",...catArray];
    return catArray;
}
export default class menu extends Component {

    constructor(props){
        super(props);
        console.log(props.items)
        this.state = {
            items: props.items.edges,
            coffeeItems: props.items.edges,
            categories:getCategories(props.items.edges)
        };  
    }
    handleItems = (category) => {
        let temp = [...this.state.items];
        if(category === "all"){
            this.setState(()=>{
                return {coffeeItems:temp}
            })
        }
        else{
            let items = temp.filter(({node})=>
            node.category === category);
            this.setState(()=>{
                return {coffeeItems: items};
            })
        }
        
    }
    render() {
        if(this.state.items.length > 0){
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="best of our menu" />
                          {/*categories*/}
                          <div className="row mb-5">
                              <div className="col-12 max-auto text-center">
                                  {this.state.categories.map((category,index)=>{
                                        return (<button type="button" key={index}
                                        className="btn btn-yellow text-capitalize ml-3"
                                        onClick={()=>{
                                            this.handleItems(category)
                                        }}>
                                              {category}  
                                        </button>)
                                  })}
                              </div>
                          </div>
                                {/*items*/}
                            <div className="row">
                              {this.state.coffeeItems.map(({node})=>{
                                  return (
                                    <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                                    <div>
                                        <Img fixed={node.image.fixed} />     
                                    </div>   
                                        <div className="flex-grow-1 px-3">
                                            <div className="d-flex justify-content-between">
                                               <h6 className="mb-0">
                                                   <small>
                                                    {node.title}    
                                                   </small>
                                                   
                                                </h6>
                                                <h6 className="mb-0 text-yellow">
                                                    <small>
                                                    ${node.price}
                                                    </small>
                                                   
                                                </h6>  
                                            </div>    
                                            <p className="text-muted">
                                                <small>
                                                    {node.description.description}
                                                </small>            
                                            </p>
                                        </div>
                                    </div>
                                  )
                              })}
                            </div>
                    </div>
                </section>

            );
        }
        else{
            return (<section className="menu py-5">
                <div className="container">
                    <Title title="best of our menu" />
                        <div className="row">
                            <div className="col-10 col-sm-6 mx-auto text-center">
                                <h1>
                                    there are no items to display
                                </h1>
                            </div>
                        </div>
                </div>
            </section>)
        }
    }
}