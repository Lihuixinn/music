import React from 'react';
import {Link} from "react-router-dom"
import "./singers.css"



const singers = [
    {
        name:"张惠妹aMEI",
        description:'台湾歌手张惠妹',
        image:"https://p2.music.126.net/cSAmmAvsKhm3N-zxWg7QcQ==/109951168490195225.jpg?param=62y62"
    },
    {
        name: "吴莫愁Momo",
        description: "《中国好声音》选手吴莫愁",
        image: "https://p2.music.126.net/TQZGbxp-xnJla-q7ii9z0A==/1364493985498917.jpg?param=62y62"
    },
    {
        name: "孙楠",
        description: "歌手孙楠 代表作《你快回来》《燃烧》",
        image: "https://p2.music.126.net/whG7pbsbd1akKtOE7V3R_Q==/109951168299161319.jpg?param=62y62"
    },
    {
        name: "麦田老狼",
        description: "歌手，音乐人。代表作《同桌的你》等。",
        image: "https://p2.music.126.net/1GIlkxKmvKu66ufU83FyvA==/31885837222663.jpg?param=62y62"
    },
    {
        name: "陈楚生",
        description: "唱作歌手",
        image: "https://p2.music.126.net/MXMZYksJmsa0gcGkuk2mDQ==/109951167712155407.jpg?param=62y62"
    },
]

const anchors =[
    {
        name:"陈立",
        description:'心理学家、美食家陈立教授',
        image:"http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40"
    },
    {
        name:"刘维-Julius",
        description:'歌手、播客节目《维维道来》主理人',
        image:"http://p2.music.126.net/GgXkjCzeH4rqPCsrkBV1kg==/109951164843970584.jpg?param=40y40"
    },
    {
        name:"莫非定律乐团",
        description:'男女双人全创作独立乐团',
        image:"http://p2.music.126.net/3wdk-zlt0t06DZSqFvhkRw==/109951168702119532.jpg?param=40y40"
    },
    {
        name:"碎嘴许美达",
        description:'脱口秀网络红人',
        image:"http://p2.music.126.net/NHjNoFpLDEZ-3OR9h35z1w==/109951165825466770.jpg?param=40y40"
    },
    {
        name:"银临Rachel",
        description:'',
        image:"http://p2.music.126.net/CpUdHPNvBvN7kebvL21TTA==/109951163676573083.jpg?param=40y40"
    },
]

const SingerComponent: React.FC = ()=> {
  return (
    <div className="g-sd1">
        <div className="user-profile">
            <p className="note">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <Link to='/' className='btn'>用户登录</Link>
        </div>  
        {/* 入驻歌手 */}
        <div className='singer'>
        <h4 className='v-hd'>
            <span>入驻歌手</span>
            <Link to="/" className='more'>查看全部</Link>
        </h4>
        <ul className='singer-list'>
            {singers.map((singer, index) => (
            <li key={index}>
                <Link to="/" className='item'>
                    <img src={singer.image} alt={singer.name} />
                    <div className='ifo'>
                        <h4 style={{marginTop:"8px" ,color: "#666"}}>{singer.name}</h4>
                        <p className='des'>{singer.description}</p>
                    </div>
                </Link>
            </li>
            ))}
        </ul>
        <div >
        <a target="_blank" rel="noreferrer" href="https://music.163.com/st/musician" className="btn btn-img login-btn3">
          <i className="btn-img login-btn4">申请成为网易音乐人</i>
        </a>
        </div>
        </div>
        {/* 热门主播 */}
        <div className='n-hotdj'>
        <h2 className='v-hd3'>热门主播</h2>
            <ul className='f-cb'>
                {anchors.map(anchor => (
                <li key={anchor.name}>
                    <Link to="/">
                    <img src={anchor.image} alt={anchor.name} /></Link>
                    <div className="info">
                        <span>{anchor.name}</span>
                        <p className='des'>{anchor.description}</p>
                    </div>
                    
                </li>
                ))}
            </ul>   
        </div>
    </div>
 
  );
};

export default SingerComponent;