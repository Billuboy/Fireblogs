import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import Header from './header';
import Footer from './footer';
import landing from '../pages/index';
import singleBlog from '../pages/blog';
import create from '../pages/createBlog';
import userBlogs from '../pages/userBlogs';
import gaming from '../pages/category/gaming';
import technology from '../pages/category/technology';
import tweaks from '../pages/category/tweaks';
import notFound from '../pages/404';

import ProtectedRoute from './ProtectedRoute';

export default function App() {
  return (
    <div>
      <Router history={history}>
        <Header />
        <div className="w-full flex justify-center body">
          <div className="w-body">
            <Switch>
              <Route path="/" component={landing} exact />
              <Route path="/blogs/:slug" component={singleBlog} exact />
              <ProtectedRoute path="/create-blog" component={create} exact />
              <ProtectedRoute path="/my-blogs" component={userBlogs} exact />
              <Route path="/category/gaming" component={gaming} exact />
              <Route path="/category/technology" component={technology} exact />
              <Route path="/category/tweaks" component={tweaks} exact />
              <Route path="*" component={notFound} exact />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
