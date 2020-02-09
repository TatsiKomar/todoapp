import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class TodoModal extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title: '',
            description: '',
            status: ''
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3000/todos/${this.props.todoId}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(todo => {
                console.log(todo);
                const {id, ...restProps} = todo;
                this.setState({
                    ...restProps
                });
            })
    }

    render() {
        const [setOpen] = React.useState(false);
        const handleClose = () => {
            setOpen(false);
        };
        return (
            <Dialog open={!!this.props.todoId}
                onClose={this.props.onCloseModal}
            >
                <DialogTitle>
                    {this.state.title}
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus
                            onClick={handleClose}
                            color="primary"
                    >
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default TodoModal;