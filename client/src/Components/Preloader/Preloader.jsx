import { CircularProgress } from '@material-ui/core'

function Preloader() {

    return <div style={{
        display: 'flex',
        justifyContent: "center",
    }}>
        <CircularProgress />
    </div>

}

export default Preloader;