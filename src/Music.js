import React, {Component, Fragment} from "react";
import $ from 'jquery';

class Music extends Component{
    constructor(props) {
        super(props);
        //변수
        this.state={
            detail:{}
        }
    }

    handlerClick(m)
    {
        this.setState( {detail:m} )
        //setState 후에 render 다시 호출되고 화면 변경됨
    }

    render() { /* 필수 작성 : 화면 출력 */
        /*
        * this.props.music.map(function(m){})
        *
        * map =>
        *   for(String s:list)
        *
        * {"idcrement":0,"singer":"김재환","album":"안녕","rank":1,"state":"유지","title":"안녕","poster":"~.JPG","key":"he_XQNuWhis"}
        * */
        const html=this.props.music.map((m,index)=>
            <tr onClick={this.handlerClick.bind(this,m)}>
                <td>*{m.rank}</td>
                <td><img src={m.poster} width={"35"} height={"35"}/></td>
                <td>{m.title}</td>
                <td>{m.singer}</td>
            </tr>
        )
        //<div className={"row"} style={{"margin":"0px auto","width":"700px"}}>
        return (
            <fragment>
                <h1 className={"text-center"}>Music Top50</h1>
                <div className={"col-sm-8"}>
                <table className={"table"}>
                    <tr>
                        <td>
                            <input type={"text"} id={"keyword"} size={"20"}/>
                        </td>
                    </tr>
                </table>
                <table className={"table table-hover"} id={"user-table"}>
                    <thead>
                        <tr className={"danger"}>
                            <th>순위</th>
                            <th></th>
                            <th>곡명</th>
                            <th>가수명</th>
                        </tr>
                    </thead>
                    <tbody>{html}</tbody>
                </table>
                </div>
                <div className={"col-sm-4"}>
                    <h1>상세보기</h1>
                    <MusicDetail data={this.state.detail}/>
                    <MusicDetail data={this.state.detail}/>
                    <MusicDetail data={this.state.detail}/>
                </div>
            </fragment>
        )
    }//render

    /*
    jQuery 연동
    <Music /> => constructor() => render() => componentDidMount()
        $(function(){
            $('#aa').click(function(){})
        })
    */
    componentDidMount() {
        $('#keyword').keyup(function(){
            var k=$(this).val();
            $('#user-table > tbody > tr').hide();

            var temp=$('#user-table > tbody > tr > td:nth-child(4n+3):contains("'+k+'")');
            $(temp).parent().show();
        });
    }//componentDidMount
}

class MusicDetail extends Component{
    render(){
        return(
            <Fragment>
                <iFrame src={"http://youtube.com/embed/"+this.props.data.key} width={"250"} height={"200"}></iFrame>
                <div>제목: {this.props.data.title}</div>
                <div>가수명: {this.props.data.singer}</div>
            </Fragment>
        )
    }
}
export default Music;