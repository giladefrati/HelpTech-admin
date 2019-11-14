import React from 'react';
import { Filter,List,Create, Datagrid,TextInput,SimpleForm,ReferenceInput,SelectInput,LongTextInput, TextField, ReferenceField,EditButton,Edit,DisabledInput} from 'react-admin';
// import PostEdit from './PostEdit/PostEdit';



export const PostList = props => (
    <List {...props} filters={<PostFilter />}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="body" />
            <EditButton/>
        </Datagrid>
    </List>
);


export const PostEdit = props => (
    <Edit {...props} title={<PostTitle />}>
    <SimpleForm>
           <DisabledInput source="id" />
            <ReferenceInput source="userId" reference="users">
               <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
           <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="username" />
        </ReferenceInput>
    </Filter>
);