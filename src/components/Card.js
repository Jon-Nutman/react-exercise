export default function Card(props){
    const firstName1 = props.user1.name.first
    const lastName1 = props.user1.name.last
    const phone1 = props.user1.phone

    const firstName2 = props.user2.name.first
    const lastName2 = props.user2.name.last
    const phone2 = props.user2.phone
  
  
    // console.log(firstName)
    return <div className='card'>
<div>Name: {firstName1}{lastName1}</div>
<p>Phone: {phone1 ? phone1 : 'N/A'}</p>
    <div>Name: {firstName2}{lastName2}</div>
    <p>Phone: {phone2 ? phone2 : 'N/A'}</p>
        </div>
}