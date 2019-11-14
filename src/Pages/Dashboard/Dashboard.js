import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Logo from '../../assests/WeCode-logo.png';

export default () => (
    <Card style={{alignSelf:'center',textAlign: 'center',width:'800px',height:'600px'}}>
        <img src={Logo} style={{position:'inherit'}}></img>
        <h2 style={{textAlign: 'center'}}>Welcome to WeCode administrator</h2>
        {/* <CardHeader title="Welcome to WeCode administrator"/> */}
        <CardContent style={{textAlign: 'center'}} >coming soon..</CardContent>
    </Card>
);