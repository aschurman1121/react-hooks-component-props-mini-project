import Article from './Article';
//grab each of the posts here
//assign the data to the right elements in article
//take the article list & place it inside the main 


function ArticleList ( {allPost} ) {

    const thePost =  allPost.map((post) => {
        return <Article 
        key = {post.id}
        titleEl = {post.title}
        dateEl = {post.date}
        previewEl = {post.preview} 
            />}
        );
    return (
      <main> 
          {thePost}
      </main>
    )
}
``
export default ArticleList;





