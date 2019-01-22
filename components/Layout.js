import Header from './Header'

const Layout = (props) => (
    <div >
        <Header authenticated={props.authenticated} />
        {props.children}
    </div>
)

export default Layout