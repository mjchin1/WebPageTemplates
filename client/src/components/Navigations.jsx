import {Link} from 'react-router-dom';

export default function Navigations() {
    return (
        <nav>
            <Link to = '/'>Mosaic</Link>
            <Link to = '/ds'>Descending Scale</Link>
        </nav>
    );
};