import blogData from "../data/blog";



function About ( {defaultImage = 'https://via.placeholder.com/215'} ) 
{
    return (
    <> 
        <aside>
        <img src={defaultImage} />
        <p> About</p>
        </aside>
     </>

    )
   
    
}

export default About; 