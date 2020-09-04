import React from 'react'
// 定义props和state的类型接口
interface IProps {
    add: () => void;
}
interface IState {
    msg: string
}

//把props和state的类型接口传入组件
class Child extends React.Component<IProps,IState>{
    constructor(props: IProps){
        super(props);
        this.state = {
            msg: '我是页面home'
        }
    }
    render(){
        const { msg } = this.state
        return(
            <div onClick={this.props.add}>{msg}</div>
        )
    }
}

export default Child