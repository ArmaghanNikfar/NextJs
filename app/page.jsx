"use client"

import Image from "next/image";
import { Button, Grid , Paper } from "@material-ui/core";
import Link from "next/link";
export default function Home() {
  return (

  <Grid container justify="center"> 
  <Paper style={{width:"70%", marginTop:"20px" , backgroundColor:"#d6d6db"}}>
  <Grid container justify="center"> 
  <h1 className="mt-4 text-2xl font-extrabold dark:text-white">This is an pokemon project, for see the result go to the pokemon page</h1>
 <Grid container justify="center">
 <img src="/pokemon.jpg" className="pokemonHomeImage" />
 </Grid>
 <Grid container justify="center">
  <Link href='/pockemon'>
    <Button color="primary" variant="contained" className="mb-4">
      Go to Pokemon Page
    </Button>
  </Link>
 </Grid>
  </Grid>
  </Paper>
  </Grid>

  );
}
