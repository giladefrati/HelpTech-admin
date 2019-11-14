import React from 'react';
import { List, Datagrid, TextField, EmailField, ReferenceField } from 'react-admin';
import MyUrlField from '../../../components/Fields/MyUrlField';

const userList = props => {
    console.log(props);
    
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField  source="id" />
                <TextField  source="name" />
                <TextField  source="Current stage" />
                <TextField  source="שדה עברית" />
                <EmailField source="email" />
                <TextField  source="address.street" />
                <TextField  source="phone" />
                <MyUrlField source="website" />
                <TextField  source="Comunity" />
                <TextField  source="Math Level" />
                <TextField  source="English Level" />
            </Datagrid>
        </List>
    );
}

export default userList;