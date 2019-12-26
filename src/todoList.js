import React from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'

const TodoList = (props) => {
    const { inputValue, list, inputChange, onAdd, onDel } = props

    return (
        <div>
            <Input style={{ width: '250px' }} value={inputValue} onChange={inputChange} />
            <Button type="primary" onClick={onAdd}>增加</Button>
            <List
                bordered
                dataSource={list}
                renderItem={(item, index) => (<List.Item onDoubleClick={() => onDel(index)}>{item}</List.Item>)}
            />
        </div>
    )
}

const stateToProps = (state) => {
    const { inputValue, list } = state
    return {
        inputValue,
        list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'changeValue',
                value: e.target.value
            }
            dispatch(action)
        },
        onAdd() {
            let action = {
                type: 'add'
            }
            dispatch(action)
        },
        onDel(index) {
            let action = {
                type: 'del',
                index
            }
            dispatch(action)
        }
    }
}

export default connect(stateToProps, dispatchToProps)(TodoList)
