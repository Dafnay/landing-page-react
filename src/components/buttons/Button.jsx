import './button.css'


export default function Button(props){
 
    return (
    <>
    <button className={props.style}>{props.button_text}</button>
    </>
    )

}
