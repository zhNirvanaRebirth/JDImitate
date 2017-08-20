/**
 * Created by ZH on 2017/8/20.
 */
import React, {Component} from 'react';
import '../css/bass.css'
import '../css/navigation.css';
import location from '../res/icon-location.png';
import logo from '../res/logo.v2.png';
class Navigation extends Component {
    render() {
        return (
            <div id="navigation-back">
                <div id="navigation-content">
                    <div id="navigation-content-left" className="fn-left">
                        <ul>
                            <li><img id="navigation-content-logo" src={logo} className="Navigation-location" alt="location"/></li>
                            <li><img src={location} className="Navigation-location" alt="location"/></li>
                            <li><a>北京</a></li>
                        </ul>
                    </div>
                    <div id="navigation-content-right" className="fn-right">
                        <ul>
                            <li><a>你好，请登录</a></li>
                            <li><a className="Navigation-register">免费注册</a></li>
                            <li><a>我的订单</a></li>
                            <li>
                                <dl>
                                    <dt><a>我的京东</a></dt>
                                    <dd><a>待处理的订单</a></dd>
                                    <dd><a>待处理的订单</a></dd>
                                    <dd><a>待处理的订单</a></dd>
                                    <dd><a>待处理的订单</a></dd>
                                    <dd><a>待处理的订单</a></dd>
                                </dl>
                            </li>
                            <li><a>京东会员</a></li>
                            <li><a>企业采购</a></li>
                            <li><a>客户服务</a></li>
                            <li><a>网站导航</a></li>
                            <li><a className="Navigation-jd-phone">手机京东</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default Navigation;
