import {Link} from 'react-router-dom';

export default function Navigations() {
    return (
        <nav>
            <Link to = '/'>Mosaic</Link>
            <Link to = '/ds1'>Descending Scale1</Link>
            <Link to = '/ds2'>Descending Scale2</Link>
        </nav>
    );
};