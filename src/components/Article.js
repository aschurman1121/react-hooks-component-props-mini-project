
//pull the data down here 

function Article ( {titleEl, dateEl = "January 1, 1970", previewEl}) {

    return (
        <>
        <article>
            <h3>{titleEl}</h3>
            <small>{dateEl}</small>
            <p>{previewEl}</p>
        </article>
        </>
    )
}

export default Article; 