import React from 'react';
import { Admin, Resource, } from 'react-admin';
import {PostList, PostEdit, PostCreate } from './Pages/Posts/Posts';
import UserList from './Pages/Posts/Users/Users';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Pages/Dashboard/Dashboard';
import AuthProvider from '../src/AuthProvider';
import { createMuiTheme } from '@material-ui/core/styles';

//ra-data-json-server data provider, which speaks the same REST dialect as JSONPlaceholder.
import jsonServerProvider from 'ra-data-json-server';

//dataProvider prop - a function capable of fetching data from an API
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


//The line <Resource name="users" /> informs react-admin to fetch the “users” records from the http://jsonplaceholder.typicode.com/users URL.
//The list={ListGuesser} prop means that react-admin should use the <ListGuesser> component to display the list of posts
const App = () => (
      <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={AuthProvider} theme={theme} >
        <Resource name="users" list={UserList} icon={UserIcon} />
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
      </Admin>
  );
  
export default App;
