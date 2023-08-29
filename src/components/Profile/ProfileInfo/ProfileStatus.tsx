import React, {ChangeEvent} from 'react';

class ProfileStatus extends React.Component<any, any>{

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
       this.setState({
           ...this.state,
           editMode: true
       })
    }
    deactivateEditMode = () => {
        this.setState({
            ...this.state,
            editMode: false
        })
        this.props.updateStatusTC(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if(this.props.status != prevProps.status) {
            // console.log(this.state)
            // console.log(prevState)
            console.log("componentDidUpdate")
            this.setState({...this.state, status: this.props.status})
        }
    }

    render() {
        return <div>
            {!this.state.editMode && <div>
                <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>
            </div>}
            {this.state.editMode &&  <div>
                <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode} value={this.state.status}/>
            </div>}
        </div>;
    }
};

export default ProfileStatus;