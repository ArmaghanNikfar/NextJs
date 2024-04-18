// Example for showing errors in next js

// async function getData(){
//     return new Promise((resolve,reject)=>
//      setTimeout(() => {
//         const random = Math.random()
//     if(random> 0.5){
//         reject('Failed to get data')
//     }
//     resolve()
//      }, 2000)
//     )
// }
const About = async () => {
    // await getData()
    return (
        <div className="main">
            <h1 className="h1">Let's see my expriences!</h1>
        </div>
    )

}
export default About;