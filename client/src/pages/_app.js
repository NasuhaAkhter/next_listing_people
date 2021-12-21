import '../css/bootstrap.min.css';
import '../css/responsive.css';
import '../css/style.css';
import Layout from '../layout/Layout'
import axios from 'axios';
 
function MyApp({Component, pageProps}){
    return  (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}
// MyApp.getInitialProps = async ( context ) => {
   
//     const res = await fetch('http://localhost:3333/getPeoples')
//     const people = await res.json()
//     return { props: people }
//   }
export default MyApp