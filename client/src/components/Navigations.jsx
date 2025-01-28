import {Link} from 'react-router-dom';

export default function Navigations() {
    return (
        <nav>
            <Link to = '/'>Mosaic</Link>
            <Link to = '/as'>Alternating Scale</Link>
            <Link to = '/ds2'>Descending Scale2</Link>
            <Link to = '/vas1'>Vertical Alternating Squares1</Link>
            {/* <Link to = '/vas2'>Vertical Alternating Squares2</Link> */}
            <Link to = '/klds'>Kaleidescope</Link>
        </nav>
    );
};