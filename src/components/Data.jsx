export default function Data(props) {
    return (
        <>
        <h1>Event Details: </h1>
        <h5>Event Name: {props.name}</h5>
        <h5>Event Time: {props.time}</h5>
        <h5>Event Requirements: {props.requirements}</h5>
        <h5>Event Duration: {props.duration}</h5>
        </>
    )
}