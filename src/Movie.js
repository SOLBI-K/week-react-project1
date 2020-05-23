import React, {Component, Fragment} from "react";

//외부 파일 읽기, 서버연결 => 데이터 얻기
import axios from 'axios';

/* HTML을 가상DOM에 저장
* Mount          Update      UnMount
* =====          ======      ======
  render()  setState()=>render()
*
*
* */

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            page: 1,
            title: 'tt',
            detail: {}
        };

        console.log(">>constructor(props) call..");
    }

    render() {
        console.log(">>render() call..");
        const html=this.state.movie.map((m,index)=>
            <div className="col-md-4">
                <div className="thumbnail">
                    <a href="/w3images/lights.jpg">
                        <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                        <div className="caption">
                            <p>{m.title}</p>
                        </div>
                    </a>
                </div>
            </div>
        );

        return(
            <div className={"row"}>{html}</div>
        )
    }

    componentDidMount() {
        console.log(">>componentDidMount() call..");
        //this.setState({page:2});
        /*var _this = this;
        axios.get('http://localhost:3000/movie.json').then(function(res){
            _this.setState({movie:res.data});
        });*/
        axios.get('http://localhost:3000/movie.json').then((res)=>{
            console.log(res.data);
            this.setState({movie:res.data});
        });
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(">>shouldComponentUpdate(nextProps,nextState,nextContext) call..");
        return true;
    }
}

export default Movie