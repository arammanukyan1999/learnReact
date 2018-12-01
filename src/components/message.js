import React,{Component} from 'react';

// export default class Message extends Component {
//     render(){
//         return(
//             <div>
//                 {this.props.text}
//             </div>
//         )
//     }
// }

const Msg = (props)=>(
    <div>
        {props.phrases[0] + ' ' + props.phrases[1] }
        <ul>
            {props.phrases.map((el,ind)=>(
                <li key = {ind}>
                     {el}
                </li>
            ))}
        </ul>
    </div>
);

export default Msg