

export default function QuizButton(props){
    
    return(
        <div role="button" tabIndex="0" onClick={props.onclick}>
            <span>{props.name}</span>
        </div>
    )
}