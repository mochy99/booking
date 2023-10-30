function Schedule(props) {
    return (
        <>
        <section className="table">
            <h3> {props.title} </h3>
            {props.schedules.map((item, index) => (
                <DisplaySchdule key={index} content={item}/>
            ))}
        </section>
        </>
    )
}
function DisplaySchdule(props) {
    return (
        <>
            <h4>{props.content.date}</h4>
            <div>{props.content.name}</div>
            <div>{props.content.email}</div>
            <div>{props.content.location}</div>
            <div>{props.content.description}</div>
        </>
    )
}

export default Schedule;