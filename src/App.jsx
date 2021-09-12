import React, { useEffect, useState, Component } from "react";
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./style";
import axios from 'axios';

// axios
// .get("http://localhost:8080/pass/common/getCommCodeList?page=1&pageSize=10000")
// .then(({ data }) => console.log(data));

const App = () => {

    const baseUrl = 'http://localhost:8080'

    async function getCommCodeList() {
        await axios
            .get('/pass/common/getCommCodeList?page=1&pageSize=10000')
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    const classes = useStyles();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
        .get("/pass/common/getCommCodeList?page=1&pageSize=10000")
        .then(({ data }) => setPosts(data.list));

        // getCommCodeList()

    }, []);
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variand="h5" align="center" color="textSecondary" paragraph>
                            Hello everyone This is a photo album and I'm trying to make this sentence as long as possible so we can see how does it look like on the screen
                        </Typography>
                            <div className={classes.button}>
                                <Grid container spacing={2} justifyContent="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            See my photos
                                        </Button>
                                    </Grid>
                                    <Grid item>

                                        <Button variant="outlined" color="primary">
                                            Secondary action
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        
                    </Container>
                    
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {posts.map((post, index) => (
                            
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" >
                                            {post.codeCd}
                                        </Typography>
                                        <Typography>
                                            {post.codeNm}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="primary">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                        
                    </Grid>
                </Container>

                
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Something here to give the footer a purpose!
                </Typography>
            </footer>
        </>
    )
}

export default App;