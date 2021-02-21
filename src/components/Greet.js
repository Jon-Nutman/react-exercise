

export default function Greet(props){
    console.log(props.user1.name.first )
    return <div>Hello {props.user1.name.first} {props.user1.name.last}</div>
}