import Classfiy from '../img/nav/classfiy.svg'
import ClassfiyOn from '../img/nav/classfiy_on.svg'
import my from '../img/nav/my.svg'
import myOn from '../img/nav/my_on.svg'
import Search from '../img/nav/search.svg'
import SearchOn from '../img/nav/search_on.svg'
import Shelf from '../img/nav/shelf.svg'
import ShelfOn from '../img/nav/shelf_on.svg'
import { useLocation,history } from 'umi'

export default function BottomNav() {
    return <div className="flex justify-evenly border-t border-Gray-200 py-1">
        <RouteButton img={Search} imgOn={SearchOn} title="找书" route="/" />
        <RouteButton img={Classfiy} imgOn={ClassfiyOn} title="分类" route="/classfiy" />
        <RouteButton img={Shelf} imgOn={ShelfOn} title="书架" route="/shelf" />
        <RouteButton img={my} imgOn={myOn} title="我的" route="/my" />
    </div>
}

function RouteButton({ img, imgOn, route, title }) {
    const location = useLocation();
    console.log(location)
    return <div className='flex flex-col justify-center' onClick={()=>history.push(route)}>
        {location.pathname === route ?
            <img src={imgOn} className="w-6 h-6" /> :
            <img src={img} className="w-6 h-6" />
        }
        <span className='text-gray'>{title}</span>
    </div>
}