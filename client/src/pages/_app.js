import '../css/bootstrap.min.css';
import '../css/responsive.css';
import '../css/style.css';
import Layout from '../layout/Layout'

function MyApp({Component, pageProps}){
    return  (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}
export default MyApp