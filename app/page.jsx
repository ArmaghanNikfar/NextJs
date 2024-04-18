import Head from 'next/head';
import { Grid, Card, CardContent, Typography, TextField, Button, Avatar } from '@mui/material';
export default function Home() {
  
  return (

    <div className='main'>
     
      <div className='mt-10'>
        <Head>
          <title>Armaghan's Digital Nook </title>
          <meta name='description' content='Welcome to Armaghan Digital Nook' />
          <link rel="icon" href='/favicon.ico' />
        </Head>
        <main>
          <Grid container spacing={3}>
            <Grid item>
              <h1>Hey, I'm Armaghan </h1>
            </Grid>
          </Grid>
          <div className='intro'>
            <p>Welcome to my digital nook.
              I'm a web developer, software engineer from Iran.
              And here, I share what i've been working on recently and things I learned along the way.
            </p>
            <Avatar className='avatar' src="/IMG_6740.jpg" />
          </div>
          <section className='section2'>
            <h1>Popular Videos for NextJs</h1>
            <ul className='mb-6'>
              <a href='https://www.youtube.com/watch?v=Eh3EpwqT4cM' target='_blank'>
                <div className="border-b border-gray-200 py-3 transition-transform hover:scale-[1.01] dark:border-gray-700">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="flex h-10 w-12 items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400">01</div>
                    <div className="flex w-full flex-col gap-x-6 gap-y-1 sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="font-medium">Protect your NextJs 13 app using Next-Auth</h4>
                      <div className="flex items-center justify-start gap-2">
                        <p className=" text-gray-500 dark:text-gray-400">
                          <span>76K</span>
                          <span className="ml-1.5 text-[13px] text-gray-400">views</span>
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mt-1 h-4 w-4 fill-red-400">
                          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd">
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href='https://www.youtube.com/watch?v=mOvW3iheF14' target='_blank'>
                <div className="border-b border-gray-200 py-3 transition-transform hover:scale-[1.01] dark:border-gray-700">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="flex h-10 w-12 items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400">02</div>
                    <div className="flex w-full flex-col gap-x-6 gap-y-1 sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="font-medium">How to connect your NextJs app to MongoDB</h4>
                      <div className="flex items-center justify-start gap-2">
                        <p className=" text-gray-500 dark:text-gray-400">
                          <span>37K</span>
                          <span className="ml-1.5 text-[13px] text-gray-400">views</span>
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mt-1 h-4 w-4 fill-red-400">
                          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd">
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href='https://www.youtube.com/watch?v=L5JU1oR29TM' target='_blank'>
                <div className="border-b border-gray-200 py-3 transition-transform hover:scale-[1.01] dark:border-gray-700">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="flex h-10 w-12 items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400">03</div>
                    <div className="flex w-full flex-col gap-x-6 gap-y-1 sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="font-medium">NextJS 13 Introduction - Building a fullstack app using Prisma & Mongodb</h4>
                      <div className="flex items-center justify-start gap-2">
                        <p className=" text-gray-500 dark:text-gray-400">
                          <span>28K</span>
                          <span className="ml-1.5 text-[13px] text-gray-400">views</span>
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mt-1 h-4 w-4 fill-red-400">
                          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd">
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href='https://www.youtube.com/watch?v=3Dw6D_WuzSE' target='_blank'>
                <div className="border-b border-gray-200 py-3 transition-transform hover:scale-[1.01] dark:border-gray-700">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="flex h-10 w-12 items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400">04</div>
                    <div className="flex w-full flex-col gap-x-6 gap-y-1 sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="font-medium">Server vs client components in NextJs 13 – When to use which</h4>
                      <div className="flex items-center justify-start gap-2">
                        <p className=" text-gray-500 dark:text-gray-400">
                          <span>28K</span>
                          <span className="ml-1.5 text-[13px] text-gray-400">views</span>
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mt-1 h-4 w-4 fill-red-400">
                          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd">
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href='https://www.youtube.com/watch?v=hA0Wp3KQYGU' target='_blank'>
                <div className="border-b border-gray-200 py-3 transition-transform hover:scale-[1.01] dark:border-gray-700">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="flex h-10 w-12 items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400">05</div>
                    <div className="flex w-full flex-col gap-x-6 gap-y-1 sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="font-medium">Internationalization in NextJs 13</h4>
                      <div className="flex items-center justify-start gap-2">
                        <p className=" text-gray-500 dark:text-gray-400">
                          <span>28K</span>
                          <span className="ml-1.5 text-[13px] text-gray-400">views</span>
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mt-1 h-4 w-4 fill-red-400">
                          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd">
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </ul>
            <a href='https://www.youtube.com/@hamedbahram' className='hover:text-blue-500' target='_blank'>
              Watch all videos
            </a>
          </section>
          <section className='section3'>
            <h1 className='mb-7'>My Recent Projects</h1>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Card className='card'>
                <h3 className='px-5 py-5 uppercase font-bold text-lg text-zinc-500 tracking-wide'>React Js</h3>
                  <CardContent>
                    <h3 className='font-semibold'>Dashboard Pannel</h3>
                    <Typography>A Dashboard pannel for shatel company built with React Js, Material UI, TailwindCss, and React Auth.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className='card'>
                <svg className='cardNextLogo' viewBox="0 0 148 90" version="1.1" xmlns="http://www.w3.org/1999/xlink"><path d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z" fill="currentColor" fill-rule="nonzero"></path></svg>
                  <CardContent>
                    <h3 className='font-semibold'>NextJs Personal Website</h3>
                    <Typography>A personal website with nextjs that shared personal information.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className='card'>
                  <h3 className='px-5 py-5 uppercase font-bold text-lg text-zinc-500 tracking-wide'>Extentions</h3>
                  <CardContent>
                    <h3 className='font-semibold'>Chrome & Firefox extentions</h3>
                    <Typography>usefull extentions for firefox and chrome, using Java script, Jquery.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className='card'>
                  <svg className='cardNextLogo' viewBox="0 0 148 90" version="1.1" xmlns="http://www.w3.org/1999/xlink"><path d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z" fill="currentColor" fill-rule="nonzero"></path></svg>
                  <CardContent>
                    <h3 className='font-semibold'>NextJS Portfolio Site</h3>
                    <Typography>A personal portfolio site built with NextJS and MDX</Typography>
                  </CardContent>
                </Card>
              </Grid>
                 <Grid item xs={6}>
                <Card className='card'>
                <h3 className='px-5 py-5 uppercase font-bold text-lg text-zinc-500 tracking-wide'>React Js</h3>
                  <CardContent>
                    <h3 className='font-semibold'>English school website</h3>
                    <Typography>A website for english school with online classes using React Js, BigBlueButton config</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className='card'>
                  <svg className='cardNextLogo' viewBox="0 0 148 90" version="1.1" xmlns="http://www.w3.org/1999/xlink"><path d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z" fill="currentColor" fill-rule="nonzero"></path></svg>
                  <CardContent>
                    <h3 className='font-semibold'>FTP App</h3>
                    <Typography>A app with next js that can login to an ftp server and read data from there and display them</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            
          </section>
          <section className='section4'>
            <Grid container justifyContent={'center'}>
              <Card className='subscribeCard'>
                <CardContent>
                  <h3 className='text-xl font-bold text-white'>Subscribe to my newsletter</h3>
                  <p className='text-sm text-gray-400'>Get updates on my new notes</p>
                  <Grid container spacing={2} style={{ marginTop: "6px" }}>
                    <Grid item xs={10}>
                      <TextField className='textField' type='text' placeholder='Your email' />
                    </Grid>
                    <Grid item xs={1}>
                      <Button className='p-2' variant='contained'>
                        Subscribe
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </section>
        </main>
      </div>
      <footer
        className="flex mt-7 flex-col items-center bg-neutral-200 text-center text-white dark:bg-neutral-600">
        <div className="container pt-9">
          <a href="#!" className="mr-9 hover:text-blue-500 text-neutral-800 dark:text-neutral-200">
            Work With Me
          </a>
          <a href="#!" className="mr-9 hover:text-blue-500 text-neutral-800 dark:text-neutral-200">
            Projects
          </a>
          <a href="#!" className="mr-9 hover:text-blue-500 text-neutral-800 dark:text-neutral-200">
            Notes
          </a>
          <a href="#!" className="mr-9 hover:text-blue-500 text-neutral-800 dark:text-neutral-200">
            Courses
          </a>
          <a href="#!" className="mr-9 hover:text-blue-500 text-neutral-800 dark:text-neutral-200">
            Contact
          </a>
          <a href="#!" className="mr-9 hover:text-blue-500 text-neutral-800 dark:text-neutral-200">
            Partners
          </a>
          <div className="mb-9 mt-9 flex justify-center">
            <a href="#!" className="mr-9 text-neutral-800 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#!" className="mr-9 text-neutral-800 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#!" className="mr-9 text-neutral-800 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fill-rule="evenodd"
                  clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#!" className="mr-9 text-neutral-800 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#!" className="mr-9 text-neutral-800 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a href="#!" className="text-neutral-800 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
        <div
          className="w-full bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
          © 2024 Armaghan Nikfar Media, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
