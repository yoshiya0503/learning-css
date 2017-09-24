/**
 * @fileoverview Home
 * @name index.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="logo">
            <a href="/" alt="sample site">sample site</a>
          </h1>
          <nav className="global-nav">
            <ul>
              <li className="nav-item active"><a href="#">HOME</a></li>
              <li className="nav-item"><a href="#">ABOUT</a></li>
              <li className="nav-item"><a href="#">NEWS</a></li>
              <li className="nav-item"><a href="#">TOPICS</a></li>
              <li className="nav-item"><a href="#">DOCS</a></li>
              <li className="nav-item"><a href="#">BLOG</a></li>
            </ul>
          </nav>
        </header>
        <div className="wrapper .clearfix">
          <main className="main">
            <section className="hot-topic clearfix">
              <a href="#">
                <img className="image" src="https://avatars1.githubusercontent.com/u/5334715?v=3" alt="ホットトピック" />
              </a>
              <div className="content">
                <h3 className="title"> これはテスト</h3>
                <p className="desc">
                  長い文章長い文章
                  長い文章長い文章
                  長い文章長い文章
                </p>
                <time className="date" datetime="2015-09-01">2015/09/01</time>
              </div>
            </section>
            <section className="news">
              <h2 className="heading">NEWS</h2>
              <ul className="scroll-list">
                <li className="scroll-item">
                  <a href="#">
                    <time className="date" datetime="2015-08-04"> 2015/08/04</time>
                    <span className="category news">News</span>
                    <span className="title">News更新しましたffffffffffffffffffffffffffffffffffffffffffff</span>
                  </a>
                </li>
                <li className="scroll-item">
                  <a href="#">
                    <time className="date" datetime="2015-08-04"> 2015/08/04</time>
                    <span className="category news">News</span>
                    <span className="title">News更新しました</span>
                  </a>
                </li>
              </ul>
            </section>
            <section className="articles">
              <h2 className="hidden">ARTILCES</h2>
              <div className="clearfix">
                <a href="#" className="article-box">
                  <h3 className="title">実務で使えるHTML/CSSモダンコーディングTIPS</h3>
                  <p className="desc">新し要素が増えました</p>
                  <time className="date" datetime="2017/09/23">
                    2017/09/23
                  </time>
                  <img className="image" src="https://pbs.twimg.com/profile_banners/602904575/1489314000/1500x500" />
                </a>
                <a href="#" className="article-box">
                  <h3 className="title">実務で使えるHTML/CSSモダンコーディングTIPS</h3>
                  <p className="desc">新し要素が増えました</p>
                  <time className="date" datetime="2017/09/23">
                    2017/09/23
                  </time>
                  <img className="image" src="https://pbs.twimg.com/profile_banners/602904575/1489314000/1500x500" />
                </a>
                <a href="#" className="article-box">
                  <h3 className="title">実務で使えるHTML/CSSモダンコーディングTIPS</h3>
                  <p className="desc">新し要素が増えました</p>
                  <time className="date" datetime="2017/09/23">
                    2017/09/23
                  </time>
                  <img className="image" src="https://pbs.twimg.com/profile_banners/602904575/1489314000/1500x500" />
                </a>
              </div>
            </section>
          </main>
          <div className="sidemenu">
            <h2 className="heading">RANKING</h2>
            <ol className="ranking">
              <li className="ranking-item">
                <a href="#">
                  <img className="image" src="/" alt="グラフ画像" />
                  <span className="order"> </span>
                  <p className="text">HTML/CSSコーディング </p>
                </a>
              </li>
              <li className="ranking-item">
                <a href="#">
                  <img className="image" src="/" alt="グラフ画像" />
                  <span className="order"> </span>
                  <p className="text">HTML/CSSコーディング </p>
                </a>
              </li>
              <li className="ranking-item">
                <a href="#">
                  <img className="image" src="/" alt="グラフ画像" />
                  <span className="order"> </span>
                  <p className="text">HTML/CSSコーディング </p>
                </a>
              </li>
            </ol>
          </div>
        </div>
        <footer className="footer">
        </footer>
      </div>
    );
  }
}
