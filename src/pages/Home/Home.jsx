import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className={styles.hero}>
              <div className={styles.heroleft}>
                <h1>SHAPE THE</h1>
                <h2>WORLD !</h2>
                <Link to='/register'><button>JOIN US</button></Link>
              </div>
              <div className={styles.heroright}>
                <img src='/images/hero.png' alt='hero' />
              </div>
            </div>
            <div className={styles.poptag}>
              <h2>Popular Tags</h2>
              <h4>Don't focus on having a great blog. Focus on producing a blog</h4>
              <h4>that's great for your readers.</h4>
            </div>
            <div className={styles.poptagrid}>
              <div className={styles.ptg}>
                <div className={styles.ptgg}>
                  <img src='/images/ptgg-1.png' alt='ptgg' />
                  <button>Travel</button>
                </div>
                <div className={styles.ptgg}>
                  <img src='/images/ptgg-2.png' alt='ptgg' />
                  <button>Food</button>
                </div>
                <div className={styles.ptgg}>
                  <img src='/images/ptgg-3.png' alt='ptgg' />
                  <button>Music</button>
                </div>
                <div className={styles.ptgg}>
                  <img src='/images/ptgg-4.png' alt='ptgg' />
                  <button>Fashion</button>
                </div>
                <div className={styles.ptgg}>
                  <img src='/images/ptgg-5.png' alt='ptgg' />
                  <button>Sports</button>
                </div>
                <div className={styles.ptgg}>
                  <img src='/images/ptgg-6.png' alt='ptgg' />
                  <button>Business</button>
                </div>
              </div>
            </div>
            <div className={styles.popblogs}>
              <h2>Popular Blogs</h2>
              <h4>If you want to continually grow your blog, you need to learn to</h4>
              <h4>blog on a consistent basis.</h4>
            </div>
            <div className={styles.popblogrid}>
              <div className={styles.pbg}>
                <div className={styles.pbgg}>
                  <div className={styles.pbgg1}>
                    <img src="/images/popblog.png" alt="pbg" />
                  </div>
                  <div className={styles.pbgg2}>
                    <button>Technology</button>
                    <h4>Making Work Fun : How To Find And Harness Your Creativity</h4>
                  </div>
                </div>
                <div className={styles.pbgg}>
                  <div className={styles.pbgg1}>
                    <img src="/images/popblog.png" alt="pbg" />
                  </div>
                  <div className={styles.pbgg2}>
                    <button>Technology</button>
                    <h4>Making Work Fun : How To Find And Harness Your Creativity</h4>
                  </div>
                </div>
                <div className={styles.pbgg}>
                  <div className={styles.pbgg1}>
                    <img src="/images/popblog.png" alt="pbg" />
                  </div>
                  <div className={styles.pbgg2}>
                    <button>Technology</button>
                    <h4>Making Work Fun : How To Find And Harness Your Creativity</h4>
                  </div>
                </div>
                <div className={styles.pbgg}>
                  <div className={styles.pbgg1}>
                    <img src="/images/popblog.png" alt="pbg" />
                  </div>
                  <div className={styles.pbgg2}>
                    <button>Technology</button>
                    <h4>Making Work Fun : How To Find And Harness Your Creativity</h4>
                  </div>
                </div>
                <div className={styles.pbgg}>
                  <div className={styles.pbgg1}>
                    <img src="/images/popblog.png" alt="pbg" />
                  </div>
                  <div className={styles.pbgg2}>
                    <button>Technology</button>
                    <h4>Making Work Fun : How To Find And Harness Your Creativity</h4>
                  </div>
                </div>
                <div className={styles.pbgg}>
                  <div className={styles.pbgg1}>
                    <img src="/images/popblog.png" alt="pbg" />
                  </div>
                  <div className={styles.pbgg2}>
                    <button>Technology</button>
                    <h4>Making Work Fun : How To Find And Harness Your Creativity</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.autoblog}>
              <div className={styles.autoblogimg}></div>
              <div className={styles.ab}>
                <h3>AUTOBLOG</h3>
                <h2>Laborum Ullamco Sunt id ut Sunt</h2>
                <div className={styles.absmall}>
                  <h5>Bessie Hawkins</h5>
                  <h5>May 7, 2019 (10 mins read)</h5>
                </div>
                <p>
                  Proident aliquip velit qui commodo officia qui consectetur dolor ullamco
                  aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum 
                  nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis
                  dolor anim excepteur. In aliquip mollit nulla consequat velit magna.Ea minim ex consectetur excepteur. Ex laborum 
                  nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis
                  dolor anim excepteur.
                </p>
              </div>
            </div>
            <div className={styles.infopanel}>
              <div className={styles.siteinfo}>
                <div className={styles.siteinfo1}>
                  <img src='/images/siteinfo.png' alt='siteinfo' />
                </div>
                <div className={styles.siteinfo2}>
                  <h1>New Blog - A New You</h1>
                  <div>
                    <h3>Thrilling topics to look out for. Create a unique and beautiful blog. It's easy and free.</h3>
                    <button>Create</button>
                  </div>
                </div>
                <div className={styles.siteinfo3}>
                  <h1>Know Your Audience</h1>
                  <div>
                    <h3>You'll see where your audience is coming from and what they're interested in.</h3>
                    <img src='/images/audience.png' alt='audience' />
                  </div>
                </div>
                <div className={styles.siteinfo4}>
                  <h1>Hold Onto Memories</h1>
                  <div>
                    <h3>Save the moments that matter. Blogger lets you safely store thousands of posts with images.</h3>
                    <img src='/images/memories.png' alt='memories' />
                  </div>
                </div>
              </div>
              <div className={styles.popbloggers}>
                <h2>Popular Bloggers</h2>
                <div className={styles.bloggers}>
                  <div className={styles.blogger}>
                    <div className={styles.bloggername}>
                      <h3>Johnny Doe</h3>
                      <h4>Age : 25</h4>
                    </div>
                    <div className={styles.bloggerimg}>
                      <img src='/images/blogger.png' alt='blogger' />
                    </div>
                  </div>
                </div>
                <div className={styles.bloggers}>
                  <div className={styles.blogger}>
                    <div className={styles.bloggername}>
                      <h3>Johnny Doe</h3>
                      <h4>Age : 25</h4>
                    </div>
                    <div className={styles.bloggerimg}>
                      <img src='/images/blogger.png' alt='blogger' />
                    </div>
                  </div>
                </div>
                <div className={styles.bloggers}>
                  <div className={styles.blogger}>
                    <div className={styles.bloggername}>
                      <h3>Johnny Doe</h3>
                      <h4>Age : 25</h4>
                    </div>
                    <div className={styles.bloggerimg}>
                      <img src='/images/blogger.png' alt='blogger' />
                    </div>
                  </div>
                </div>
                <div className={styles.bloggers}>
                  <div className={styles.blogger}>
                    <div className={styles.bloggername}>
                      <h3>Johnny Doe</h3>
                      <h4>Age : 25</h4>
                    </div>
                    <div className={styles.bloggerimg}>
                      <img src='/images/blogger.png' alt='blogger' />
                    </div>
                  </div>
                </div>
                <div className={styles.bloggers}>
                  <div className={styles.blogger}>
                    <div className={styles.bloggername}>
                      <h3>Johnny Doe</h3>
                      <h4>Age : 25</h4>
                    </div>
                    <div className={styles.bloggerimg}>
                      <img src='/images/blogger.png' alt='blogger' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
};

export default Home;