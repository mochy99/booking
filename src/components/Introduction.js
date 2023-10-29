function Introduction(props) {
    return (
        <>
            <h1> {props.title} </h1>
            {props.contents.map((item, index) => (
                <DisplayDiv key={index} content = {item.content} />
            ))}
        </>
    )
}
function DisplayDiv(props) {
    return <div>{props.content}</div>
}
export default Introduction;