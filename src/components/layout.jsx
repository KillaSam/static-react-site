import React from 'react';
import Header from './header';
import Footer from './footer';
import Img from 'gatsby-image';
import '../style/style.css';
import { useStaticQuery, graphql } from "gatsby"

export default function Layout({fBlockTitle, fBlockDesc, sBlockImg, sBlockTitle, sBlockDesc, tBlockImg, tBlockBgImg, tBlockTitle, tBlockDesc}){

    const sDesc = sBlockDesc.map((desc, i) => <span key={i}>{desc}<br /><br /></span>);
    const tDesc = tBlockDesc.map((desc, i) => <span key={i}>{desc}<br /><br /></span>);

    const allImages  = useStaticQuery(
        graphql`
            query MyQuery {
                images: allFile {
                    nodes {
                        relativePath
                        id
                        childImageSharp {
                            fixed {          
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        `
    )
    
    return (
        <div>
            <Header />
            <div className="mainPart">
                <div className="mainPart-title">
                    {fBlockTitle}
                </div>
                <div className="mainPart-desc">
                    {fBlockDesc}
                </div>                
                <div className="mainPart-filter"></div>
            </div>
            <div className="secondBlock">
                <div className="secondBlock__wrapper">
                    {allImages.images.nodes.map(img => {
                        if(img.relativePath === sBlockImg){
                            let currData = {...img.childImageSharp.fixed};
                            currData.height = 220;
                            currData.width = 220;
                            return (<Img key={img.id} fixed={currData} />);
                        }else{
                            return '';
                        }
                    })}
                    <div className="secondBlock__wrapper__text">
                        <p className="secondBlock__wrapper__text-title">{sBlockTitle}</p>
                        <p className="secondBlock__wrapper__text-desc"><br />{sDesc}</p>
                    </div>
                </div>
            </div>
            <div className="thirdBlock">
                <div className="thirdBlock__wrapper">
                    <div className="thirdBlock__wrapper__text">
                        <p className="thirdBlock__wrapper__text-title">{tBlockTitle}</p>
                        <p className="thirdBlock__wrapper__text-desc">{tDesc}</p>                        
                    </div> 
                    {allImages.images.nodes.map(img => (img.relativePath === tBlockImg ? (<Img style={{zIndex: '2'}} key={img.id} fixed={img.childImageSharp.fixed} />) : ''))}
                    {allImages.images.nodes.map(img => {
                        if(img.relativePath === tBlockBgImg){
                            return (<Img style={{position: 'absolute', zIndex: '-1', width: '100%', height: '100%', top: '0', left: '0'}} key={img.id} fixed={img.childImageSharp.fixed} />);
                        }else{
                            return '';
                        }
                    })}
                    <div className="thirdBlock__wrapper-filter"></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
