import React,{Component} from 'react'
export default class TodoShow extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
    }

    delOneToPar(id) {
        this.props.delOneById(id)
    }

    render() {
        const lists = this.props.lists
        return (
            <div>
                <h3>评论列表</h3>
                <ul style={{listStyle: 'none'}}>
                    {
                        lists.map((item, index) => {
                            return (
                                <li key={index}>{item.text}
                                    <span onClick={() => {
                                        this.delOneToPar(item.id)
                                    }}>X</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
