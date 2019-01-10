import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import { URL_API } from "./Constants";

const styles = theme => ({
  root: {
    width: "100%",
    position: "relative",
    overflow: "auto",
    maxHeight: 500
  },
  listSection: {
    width: "100%",
    backgroundColor: "inherit"
  },
  ul: {
    width: "100%",
    backgroundColor: "inherit",
    padding: 0
  }
});

class UserChatList extends Component {
  state = {
    users: []
  };

  componentWillMount() {
    axios.get(URL_API).then(response => {
      this.setState({ users: response.data.results });
    });
  }

  render() {
    let { users } = this.state;
    let { classes } = this.props;

    return (
      <List className={classes.root}>
        {users.map(user => (
          <ListItem button divider>
            <Avatar src={user.picture.thumbnail} />
            <ListItemText
              primary={`${user.name.first} ${user.name.last}`}
              secondary={user.location.street}
            />
          </ListItem>
        ))}
      </List>
    );
  }
}

UserChatList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserChatList);
